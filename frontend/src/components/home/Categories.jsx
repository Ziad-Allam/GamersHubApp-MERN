import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

function Categories() {

    const { categories, isLoading } = useSelector((state) => state.categories)
    const navigate = useNavigate();

    return (
        <div className='py-2 lg:py-5 bg-gray-100'>
            {isLoading ?
                <Swiper
                    slidesPerView={3.5}
                    spaceBetween={5}
                    className="mySwiper"
                    breakpoints={{
                        500: { slidesPerView: 4.5, spaceBetween: 5 },
                        800: { slidesPerView: 5.5, spaceBetween: 5 },
                        1024: { slidesPerView: 7.5, spaceBetween: 5 },
                        1290: { slidesPerView: 10, spaceBetween: 5 },
                    }}>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <SwiperSlide key={i} >
                            <div className='flex flex-col items-center gap-2'>
                                <Skeleton circle height={100} width={100} />
                                <Skeleton height={15} width={100} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                :
                <Swiper
                    slidesPerView={3.5}
                    spaceBetween={5}
                    className="mySwiper"
                    breakpoints={{
                        500: { slidesPerView: 4.5, spaceBetween: 5 },
                        800: { slidesPerView: 5.5, spaceBetween: 5 },
                        1024: { slidesPerView: 7.5, spaceBetween: 5 },
                        1290: { slidesPerView: 10, spaceBetween: 5 },
                    }}>

                    {categories?.map((category) => {
                        return (
                            <SwiperSlide key={category?._id}>
                                <div onClick={() => navigate(`/shop/${category._id}`)} className='cursor-pointer flex flex-col items-center gap-2'>
                                    <div className='w-16 h-16 sm:w-24 sm:h-24 relative'>
                                        <img src={category?.image.url} alt="" className='object-cover' />
                                    </div>
                                    <p className='capitalize text-xs sm:text-base font-semibold text-center'>{category?.title}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            }
        </div>
    )
}

export default Categories
