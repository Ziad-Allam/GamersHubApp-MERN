import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCardLoading from './ProductCardLoading'

function SliderLoading() {
    return (
        <Swiper
            slidesPerView={1.5}
            spaceBetween={10}
            className="mySwiper"
            breakpoints={{
                500: { slidesPerView: 2.5, spaceBetween: 12 },
                800: { slidesPerView: 3.5, spaceBetween: 12 },
                1024: { slidesPerView: 4.5, spaceBetween: 12 },
                1290: { slidesPerView: 6, spaceBetween: 12 },
            }}
        >
            {Array.from({ length: 12 }).map((_, i) => (
                <SwiperSlide key={i}>
                    <ProductCardLoading />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SliderLoading
