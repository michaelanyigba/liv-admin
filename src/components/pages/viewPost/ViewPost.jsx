import React from 'react'
import MainSidebar from '../../MainSidebar'
import ViewPostMainPage from '../../post/ViewPostMainPage'

const ViewPost = () => {
  return (
    <div className=' flex h-screen overflow-x-hidden'>
             <div className=' w-[1800px] rounded-sm overflow-hidden flex'>
                <MainSidebar />
                <ViewPostMainPage />
            </div>
        </div>
  )
}

export default ViewPost
