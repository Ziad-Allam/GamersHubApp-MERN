const express = require('express')
const router = express.Router()
const {
    getProducts,
    getProductDetails,
    getRelatedProductsByCategory,
    getFeaturedProductsByCategory,
    getRelatedProductsByBrand
} = require('../controller/productCrtl');

router.route('/featuredProductsByCategory').get(getFeaturedProductsByCategory)
router.route('/:id').get(getProducts)
router.route('/productDetails/:id').get(getProductDetails)
router.route('/similarByCategory/:productId').get(getRelatedProductsByCategory)
router.route('/similarByBrand/:productId').get(getRelatedProductsByBrand)

module.exports = router;
