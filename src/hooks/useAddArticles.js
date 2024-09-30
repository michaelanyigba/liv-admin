import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import {useNavigate} from "react-router-dom"


const useAddArticles = () => {
 const [loading, setLoading] = useState(false);
 const {setAuthUser} = useAuthContext();
 const navigate = useNavigate()

 const addArticles = async ({title, content})=>{

    const success = handleInputErrors({title, content})
    if(!success) return;

    setLoading(true);
    try {
        const res = await fetch("https://liv-backend-2.onrender.com/api/articles/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title, content})
        })

        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        navigate("/addArticles")

        toast.success("Articles added successfully")
    } catch (error) {
        toast.error(error.message)
        
    }finally{
        setLoading(false);
    }
 }

 return {loading, addArticles}
}

export default useAddArticles

function handleInputErrors({title, content}){
    if(!title || !content){
        toast.error("Please fill all the fields")
        return false;
    }
    return true

}
