import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBannerImages } from '../../features/bannerSlice'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

import Skeleton from 'react-loading-skeleton';

function Banner() {

  const dispatch = useDispatch()

  const { banners, isLoading } = useSelector((state) => state.banner)

  useEffect(() => {
    dispatch(fetchBannerImages())
  }, [])

  return (
    <>
      {isLoading ?
        <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
          <Skeleton width="100%" height="100%" />
        </div>

        :
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000, // Time between slides (in milliseconds)
            disableOnInteraction: false, // Keeps autoplay active even after manual interaction
          }}
          preventClicksPropagation={false}
          className="mySwiper">

          {
            banners && banners.length > 0 ?
              banners.map(bannarImage => (
                <SwiperSlide key={bannarImage?._id}>
                  <img src={bannarImage.image.url} alt="" className='w-full h-64 sm:h-80 md:h-full object-cover' />
                </SwiperSlide>
              )) : <div className='w-full h-64 sm:h-80 md:h-[438px] object-cover bg-gray-200'>Image not available</div>
          }
        </Swiper>
      }
    </>
  )
}

export default Banner
