import React from 'react'
import MainSidebar from '../../MainSidebar'
import EditPostMainPage from '../../post/EditPostMainPage'

const EditPost = () => {
  return (
    <div className=" flex h-screen overflow-x-hidden">
      <div className=" w-[1800px] rounded-sm overflow-hidden flex">
        <MainSidebar />
        <EditPostMainPage/>
      </div>
    </div>
  )
}

export default EditPost
