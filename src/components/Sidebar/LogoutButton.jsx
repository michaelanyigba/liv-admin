import React from 'react'
import { CiLogout } from "react-icons/ci"
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {
    const { loading, logout } = useLogout();
    return (
        <div className=' mt-5'>
            {!loading ? (
                <CiLogout className=' w-8 h-8 cursor-pointer' onClick={logout} />
            ) : (
                <span className=' loading loading-spinner'></span>
            )}
        </div>
    )
}

export default LogoutButton
