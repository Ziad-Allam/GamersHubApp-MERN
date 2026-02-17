import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

function OrderSummaryLoading() {
    return (
        <div>
            <div className="w-full bg-white rounded-md border p-6">

                <div className='pb-4 border-b'>
                    <Skeleton className='w-full h-8' />
                </div>

                <div className="mt-4 flex flex-col gap-2">
                    <Skeleton className='w-full h-4' />

                    <Skeleton className='w-full h-4' />

                    <Skeleton className='w-full h-4' />

                    <Skeleton className='w-full h-4' />

                    {/* Divider */}
                    <div className="border-t my-2"></div>

                    <Skeleton className='w-full h-5' />
                </div>

            </div>
        </div>
    )
}

export default OrderSummaryLoading
