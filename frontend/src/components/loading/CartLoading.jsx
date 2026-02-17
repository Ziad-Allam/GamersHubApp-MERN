import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import OrderSummaryLoading from './OrderSummaryLoading';

function CartLoading() {
    return (
        <div className='p-4'>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* cart items */}
                <div className="lg:col-span-3">

                    <div className="grid grid-cols-1 gap-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex gap-4 border rounded-xl p-4">
                                <Skeleton className='size-32' />
                                <div className='w-full flex flex-col gap-2'>
                                    <Skeleton className='w-full h-4' />
                                    <Skeleton className='w-full h-4' />
                                    <Skeleton className='w-full h-4' />
                                    <Skeleton className='w-9/12 h-4' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <OrderSummaryLoading />
                </div>

            </div>
        </div>

    );
}

export default CartLoading
