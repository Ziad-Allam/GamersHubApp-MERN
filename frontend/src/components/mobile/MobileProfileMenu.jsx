import React from 'react'
import SideDrawer from '../../components/common/SideDrawer';
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { navItems } from "../../components/account/AccountSideNav";
import { MdOutlineLogout } from 'react-icons/md';
import { useSelector } from 'react-redux';
import useLogout from '../../hooks/useLogout';

function MobileProfileMenu({ isUserSidebarOpen, setIsUserSidebarOpen }) {

    const logout = useLogout();

    const handleLogout = () => {
        logout();                
        setIsUserSidebarOpen(false);
    };

    const { user } = useSelector((state) => state.auth);

    return (
        <SideDrawer isOpen={isUserSidebarOpen} setIsOpen={setIsUserSidebarOpen}>

            <div className='px-2'>

                <div className='flex justify-between items-center py-4'>
                    <h1 className='text-blue-500 text-xl font-semibold'>My Profile</h1>
                    <button onClick={() => { setIsUserSidebarOpen(false) }}>
                        <IoIosClose size={28} />
                    </button>
                </div>

                <div className='space-y-6'>

                    <div className='px-4 bg-white py-4 rounded-md flex items-center gap-3'>
                        <div className="size-9 flex items-center justify-center bg-amber-600 border rounded-full text-white font-bold">
                            {`${user?.firstname[0]?.toUpperCase()}`}
                        </div>
                        <p className="text-lg text-gray-600 capitalize font-medium">{user?.firstname} {user?.lastname}</p>
                    </div>

                    <ul className='space-y-2'>
                        {
                            navItems.map((item) => {
                                return (
                                    <li key={item.label} className='bg-white rounded-md'>
                                        <Link to={item.to} onClick={() => { setIsUserSidebarOpen(false) }}>
                                            <div className='flex items-center gap-4 px-4 py-3 text-lg'>
                                                <span>{item.icon}</span>
                                                {item.label}
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <li onClick={handleLogout} className='bg-red-600 rounded-md'>
                            <button className="px-4 py-3 text-lg hover:bg-red-500">
                                <div className="flex items-center gap-4 text-white">
                                    <span><MdOutlineLogout size={20} /></span>
                                    Logout
                                </div>
                            </button>
                        </li>
                    </ul>

                </div>

            </div>

        </SideDrawer>
    )
}

export default MobileProfileMenu
