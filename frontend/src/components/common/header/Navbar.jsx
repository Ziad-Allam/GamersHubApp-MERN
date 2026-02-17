import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from '../../../features/categories/categoriesSlice';
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { categories, isLoading } = useSelector((state) => state.categories)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    return (
        <nav className='lg:border-b bg-white'>
            <div className='max-w-screen-2xl mx-auto hidden lg:block h-12'>
                {
                    isLoading === false &&
                    <nav className='flex flex-col lg:flex-row lg:justify-center lg:items-center h-full gap-6'>
                        {categories?.map((category) => {
                            return (
                                <button key={category._id} onClick={() => navigate(`/shop/${category._id}`)} className='capitalize font-semibold hover:underline text-base' >
                                    {category.title}
                                </button>
                            )
                        })}
                    </nav>
                }
            </div>
        </nav>
    )

}

export default Navbar
