const express = require('express')
const router = express.Router()

const {
    getReviews,
    getReviewByUser,
    createReview,
} = require('../controller/reviewCtrl')

router.route('/:productId').get(getReviews)
router.route('/:productId/:userId').get(getReviewByUser)
router.route('/').post(createReview)

module.exports = router;
