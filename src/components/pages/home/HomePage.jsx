import React from 'react'
import MainSidebar from '../../MainSidebar'
import HomeMainPage from '../../HomeMainPage'

const HomePage = () => {
  return (
    <div className=' flex h-screen overflow-x-hidden'>
    <div className=' w-[1800px] rounded-sm overflow-hidden flex'>
       <MainSidebar />
       <HomeMainPage />
   </div>
</div>

    // <div className='  h-screen overflow-x-hidden'>
    //     <div className='w-[1800px] rounded-sm flex mx-auto overflow-hidden '>
    //  <MainSidebar/>
    //  <HomeMainPage/>
    //  </div>
    // </div>
  )
}

export default HomePage
