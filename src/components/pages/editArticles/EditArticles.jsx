import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import EditArticlesMainPage from '../../articles/EditArticlesMainPage'
import MainSidebar from '../../MainSidebar'

const EditArticles = () => {
  return (
    <div className=" flex h-screen overflow-x-hidden">
      <div className=" w-[1800px] rounded-sm overflow-hidden flex">
        <MainSidebar />
        <EditArticlesMainPage/>
      </div>
    </div>
  )
}

export default EditArticles
