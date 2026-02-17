import React from 'react'
import StarRating from './StarRating'
import { useSelector } from 'react-redux'

function AverageRating() {

    const { reviews } = useSelector((state) => state.reviews)

    const averageRating = reviews && reviews.length > 0 ?
        reviews.reduce((sum, reviewItem) => sum + reviewItem.rating, 0) / reviews.length
        :
        0

    return (
        <>
            {
                averageRating > 0 &&

                <div className="flex items-center gap-3">
                    <span className="text-3xl font-semibold text-gray-900">
                        {averageRating.toFixed(1)}
                    </span>

                    <div className="space-y-1">
                        <StarRating rating={averageRating} className='bg-gray-400' readOnly />
                        <p className="text-sm text-gray-500">
                            Based on customer reviews
                        </p>
                    </div>
                </div>
            }
        </>
    )
}

export default AverageRating
