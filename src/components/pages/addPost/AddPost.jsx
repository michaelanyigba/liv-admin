import React from 'react'
import MainSidebar from '../../MainSidebar'
import AddPostMainPage from '../../post/AddPostMainPage'

const AddPost = () => {
  return (
    <div className=' flex h-screen overflow-x-hidden'>
    <div className=' w-[1800px] rounded-sm overflow-hidden flex'>
       <MainSidebar />
       <AddPostMainPage />
   </div>
</div>
  )
}

export default AddPost
