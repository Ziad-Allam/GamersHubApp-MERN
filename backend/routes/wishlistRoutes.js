const express = require('express')
const router = express.Router()
const {
    wishlistToggle,
    getWishlist
} = require('../controller/wishlistCtrl')
const { authMiddleware } = require('../controller/userCtrl')

router.route('/').post(wishlistToggle)
router.route('/').get(authMiddleware,getWishlist)

module.exports = router;
