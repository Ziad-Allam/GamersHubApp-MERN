import React from 'react'
import { FaRegCircleUser, FaRegHeart } from 'react-icons/fa6'
import { GrLocation } from 'react-icons/gr'
import { LuClipboardList } from 'react-icons/lu'
import { RiSettings4Line } from 'react-icons/ri'
import { LuCircleHelp } from "react-icons/lu";
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { MdOutlineLogout } from 'react-icons/md'
import useLogout from '../../hooks/useLogout'

export const navItems = [
    { label: 'Profile', icon: <FaRegCircleUser size={22} />, to: '/profile' },
    { label: 'Orders', icon: <LuClipboardList size={22} />, to: '/orders' },
    { label: 'Wishlist', icon: <FaRegHeart size={22} />, to: '/Wishlist' },
    { label: 'Addresses', icon: <GrLocation size={22} />, to: '/addresses' },
    { label: 'Settings', icon: <RiSettings4Line size={22} />, to: '/settings' },
    { label: 'Help', icon: <LuCircleHelp size={22} />, to: '/help' },
]
function AccountSideNav() {

    const { user } = useSelector((state) => state.auth);

    const navigate = useNavigate();
    const { pathname } = useLocation()

    const logout = useLogout();

    return (
        <aside className="lg:p-2 space-y-6">

            <div className='px-4 bg-white py-4 rounded-md flex items-center gap-3'>
                <div className="size-9 flex items-center justify-center bg-amber-600 border rounded-full text-white font-bold">
                    {`${user?.firstname[0]?.toUpperCase()}`}
                </div>
                <p className="text-lg text-gray-600 capitalize font-medium">{user?.firstname} {user?.lastname}</p>
            </div>

            <ul className='space-y-1 bg-white p-2 rounded-lg '>
                {
                    navItems.map((item) => {
                        return (
                            <li key={item.label}>
                                <button className='w-full' onClick={() => { navigate(item.to); }}>
                                    <div className={`flex items-center gap-4 px-4 py-3 rounded-md cursor-pointer text-lg  ${pathname === item.to ? 'bg-blue-600 text-white hover:bg-blue-600' : 'hover:bg-gray-100 text-black'}`}>
                                        <span>{item.icon}</span>
                                        {item.label}
                                    </div>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>

            <div className='bg-white rounded-md p-2'>
                <button className='w-full' onClick={logout}>
                    <div className='flex items-center gap-4 px-4 py-3 rounded-md cursor-pointer text-lg hover:text-red-600'>
                        <span><MdOutlineLogout size={20} /></span>
                        Logout
                    </div>
                </button>
            </div>

        </aside>
    )
}

export default AccountSideNav
