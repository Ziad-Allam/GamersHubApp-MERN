import React from 'react'
import ReviewCard from './ReviewCard'
import { useSelector } from 'react-redux'
import AverageRating from '../rating/AverageRating'
import Container from '../common/Container'

function Reviews({ isLoading }) {

    const { reviews } = useSelector((state) => state.reviews)

    return (
        <Container>
            <div className='py-3'>

                <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 ">
                    Customer Reviews & Ratings
                </h2>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8 ">

                    <div className="lg:col-span-1 ">
                        <div className="sticky top-24 pr-6  lg:border-r space-y-4">
                            {/* Average Rating */}
                            <AverageRating />

                            {/* Divider */}
                            <div className="border-t border-gray-200" />

                            {/* Instructions */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                How to Write a Review
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-sm">
                                Only customers who have purchased and received this product can write a review.
                                <br />
                                Once delivered, go to <span className="font-medium text-gray-900">Orders</span> page, open <span className="font-medium text-gray-900">Order Details</span> and you will find <span className="font-medium text-gray-900">Write a Review</span> button.
                            </p>

                            {/* Optional Call To Action */}
                            <div className="mt-4 text-sm text-gray-600">
                                ✔ Only verified buyers can leave reviews
                            </div>
                        </div>
                    </div>

                    {/* Reviews Column */}
                    <div className="lg:col-span-2 space-y-2">
                        {isLoading ?
                            <div>loading...</div>
                            :
                            reviews.length === 0 ?
                                <div className="p-6 text-center text-gray-500">
                                    No reviews yet. Be the first to share your experience!
                                </div>
                                :
                                reviews.map((review, index) => (
                                    <div key={index}>
                                        <ReviewCard review={review} />
                                        {index !== reviews.length - 1 && (
                                            <div className="my- border-t border-gray-200" />
                                        )}
                                    </div>
                                ))
                        }
                    </div>

                </div>

            </div>
        </Container>
    )
}

export default Reviews