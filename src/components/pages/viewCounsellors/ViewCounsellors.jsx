import React from 'react'
import MainSidebar from '../../MainSidebar'
import ViewCounsellorsMainPage from '../../counsellors/ViewCounsellorsMainPage'

const ViewCounsellors = () => {
  return (
    <div className=' flex h-screen overflow-x-hidden'>
    <div className=' w-[1800px] rounded-sm overflow-hidden flex'>
       <MainSidebar />
       <ViewCounsellorsMainPage />
   </div>
</div>
  )
}

export default ViewCounsellors
