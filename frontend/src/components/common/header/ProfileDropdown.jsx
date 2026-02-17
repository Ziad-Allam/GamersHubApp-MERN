import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import useClickOutside from "../../../hooks/useClickOutside";
import { MdOutlineLogout } from "react-icons/md";
import avatarImg from "../../../assets/avatar.png"
import { navItems } from "../../../components/account/AccountSideNav";
import useLogout from "../../../hooks/useLogout";

function ProfileDropdown() {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const [isOpen, setIsOpen] = useState(false);

    const logout = useLogout();

    let domNode = useClickOutside(() => {
        setIsOpen(false)
    })

    return (
        <div className="relative z-50" ref={domNode}>
            <>
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
                    <img src={avatarImg} alt="" className={`size-7 rounded-full ${isAuthenticated ? 'ring-2 ring-blue-500' : ''}`} />
                    <div className="flex items-center gap- text-white">
                        <span className="capitalize text-sm">
                            {user?.firstname} {user?.lastname}
                        </span>
                        {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                    </div>
                </button>

                {/* show dropdowns */}
                {isOpen &&
                    (
                        <div className="absolute top-12 bg-amber-600 min-w-[150px] w-full p-2 rounded-b-md flex flex-col gap-2 text-sm text-white">
                            <ul>
                                {
                                    navItems.map((item) => (
                                        <li key={item.label} onClick={() => setIsOpen(false)}>
                                            <Link to={item.to} className="block px-4 py-2 text-sm hover:bg-blue-600 rounded-md">
                                                <div className="flex items-center gap-2">
                                                    <span>{item.icon}</span>
                                                    {item.label}
                                                </div>
                                            </Link>
                                        </li>
                                    ))
                                }
                                <li onClick={logout}>
                                    <button className="block w-full px-4 py-2 text-sm hover:bg-gray-100 rounded-md hover:text-red-600">
                                        <div className="flex items-center gap-2">
                                            <span><MdOutlineLogout size={20} /></span>
                                            Logout
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </>
        </div>
    );
}

export default ProfileDropdown;
