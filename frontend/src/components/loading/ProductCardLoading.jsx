import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ProductCardLoading() {
    return (
        <div className=" flex flex-col gap-1 border rounded-md">
            {/* Image placeholder */}
            <Skeleton height={250} className="rounded-t-md" />
            <div className='p-2'>


                {/* Title */}
                <Skeleton height={12} />
                <Skeleton height={12} />

                {/* Price */}
                <Skeleton width={100} height={12} />

                {/* Button */}
                <div className='flex items-center  justify-between'>
                <Skeleton width={60} height={12} />

                <Skeleton width={30} height={30} className="rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default ProductCardLoading
