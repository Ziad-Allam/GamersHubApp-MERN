import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductSlider from '../../components/products/ProductSlider';
import SliderLoading from '../loading/SliderLoading';

function FeaturedProducts() {

    const navigate = useNavigate();

    const { featuredProducts, isLoading } = useSelector((state) => state.products)

    return (
        <div className='space-y-5 py-3'>

            {isLoading ?

                Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="my-10">
                        <SliderLoading />
                    </div>
                ))
                :
                featuredProducts?.map((product) => {
                    return (
                        <div key={product?._id}>
                            <div className='flex items-center justify-between px-2'>
                                <p className='capitalize font-semibold text-xl sm:text-2xl mb-3'>{product.title}</p>
                                <button onClick={() => navigate(`/shop/${product._id}`)} className='text-blue-600'>See more</button>
                            </div>
                            <ProductSlider products={product?.products} />
                        </div>
                    )
                })
            }

        </div>
    )

}

export default FeaturedProducts
