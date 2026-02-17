const express = require('express');
const router = express.Router()
const {
    createOrder,
    capturePayment,
    getOrdersByUser,
    getOrderDetails
} = require('../controller/orderCtrl');
const { authMiddleware } = require('../controller/userCtrl');

router.route('/').post(authMiddleware,createOrder)
router.route('/capture').post(capturePayment)
router.route('/').get(authMiddleware,getOrdersByUser)
router.route('/:id').get(authMiddleware,getOrderDetails)

module.exports = router;
