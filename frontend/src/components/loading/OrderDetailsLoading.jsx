import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

function OrderDetailsLoading() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-4'>
            
            <div>
                {/* Left side (order items) */}
                <div className="grid gap-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex gap-4 p-4 bg-white rounded-md shadow">
                            <Skeleton height={80} width={80} />
                            <div className="flex-1">
                                <Skeleton height={16} width="90%" />
                                <Skeleton height={16} width="70%" className="mt-2" />
                                <Skeleton height={16} width="60%" className="mt-2" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right side (order summary) */}
            <div className="flex flex-col gap-4">

                <div className='bg-white px-4 py-2 rounded-md'>
                    <Skeleton height={15} />
                </div>

                <div className="p-4 bg-white rounded-md shadow space-y-2">
                    <Skeleton height={15} width="50%" />
                    {Array.from({ length: 5 }).map((i) => (
                        <div key={i}>
                            <Skeleton height={10} width="60%" />
                            <Skeleton height={10} width="30%" />
                        </div>
                    ))}
                </div>

                <div className="p-4 bg-white rounded-md shadow space-y-2">
                    <Skeleton height={15} width="40%" />
                    {Array.from({ length: 8 }).map((i) => (
                        <div key={i}>
                            <Skeleton height={10} width="60%" />
                            <Skeleton height={10} width="30%" />
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default OrderDetailsLoading
