const Order = require('../models/orderModel')
const Product = require('../models/productModel');
const Review = require('../models/reviewModel');

const getReviews = async (req, res) => {
    try {
        const { productId } = req.params;

        const reviews = await Review.find({ productId })

        res.status(200).json({
            success: true,
            message: 'Order confirmed',
            data: reviews
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

const getReviewByUser = async (req, res) => {
    try {
        const { productId, userId } = req.params;

        const existingReview = await Review.findOne({ productId, userId });

        if (!existingReview) {
            return res.status(404).json({
                success: false,
                message: 'No review found',
            });
        }
        res.status(200).json({
            success: true,
            data: existingReview
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

const createReview = async (req, res) => {
    try {
        const {
            productId,
            userId,
            userName,
            message,
            rating,
        } = req.body

        const order = await Order.findOne({
            userId,
            "cartProducts.productId": productId,
            orderStatus: "confirmed"
        })

        if (!order) {
            return res.status(403).json({
                success: false,
                message: 'You need to purchase this product to review it'
            })
        }

        const checkExistingReview = await Review.findOne({
            productId,
            userId
        })

        if (checkExistingReview) {
            return res.status(400).json({
                success: false,
                message: 'You already reviewed this product'
            })
        }

        const addReview = new Review({
            productId,
            userId,
            userName,
            message,
            rating,
        })

        await addReview.save()

        const reviews = await Review.find({ productId })
        const totalReviewsLength = reviews.length;
        const averageRating = reviews.reduce((sum, reviewItem) => sum + reviewItem.rating, 0) / totalReviewsLength

        await Product.findByIdAndUpdate(productId, { averageRating });

        res.status(201).json({
            success: true,
            message: 'Your review added successfuly',
            data: {
                addReview
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

module.exports = {
    getReviews,
    getReviewByUser,
    createReview,
}
