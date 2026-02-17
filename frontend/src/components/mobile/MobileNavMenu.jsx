import React, { useEffect } from 'react'
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from '../../features/categories/categoriesSlice';
import { useNavigate } from 'react-router-dom'
import SideDrawer from '../common/SideDrawer';

function MobileNavMenu({ openNavItems, setOpenNavItems }) {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    const { categories } = useSelector((state) => state.categories)

    return (
        <SideDrawer isOpen={openNavItems} setIsOpen={setOpenNavItems}>
            <div className='px-2'>

                <div className='flex justify-between items-center py-4'>
                    <h1 className='text-blue-500 text-xl font-semibold'>Categories</h1>
                    <button onClick={() => { setOpenNavItems(false) }}>
                        <IoIosClose size={28} />
                    </button>
                </div>

                <nav>
                    <ul className='space-y-2'>
                        {categories?.map((category) => {
                            return (
                                <li key={category?._id} className='px-4 py-3 bg-white capitalize font-medium' onClick={() => { navigate(`/shop/${category._id}`); setOpenNavItems(false) }}>
                                    {category.title}
                                </li>
                            )
                        })}
                    </ul>
                </nav>

            </div>
        </SideDrawer>
    )
}

export default MobileNavMenu
