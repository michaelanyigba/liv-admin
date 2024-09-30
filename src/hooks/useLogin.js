import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const navigate = useNavigate()

    const login = async (username, password) => {

        const success = handleInputErrors({ username, password })
        setLoading(true);

        try {
            const res = await fetch("https://liv-backend-2.onrender.com/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })
            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            if(data.isAdmin === true){
                localStorage.setItem("chat-user", JSON.stringify(data))
                setAuthUser(data);
                navigate("/")
                
            }else{
                toast.error("User not admin");
                return
            }
            
           
        } catch (error) {
            toast.error(error.message)

        } finally {
            setLoading(false)
        }
    }
    // this is the loading and login function
    return { loading, login }

}

export default useLogin

function handleInputErrors({ username, password}) {
    if (!username || !password) {
        toast.error("Please fill all the fields")
        return false;
    }

    return true
}

