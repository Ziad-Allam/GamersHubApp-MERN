import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

function DefaultAddressLoading() {
    return (
        <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm  transition duration-200 space-y-3 text-gray-800">
            <Skeleton className='w-full h-3' />
            <Skeleton className='w-1/2 h-3' />
            <div className='border-t-2 pt-3'>
                <Skeleton className='w-52 h-3' />
            </div>
        </div>
    )
}

export default DefaultAddressLoading
