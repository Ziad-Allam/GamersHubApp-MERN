const express = require('express')
const router = express.Router()

const {
    getCategories,
} = require('../controller/categoryCtrl')

router.route('/').get(getCategories)

module.exports = router;