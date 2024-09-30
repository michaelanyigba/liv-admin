import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import {useNavigate} from "react-router-dom"


const useAddCounsellors = () => {
 const [loading, setLoading] = useState(false);
 const {setAuthUser} = useAuthContext();
 const navigate = useNavigate()

 const addCounsellors = async ({name, email, phone, bio, gender})=>{

    const success = handleInputErrors({name, email, bio, gender, phone})
    if(!success) return;

    setLoading(true);
    try {
        const res = await fetch("https://liv-backend-2.onrender.com/api/counsellors/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, email, phone, bio, gender})
        })

        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        navigate("/viewCounsellors")
    } catch (error) {
        toast.error(error.message)
        
    }finally{
        setLoading(false);
    }
 }

 return {loading, addCounsellors}
}

export default useAddCounsellors

function handleInputErrors({name, email, bio, gender, phone}){
    if(!name || !email || !bio || !gender || !phone){
        toast.error("Please fill all the fields")
        return false;
    }
    return true

}
