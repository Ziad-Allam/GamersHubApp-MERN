import React, { useEffect, useState } from 'react'
import StarRating from '../rating/StarRating'
import { addReview, fetchReviewByUser, fetchReviews } from '../../features/reviews/reviewsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import useDate from '../../hooks/useDate';

function AddReview({ productData, setOpenModal }) {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const { review } = useSelector((state) => state?.reviews)

    const [reviewMsg, seatReviewMsg] = useState("")
    const [rating, setRating] = useState(0)
    const [hasReviewed, setHasReviewed] = useState(false);

    function handleAddReview() {
        dispatch(addReview({
            productId: productData?.productId,
            userId: user?.id,
            userName: user?.firstname,
            message: reviewMsg,
            rating: rating
        })).then((data) => {
            if (data.payload.success) {
                setRating(0)
                seatReviewMsg('')
                dispatch(fetchReviews(productData?.productId))
                toast.success('Review added successfully')
            }
        })
    }

    function handleRatingChange(getRating) {
        setRating(getRating)
    }

    useEffect(() => {
        // if (user?.id && productDetails?._id) {        
        dispatch(fetchReviewByUser({
            productId: productData?.productId,
            userId: user?.id
        })).then((data) => {
            setHasReviewed(data.payload?.success);
        });
        // }
    }, [user, productData]);

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                <div className="bg-white w-full  lg:w-1/2  rounded-xl p-5 sm:p-6 space-y-4 max-h-[90vh] overflow-y-auto">

                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Write a Review</h3>
                        <button
                            onClick={() => setOpenModal(false)}
                            className="text-gray-500 hover:text-gray-700 text-xl"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Product info */}
                    <div className="flex items-center gap-3">
                        <img
                            src={productData?.image?.url}
                            alt={productData?.title}
                            className="size-24 object-cover rounded"
                        />
                        <p className="font-medium text-sm sm:text-base">
                            {productData?.title}
                        </p>
                    </div>

                    {review ? (
                        /* EXISTING REVIEW */
                        <div className="space-y-3">
                            <StarRating rating={review.rating} readOnly />

                            <p className="text-sm text-gray-700 leading-relaxed">
                                {review.message}
                            </p>

                            <div className='flex items-center justify-between'>
                                <p className="text-xs text-gray-500">
                                    Reviewed on {useDate(review.createdAt)}
                                </p>
                                <button className='text-sm text-red-600 hover:underline'>Delete</button>
                            </div>
                        </div>
                    ) : (
                        /* WRITE REVIEW */
                        <div className="space-y-4">
                            <StarRating rating={rating} onChange={setRating} />

                            <textarea
                                value={reviewMsg}
                                onChange={(e) => seatReviewMsg(e.target.value)}
                                placeholder="Write your review..."
                                className="w-full border rounded-md p-3 text-sm resize-none"
                                rows={4}
                            />

                            <button
                                className="w-full bg-blue-600 text-white py-2 rounded-md"
                                onClick={handleAddReview} disabled={reviewMsg.trim() === "" || hasReviewed}
                            >
                                Submit Review
                            </button>
                        </div>
                    )}

                </div>
            </div>

        </>
    )
}

export default AddReview
