import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

function OrdersLoading() {
  return (
          Array.from({ length: 5 }).map((_, i) =>
            <div className="p-4 bg-white rounded-lg shadow-md space-y-4" key={i}>
              <div className='border-b-2 mb-4 pb-4'>
                <Skeleton height={10} width={60} className="h-5 w-1/3" />
                <Skeleton height={10} width={150} className="h-5 w-1/3" />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <Skeleton className="h-20 w-20" />
                <Skeleton className="h-20 w-20" />
                <Skeleton className="h-20 w-20" />
              </div>
            </div>
          )
  )
}

export default OrdersLoading
