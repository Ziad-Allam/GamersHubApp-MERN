import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/products/productsSlice'
import ProductCard from '../../components/products/ProductCard'
import { useParams } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'
import ProductCardLoading from '../../components/loading/ProductCardLoading'
import Title from '../../components/ui/Title'
import Skeleton from 'react-loading-skeleton'
import SortOptions from '../../components/products/SortOptions'
import { fetchBrands } from '../../features/brands/brandsSlice'
import { fetchCategories } from '../../features/categories/categoriesSlice'
import Container from '../../components/common/Container'

function ProductsList() {

    const dispatch = useDispatch()

    const { products } = useSelector((state) => state.products)
    const isLoading = useSelector((state) => state?.products?.isLoading)

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchProducts(id))
        }
    }, [id])

    useEffect(() => {
        dispatch(fetchBrands())
        dispatch(fetchCategories())
    }, [])

    return (
        <Container>
            <div className='grid grid-cols-1 gap-6'>

                <div className='shadow-sm w-full'>

                    <div className='border-b flex items-center justify-between'>
                        {
                            isLoading ?
                                <div className='py-4'>
                                    <Skeleton width={300} height={20} />
                                </div>
                                :
                                <Title>Shop by {products[0]?.category.title}</Title>
                        }
                        <SortOptions />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 py-3">
                        {isLoading ? (
                            Array.from({ length: 20 }).map((_, i) => (
                                <ProductCardLoading key={i} />
                            ))
                        ) : products && products.length > 0 ? (

                            products?.map(productList => (
                                <ProductCard key={productList?._id} product={productList} />
                            ))
                        ) : (null)}
                    </div>

                </div>

            </div>
        </Container>
    )
}

export default ProductsList
