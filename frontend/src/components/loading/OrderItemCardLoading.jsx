import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

function OrderItemCardLoading() {
    return (
        <>
            {[1, 2, 3].map((_, i) => (
                <div className="flex gap-4 bg-white rounded-md p-4" key={i}>
                    <Skeleton className='size-20' />
                    <div className='w-full flex flex-col gap-1'>
                        <Skeleton className='w-4/5 h-3' />
                        <Skeleton className='w-2/4 h-3' />
                        <Skeleton className='w-2/4 h-3' />
                        <Skeleton className='w-2/4 h-3' />
                    </div>
                </div>
            ))}
        </>
    )
}

export default OrderItemCardLoading
