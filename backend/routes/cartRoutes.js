const express = require('express')
const router = express.Router()
const {
    addToCart,
    getCart,
    updateCartItemQuantity,
    deleteCartitem,
} = require('../controller/cartCtrl')
const { authMiddleware } = require('../controller/userCtrl')

router.route('/').post(addToCart)
router.route('/').get(authMiddleware,getCart)
router.route('/').put(updateCartItemQuantity)
router.route('/:userId/:productId').delete(deleteCartitem)

module.exports = router;