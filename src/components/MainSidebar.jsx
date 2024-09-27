import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
import { RiUserAddFill } from "react-icons/ri";
import { MdAddChart } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";
import { BsFileEarmarkPost } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoChatbox } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";
import { MdOutlineViewSidebar } from "react-icons/md"
import { AiTwotoneFileAdd } from "react-icons/ai";

const MainSidebar = () => {
  return (
    <div className=" w-1/4 h-full bg-pink-400 overflow-auto overflow-y-scroll">
      <Link to="/">
        <p className=" text-yellow-300 text-[50px] text-center p-4 font-mono cursor-pointer">
          LIV
        </p>
      </Link>
      <div className=" h-[2px] w-[250px] bg-gray-300 flex items-center justify-center mx-auto"></div>
      <div className="flex flex-col justify-end mt-3 ">
        <div className="flex flex-col items-center">
          <Link to="/">
            <div
              // onClick={() => handleDivClick("products",)}
              className="cursor-pointer w-[300px] flex flex-row h-[50px] items-center justify-start rounded-md p-3 mt-[60px] border-b-4 border-b-pink-500 text-white  hover:bg-white hover:text-red-500
             "
            >
              <div>
                <FaHome size={50} className="" />
              </div>
              <div className=" ml-2 text-[30px] font-mon"> Home</div>
            </div>
          </Link>
          <Link to="/addUser">
            <div
              // onClick={() => handleDivClick("products",)}
              className="cursor-pointer w-[300px] flex flex-row h-[50px] items-center justify-start rounded-md p-3 mt-[60px] border-b-4 border-b-pink-500 text-white  hover:bg-white hover:text-red-500
             "
            >
              <div>
                <RiUserAddFill size={50} className="" />
              </div>
              <div className=" ml-2 text-[30px] font-mon"> Add User</div>
            </div>
          </Link>
          <Link to="/viewUsers">
            <div
              // onClick={() => handleDivClick("products",)}
              className="cursor-pointer w-[300px] flex flex-row h-[50px] items-center justify-start rounded-md p-3 mt-[60px] border-b-4 border-b-pink-500 text-white  hover:bg-white hover:text-red-500
             "
            >
              <div>
                <FaUsersLine size={50} className="" />
              </div>
              <div className=" ml-2 text-[30px] font-mon"> View Users</div>
            </div>
          </Link>
          <Link to="/addPost">
            <div
              className="cursor-pointer w-[300px] flex flex-row h-[50px] items-center justify-start rounded-md p-3 mt-[60px] border-b-4 border-b-pink-500 text-white  hover:bg-white hover:text-red-500
             "
            >
              <div>
                <MdAddChart size={50} className="" />
              </div>

              <div className=" ml-2 text-[30px] font-mon"> Add Post</div>
            </div>
          </Link>
          <Link to="/viewPosts">
            <div
              // onClick={() => handleDivClick("products",)}
              className="cursor-pointer w-[300px] flex flex-row h-[50px] items-center justify-start rounded-md p-3 mt-[60px] border-b-4 border-b-pink-500 text-white  hover:bg-white hover:text-red-500
             "
            >
              <div>
                <BsFileEarmarkPost size={50} className="" />
              </div>
              <div className=" ml-2 text-[30px] font-mon"> View Posts</div>
            </div>
          </Link>
          <Link to="/addCounsellors">
            <div
              className="cursor-pointer w-[300px] flex flex-row h-[50px] items-center justify-start rounded-md p-3 mt-[60px] border-b-4 border-b-pink-500 text-white  hover:bg-white hover:text-red-500
             "
            >
              <div>
                <FaPeopleArrows size={50} className="" />
              </div>
              <div className=" ml-2 text-[30px] font-mon"> Add Counsellors</div>
            </div>
          </Link>
          <Link to="/viewCounsellors">
            <div
              className="cursor-pointer w-[300px] flex flex-row h-[50px] items-center justify-start rounded-md p-3 mt-[60px] border-b-4 border-b-pink-500 text-white  hover:bg-white hover:text-red-500
             "
            >
              <div>
                <FaPeopleLine size={50} className="" />
              </div>
              <div className=" ml-2 text-[27px] font-mon"> View Counsellors</div>
            </div>
          </Link>
          <Link to="/addArticles">
            <div
              className="cursor-pointer w-[300px] flex flex-row h-[50px] items-center justify-start rounded-md p-3 mt-[60px] border-b-4 border-b-pink-500 text-white  hover:bg-white hover:text-red-500
             "
            >
              <div>
                <AiTwotoneFileAdd size={50} className="" />
              </div>
              <div className=" ml-2 text-[27px] font-mon"> Add Articles</div>
            </div>
          </Link>
          <Link to="/viewArticles">
            <div
              className="cursor-pointer w-[300px] flex flex-row h-[50px] items-center justify-start rounded-md p-3 mt-[60px] border-b-4 border-b-pink-500 text-white  hover:bg-white hover:text-red-500
             "
            >
              <div>
                <MdOutlineViewSidebar size={50} className="" />
              </div>
              <div className=" ml-2 text-[27px] font-mon"> View Articles</div>
            </div>
          </Link>
          <Link to="/chatting">
            <div
              // onClick={() => handleDivClick("products",)}
              className="cursor-pointer w-[300px] flex flex-row h-[50px] items-center justify-start rounded-md p-3 mt-[60px] border-b-4 border-b-pink-500 text-white  hover:bg-white hover:text-red-500
             "
            >
              <div>
                <IoChatbox size={50} className="" />
              </div>
              <div className=" ml-2 text-[30px] font-mon"> Chat</div>
            </div>
          </Link>
        </div>
        <div className="flex mt-5 items-center ms-5 "></div>
        {/* <LogoutButton/> */}
        {/* <div className=" mt-[50px] mx-auto items-center justify-center text-center bg-pink-500 cursor-pointer p-2 w-[200px] text-white border-b-2 border-b-gray-700">
          <button>LOG OUT</button>
    
        </div> */}
      </div>
    </div>
  );
};

export default MainSidebar;
