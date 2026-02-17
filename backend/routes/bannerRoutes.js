const express = require('express')
const router = express.Router()

const {
    getBanners ,
    getProfile
} = require('../controller/bannerCtrl')
const { authMiddleware } = require('../controller/userCtrl')

router.route('/').get(getBanners )
router.route('/getProfile').get(authMiddleware,getProfile )

module.exports = router;