import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import MessageContainer from '../../messages/MessageContainer'
import MainSidebar from "../../MainSidebar"

const Home = () => {
  return (
    <div className='w-full bg-gray-100 flex justify-center items-center'>
    <div className=' min-h-screen flex rounded-lg overflow-hidden bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar/>
        <MessageContainer/>
    </div>
    </div>
  )
}

export default Home
