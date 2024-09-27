import React from 'react'
import MainSidebar from '../../MainSidebar'
import AddUserMainPage from '../../user/AddUserMainPage'

const AddUser = () => {
    return (
        <div className=' flex h-screen overflow-x-hidden'>
             <div className=' w-[1800px] rounded-sm overflow-hidden flex'>
                <MainSidebar />
                <AddUserMainPage />
            </div>
        </div>
    )
}

export default AddUser
