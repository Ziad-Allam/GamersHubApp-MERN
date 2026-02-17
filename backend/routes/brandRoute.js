const express = require('express')
const router = express.Router()

const {
    getBrands,
} = require('../controller/brandCtrl')

router.route('/').get(getBrands)

module.exports = router;
