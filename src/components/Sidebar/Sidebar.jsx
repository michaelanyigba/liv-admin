import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=' border-r border-slate-500 p-4 flex flex-col bg-pink-500 w-[500px]'>
        <SearchInput/>
        <div className=' divider px-3 '></div>
        <Conversations/>
      
      <div className=' flex justify-between'>
        <LogoutButton/>
        <Link to={"/"}>
        <IoMdHome className=' text-[35px] mt-2 me-3 cursor-pointer'/>
        </Link>
        </div>
      
    </div>
  )
}

export default Sidebar

// STARTER CODE SNIPPET

// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import LogoutButton from './LogoutButton'

// const Sidebar = () => {
//   return (
//     <div className=' border-r border-slate-500 p-4 flex flex-col'>
//         <SearchInput/>
//         <div className=' divider px-3 '></div>
//         <Conversations/>
      
//         <LogoutButton/>
      
//     </div>
//   )
// }

// export default Sidebar
