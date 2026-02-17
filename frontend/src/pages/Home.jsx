import React, { useEffect } from 'react'
import Banner from '../components/home/Banner'
import { fetchCategories } from '../features/categories/categoriesSlice'
import { useDispatch } from 'react-redux'
import { fetchFeaturedProductsByCategory } from '../features/products/productsSlice'
import Categories from '../components/home/Categories'
import FeaturedProducts from '../components/home/FeaturedProducts'

function Home() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    useEffect(() => {
        dispatch(fetchFeaturedProductsByCategory())
    }, [])

    return (
        <div className='relative'>
            <Banner />
            <Categories />
            <FeaturedProducts />
        </div>
    )
}

export default Home