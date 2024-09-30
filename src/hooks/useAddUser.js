import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import {useNavigate} from "react-router-dom"


const useAddUser = () => {
 const [loading, setLoading] = useState(false);
 const {setAuthUser} = useAuthContext();
 const navigate = useNavigate()

 const addUser = async ({fullName, username, email, dob, bio, password, confirmPassword, gender})=>{
    const success = handleInputErrors({fullName, username, email, dob, bio, password, confirmPassword,gender})
    if(!success) return;

    setLoading(true);
    try {
        const res = await fetch("https://liv-backend-2.onrender.com/api/auth/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({fullName, username, email, dob, bio, password, confirmPassword, gender})
        })
        const currentCount = JSON.parse(localStorage.getItem("userCount"))||1;
        localStorage.setItem("userCount", currentCount +1)

        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        toast.success("User added successfully")
        navigate("/viewUsers")
    } catch (error) {
        toast.error(error.message)
        
    }finally{
        setLoading(false);
    }
 }

 return {loading, addUser}
}

export default useAddUser

function handleInputErrors({fullName, username, email, dob, bio, password, confirmPassword, gender}){
    if(!fullName || !username || !email || !dob|| !bio || !password || !confirmPassword || !gender){
        toast.error("Please fill all the fields")
        return false;
    }

    if(password !== confirmPassword){
        toast.error("Passwords do not match");
        return false;
    }

    if(password.length < 6){
        toast.error("Password must be atleast 6 characters");
        return false;
    }
    return true
}
