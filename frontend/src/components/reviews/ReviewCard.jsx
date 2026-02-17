import React from 'react'
import StarRating from '../rating/StarRating';
import useDate from '../../hooks/useDate';

function ReviewCard({ review }) {

    return (
        <div className="flex gap-4 px-6 py-4 bg-gray-100 rounded-md">

            {/* User Avatar */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-semibold text-lg uppercase">
                {review?.userName?.charAt(0)}
            </div>

            {/* Review Content */}
            <div className="flex-1 space-y-2">

                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-medium capitalize text-gray-900">
                        {review?.userName}
                    </h4>

                    <span className="text-sm text-gray-500">
                        {useDate(review.createdAt)}
                    </span>
                </div>

                {/* Rating */}
                <StarRating rating={review?.rating} readOnly />

                {/* Message */}
                <p className="text-gray-700 leading-relaxed">
                    {review.message}
                </p>
            </div>
        </div>
    )
}

export default ReviewCard