import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import userImage from "../../assets/images/user.png"
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import { useUserContext } from "../../context/UserContext";


const ViewUserMainPage = ({id}) => {
    const [loading, setLoading] = useState(false);
    const {users, setUsers}= useUserContext()
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()
  
    useEffect(()=>{
        const getUsers = async () =>{
            setLoading(true);

            try {
                const res = await fetch(`/api/users/all?search=${searchTerm}`);
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
    },[searchTerm]);

    const handleDelete = async(id)=> {
      try {
          const response = await fetch(`/api/users/deleteUser/${id}`, {
              method: "DELETE", 
              headers: {
                  "Content-Type": "application/json"
              }
          }).then((response)=> response.json())
          .then(()=>{
            const currentCount = JSON.parse(localStorage.getItem("userCount"))||1;
            localStorage.setItem("userCount", currentCount -1)
            setUsers((prevUsers)=> prevUsers.filter((user)=> user._id !== id))
          })
          toast.success("User deleted successfully")
          // if(response.ok){
          //   logout()
          //     toast.success("User deleted successfully")
              
          //     navigate("/addUsers")
          // }else{
          //     const result = await response.json()
          //     console.log("Failed in deleting user: ", result.message)
          //     alert("Failed to delete User")
              
          // }
          
      } catch (error) {
          console.error("Error deleting user: ", error)          
      }
  }


  return (
    <div className=" w-2/3 bg-gray-100 overflow-y-scroll ">
      <div className=" w-full h-[60px] flex items-center ps-4 bg-pink-500 ">
        <p className="text-white font-serif text-[25px]">View Users</p>
      </div>
      <div className=" flex justify-center items-center mt-6 h-9">
        <div className=" flex me-8  items-center justify-center rounded-md ms-2 h-4 ">
          <form action="">
          <input
            type="text"
            placeholder="Search" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}
            className=" p-4 w-[400px] outline-1 rou" 
          />
          </form>
        </div>
      </div>
      <div className=" w-[99%] bg-white  rounded-md shadow-xl mx-auto mt-6">
        <div className=" text-gray-400 font-serif px-4 py-4">
          <p>User Details</p>
        </div>
        <div>
          <div className="overflow-x-auto mb-3 h-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">          
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    USer Id
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fullname
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Profile
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date of Birth
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gender
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    BIO
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map(user=>(
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user._id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.fullName} </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.username} </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={user.profilePic}
                      alt=""
                      className="w-[30px] h-[30px] rounded-lg"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.dob}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.bio}</td>
                  <td className="px-6 py-4 whitespace-nowrap flex">
                    <Link to={`/editUser/${user._id}`}>
                    <button className="ms-4 rounded-sm w-[70px] text-white font-mono bg-blue-600 py-2">
                      Edit
                    </button>
                    </Link>
                    <button onClick={()=>handleDelete(user._id)}  className="ms-4 rounded-sm w-[70px] text-white font-mono bg-red-600 py-2">
                      Delete
                    </button>
                  </td>
                </tr>
               ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUserMainPage;
