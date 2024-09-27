import React from 'react'
import MainSidebar from '../../MainSidebar'
import ViewUserMainPage from '../../user/ViewUsersMainPage'

const ViewUsers = () => {
  return (
    <div className=' flex h-screen overflow-x-hidden'>
        <div className='w-[1800px] rounded-sm overflow-hidden flex'>
        <MainSidebar/>
        <ViewUserMainPage/>
        </div>
      
    </div>
  )
}

export default ViewUsers
