import React from 'react'
import MainSidebar from '../../MainSidebar'
import EditCounsellorsMainPage from '../../counsellors/EditCounsellorsMainPage'

const EditCounsellors = () => {
  return (
    <div className=' flex h-screen overflow-x-hidden'>
    <div className=' w-[1800px] rounded-sm overflow-hidden flex'>
       <MainSidebar />
       <EditCounsellorsMainPage/>
   </div>
</div>
  )
}

export default EditCounsellors
