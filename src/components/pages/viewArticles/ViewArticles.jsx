import React from 'react'
import MainSidebar from '../../MainSidebar'
import ViewArticlesMainPage from '../../articles/ViewArticlesMainPage'

const ViewArticles = () => {
  return (
    <div className=' flex h-screen overflow-x-hidden justify-center'>
    <div className=' w-[1800px] rounded-sm overflow-hidden flex'>
       <MainSidebar />
       <ViewArticlesMainPage />
   </div>
</div>
  )
}

export default ViewArticles
