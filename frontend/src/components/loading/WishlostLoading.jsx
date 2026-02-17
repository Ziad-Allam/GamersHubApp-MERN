import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function WishlostLoading() {
  return (
    <div className=" flex flex-col gap-1">
               {/* Image placeholder */}
               <Skeleton height={250} className="rounded-md" />
   
               {/* Title */}
               <Skeleton width={`80%`} height={15} />
               <Skeleton width={`80%`} height={15} />
   
               {/* Price */}
               <Skeleton width={80} height={20} />
   
               {/* Button */}
               <Skeleton width={`100%`} height={30} className="rounded-md" />
           </div>
  )
}

export default WishlostLoading
