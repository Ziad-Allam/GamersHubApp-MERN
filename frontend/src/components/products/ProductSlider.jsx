import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';

function ProductSlider({ products, children }) {
    return (
        <div className='pl-2'
        >
            {children}

            <Swiper
                slidesPerView={1.5}
                spaceBetween={10}
                className="mySwiper"
                breakpoints={{
                    500: { slidesPerView: 2.5, spaceBetween: 12 },
                    800: { slidesPerView: 3.5, spaceBetween: 12 },
                    1024: { slidesPerView: 4.5, spaceBetween: 12 },
                    1290: { slidesPerView: 6, spaceBetween: 12 },
                }}>
                {
                    products?.map(filteredProduct => {
                        return (
                            <SwiperSlide key={filteredProduct?._id}>
                                <ProductCard product={filteredProduct} />
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>

        </div>
    )
}

export default ProductSlider
