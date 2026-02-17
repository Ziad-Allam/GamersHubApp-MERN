import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

function AddressLoading() {
    return (
        // <Skeleton width={`100%`} height={250} />
        <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm space-y-3 text-sm text-gray-800 animate-pulse" >
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
                <Skeleton className="h-4 w-32" /> {/* Delivery Address */}
                <div className="flex items-center gap-3">
                    <Skeleton className="h-4 w-10" /> {/* Edit */}
                    <Skeleton className="h-4 w-12" /> {/* Delete */}
                </div>
            </div>

            {/* Name */}
            <div>
                <Skeleton className="h-4 w-40 mb-2" /> {/* Full name */}
                <Skeleton className="h-4 w-32" /> {/* Phone */}
            </div>

            {/* Address lines */}
            <div className="space-y-2 mt-3">
                <Skeleton className="h-4 w-1/2" /> {/* Street */}
                <Skeleton className="h-4 w-1/4" /> {/* City */}
                <Skeleton className="h-4 w-1/4" /> {/* Landmark */}
            </div>
        </div>
    )
}

export default AddressLoading
