import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ProductDerailsLoading() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 py-8 px-4">

            {/* Section 1: Product Image */}
            <div className="lg:col-span-2 w-full">
                <Skeleton className='h-[380px] lg:h-[560px]' />
            </div>

            {/* Section 2: Product Details */}
            <div className="lg:col-span-2 flex flex-col gap-4">

                {/* brand name */}
                <Skeleton className='w-36' />

                {/* description */}
                <Skeleton count={6} />

                {/* stars & avilability */}
                <Skeleton width={170} />

                {/* avilability */}
                <Skeleton width={100} />

                {/* price */}
                <Skeleton count={3} height={20} containerClassName="space-y-4 w-60" />

                {/* shipping */}
                <div className='flex items-center gap-5'>
                    <Skeleton height={130} width={100} />
                    <Skeleton height={130} width={100} />
                </div>

                {/* add to cart button */}
                <Skeleton height={50} containerClassName="w-full" />

            </div>

            {/* Section 3: Action Buttons and Additional Options */}
            <div className="lg:col-span-1">
                <div className='border p-4 rounded-md'>
                <Skeleton height={30} count={8} containerClassName="w-full space-y-4" />
                </div>
            </div>

        </div>

    )
}

export default ProductDerailsLoading
