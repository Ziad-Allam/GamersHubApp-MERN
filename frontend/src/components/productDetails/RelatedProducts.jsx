import React from 'react'
import ProductSlider from '../../components/products/ProductSlider';
import SliderLoading from '../loading/SliderLoading';

function RelatedProducts({ relatedProducts, isLoading, title }) {

    return (
        <div className='py-3'>
            {
                isLoading ?
                    <SliderLoading />
                    :
                    <ProductSlider products={relatedProducts} isLoading={isLoading}>
                        <h1 className='text-xl lg:text-2xl font-semibold mb-6 capitalize'>{title}</h1>
                    </ProductSlider>
            }
        </div>
    )
}

export default RelatedProducts
