import React, { useEffect, useState } from 'react'
import userImage from "../../../assets/images/user.png"
import { Link } from 'react-router-dom'
import {useLocation, useParams, useNavigate} from "react-router-dom"
import toast from 'react-hot-toast'


const EditUser = () => {
    const [loading, setLoading] = useState(false)
    const location = useLocation()
    const id = location.pathname.split("/")[2];
    const navigate = useNavigate();

    const [fullName, setFullName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [dob, setDob] = useState();
    const [bio, setBio] = useState();
    const [gender, setGender] = useState();
    const [profilePic, setProfilePic] = useState();
    
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/users/update/${id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName, username, dob, bio, email, gender
                })
            })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Product updated:  ", data)
      toast.success("User Updated Successfully")
      navigate("/viewUsers")
            
        } catch (error) {
            console.log("Error Updating product", error.message)
        }

    }


    useEffect(()=>{
        const getUser = async () =>{
            setLoading(true);

            try {
                const res = await fetch("/api/users/find/"+id);
                const data = await res.json();
                setFullName(data.fullName)
                setUsername(data.username);
                setEmail(data.email);
                setDob(data.dob);
                setBio(data.bio)
                setProfilePic(data.profilePic)
                if(data.error){
                    throw new Error(data.error);
                }
                
            } catch (error) {
                toast.error(error.message);
                
            }finally{
                setLoading(false);
            }
        }
        getUser();
    },[]);
    
    return (
             <div className=''>
                <div className=''>
                <div className='h-[800px] w-[800px] bg-pink-400 flex'>
                    <div className=' ms-6 mt-[100px]'>
                        <img src={profilePic} alt="user image" className='h-[200px] w-[200px] rounded-full mb-5 ' />
                        <h1 className=' text-[20px] text-center font-bold'>{username}</h1>
                    </div>
                    <div className=' line bg-black w-[2px] h-[600px] mt-[90px] ms-7'></div>
                    <form onSubmit={handleUpdate}>
                    <div className='inputs ms-[100px] py-[100px]'>
                        <div>
                            <p className=' text-[20px] font-bold mb-2 '>Full Name</p>
                            <input type="text" className=' h-[50px] w-[300px] mb-5 px-3 py-5 text-[20px] ' 
                            value={fullName}
                            onChange={(e)=>setFullName(e.target.value)}/>
                        </div>
                        <div>
                            <p className=' text-[20px] font-bold mb-2 '>Username</p>
                            <input type="text" className=' h-[50px] w-[300px] mb-5 px-3 py-5 text-[20px] '
                            value={username} 
                            onChange={(e)=>setUsername((e.target.value))}/>
                        </div>
                        <div>
                            <p className=' text-[20px] font-bold mb-2 '>Email</p>
                            <input type="email" className=' h-[50px] w-[300px] mb-5 px-3 py-5 text-[20px] ' 
                            value={email}
                            onChange={(e)=>setEmail((e.target.value))}/>
                        </div>
                        <div>
                            <p className=' text-[20px] font-bold mb-2 '>Date of Birth</p>
                            <input type="date" className=' h-[50px] w-[300px] mb-5 px-3 py-5 text-[20px] '
                            value={dob} 
                            onChange={(e)=>setDob((e.target.value))}/>
                        </div>
                        <div>
                            <p className=' text-[20px] font-bold mb-2 '>Bio</p>
                            <textarea name="" rows={4} cols={34}
                            value={bio}
                            onChange={(e)=>setBio((e.target.value))} id=""></textarea>
                        </div>
                        <div className=' flex justify-between'>
                        <button className=' flex items-center justify-center bg-green-400 p-4 text-white text-[20px] rounded-md w-[120px] mt-4'>Update</button>
                        <Link to={"/viewUsers"}>
                        <button className=' flex items-center justify-center bg-red-400 p-4 text-white text-[20px] rounded-md w-[120px] mt-4'>cancel</button>
                        </Link>
                    </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
    )
}

export default EditUser
