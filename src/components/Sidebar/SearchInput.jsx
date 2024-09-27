import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import useConversation from '../../context/useConversation';
import useGetConversation from '../../hooks/useGetCoversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const {setSelectedConversation} = useConversation();
    const {conversations} = useGetConversation();

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(!search) return;
        if(search.length < 3){
          return  toast.error("Search term must be at least 3 characters long")
        }

        const conversation = conversations.find((e)=>e.fullName.toLowerCase().includes(search.toLowerCase()));

        if(conversation){
            setSelectedConversation(conversation);
            setSearch("");
        }else toast.error("No such user found");
    }
    
  return (
   <form onSubmit={handleSubmit} action="" className=' flex items-center gap-2 justify-between'>
    <input
    value={search}
    onChange={(e)=> setSearch(e.target.value)}
     type="text" placeholder='Search..' className=' input input-bordered rounded-sm w-[500px]' />
    <button
     type='submit' className=''><CiSearch className='w-[45px] h-[45px] font-bold text-white' /></button>
   </form>
  )
}

export default SearchInput


// STARTER CODE FOR SEARCH
// import React from 'react'
// import { CiSearch } from "react-icons/ci";

// const SearchInput = () => {
//   return (
//    <form action="" className=' flex items-center gap-2'>
//     <input type="text" placeholder='Search..' className=' input input-bordered rounded-full' />
//     <button type='submit' className=' btn btn-circle bg-sky-500 text-white'><CiSearch className='w-6' /></button>
//    </form>
//   )
// }

// export default SearchInput
