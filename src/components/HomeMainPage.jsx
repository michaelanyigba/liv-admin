import React, { useEffect, useState } from "react";
import { GiMoon } from "react-icons/gi";
import { IoPersonCircle } from "react-icons/io5";
import productsIcon from "../assets/images/milk.jpeg";
import toast from "react-hot-toast"

import userICon from "../assets/images/user.png";

import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import LogoutButton from "./Sidebar/LogoutButton";

const HomeMainPage = () => {
  const {users} = useUserContext()

  const [counsellors, setCounsellors] = useState([]) 
  const [posts, setPosts] = useState([]) 
  const {loading, setLoading} = useState(false)
  const [articles, setArticles]= useState([])
  const [userCount, setUserCount] = useState(1)

  useEffect(()=> {
    const count = JSON.parse(localStorage.getItem("userCount"))||1;
    setUserCount(count)

  },[])

  // useEffect(()=>{
  //     const getUsers = async () =>{

  //         try {
  //             const res = await fetch("/api/users/all");
  //             const data = await res.json();
  //             setUsers(data)
  //             if(data.error){
  //                 throw new Error(data.error);
  //             }
              
  //         } catch (error) {
  //             toast.error(error.message);
              
  //         }finally{
  //         }
  //     }
  //     getUsers();
  // },[])


  useEffect(()=>{
      const getCounsellors = async () =>{

          try {
              const res = await fetch("/api/counsellors/all");
              const data = await res.json();
              setCounsellors(data)
              if(data.error){
                  throw new Error(data.error);
              }
              
          } catch (error) {
              toast.error(error.message);
              
          }finally{
          }
      }
      getCounsellors();
  },[])

  // fetching of articles

  useEffect(()=>{
      const getArticles = async () =>{

          try {
              const res = await fetch("/api/articles/all");
              const data = await res.json();
              setArticles(data)
              if(data.error){
                  throw new Error(data.error);
              }
              
          } catch (error) {
              toast.error(error.message);
              
          }finally{
          }
      }
      getArticles();
  },[])

  useEffect(()=>{
      const getPosts = async () =>{

          try {
              const res = await fetch("/api/post/get-post");
              const data = await res.json();
              setPosts(data.data)
              if(data.error){
                  throw new Error(data.error);
              }
              
          } catch (error) {
              toast.error(error.message);
              
          }finally{
          }
      }
      getPosts();
  },[])

  return (

    <>{loading ? <span className=""></span>:
      <div className=" w-2/3 bg-pink-500 overflow-y-scroll">
      <div className=" ms-6">
      <div className="">
        <div className="flex flex-col text-white">
          <div className=" flex">
          <p className="text-[45px] font-serif mt-5">Hi, Admin Welcome Back!</p>
          <p className="mt-5 ms-[400px]"><LogoutButton/> <span className="font-serif">Logout</span></p>
          </div>
          <p className="font-mono text-[30px] text-yellow-300">Your monitoring dashboard</p>
        </div>
        <div className=" flex flex-row justify-center items-center">
          <div className="text-gray-300 mx-5"></div>
          {/* <div className="text-white me-2">
            <IoPersonCircle size={40} />
          </div> */}
        </div>
      </div>
      {/* widgets */}
      <div className=" flex mt-9 items-center">
        {/* colum */}
        <div className=" flex flex-col">
          <div className=" flex">
          <Link to="/viewUsers">
        <div className="bg-white h-[250px] rounded-md w-[550px] p-4 cursor-pointer shadow-xl me-9">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className=" text-gray-400 text-[35px] font-serif">
                Total Users
              </p>
              <p className=" font-bold text-pink-500 text-[45px] mt-[100px]">
                {userCount}
              </p>
            </div>
            <div className=" rounded-full h-[100px] border-red-600 border-2 w-[100px] p-4">
              <img src={userICon} alt="" />
            </div>
          </div>
        </div>
        </Link>
        <Link to="/viewPosts">
        <div className="bg-white h-[250px] rounded-md w-[550px] p-4 cursor-pointer shadow-xl">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className=" text-gray-400 text-[35px] font-serif">
                Total Posts
              </p>
              <p className=" font-bold text-pink-500 text-[45px] mt-[100px]">
                {posts.length}
              </p>
            </div>
            <div className=" rounded-full h-[100px] border-red-600 border-2 w-[100px] p-4">
              <img src={userICon} alt="" />
            </div>
          </div>
        </div>
        </Link>
          </div>
          <div className=" flex mt-5">
          <Link to="/viewCounsellors">
        <div className="bg-white h-[250px] rounded-md w-[550px] p-4 cursor-pointer shadow-xl me-9">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className=" text-gray-400 text-[35px] font-serif">
                Total Counsellors
              </p>
              <p className=" font-bold text-pink-500 text-[45px] mt-[100px]">
                {counsellors.length}
              </p>
            </div>
            <div className=" rounded-full h-[100px] border-red-600 border-2 w-[100px] p-4">
              <img src={userICon} alt="" />
            </div>
          </div>
        </div>
        </Link>
        <Link to="/viewUsers">
        <div className="bg-white h-[250px] rounded-md w-[550px] p-4 cursor-pointer shadow-xl">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className=" text-gray-400 text-[35px] font-serif">
                Total Articles
              </p>
              <p className=" font-bold text-pink-500 text-[45px] mt-[100px]">
                {articles.length}
              </p>
            </div>
            <div className=" rounded-full h-[100px] border-red-600 border-2 w-[100px] p-4">
              <img src={userICon} alt="" />
            </div>
          </div>
        </div>
        </Link>
          </div>

        </div>
  
       
      </div>
      </div>
    </div>}
    </>
  );
};

export default HomeMainPage;
