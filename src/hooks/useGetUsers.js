import React, { useEffect, useState } from 'react'

const useGetUsers = () => {
  const [users, setUsers] = useState()
  useEffect(()=>{
    const getUsers = async () =>{
        setLoading(true);

        try {
            const res = await fetch("https://liv-backend-2.onrender.com/api/users/all");
            const data = await res.json();
            setUsers(data)
            if(data.error){
                throw new Error(data.error);
            }
            
        } catch (error) {
            toast.error(error.message);
            
        }finally{
            setLoading(false);
        }
    }
    getUsers();
},[]);
}

export default useGetUsers
