const express = require('express')
const router = express.Router()
const {
    getAddressesByUser,
    createAddress,
    updateAddress,
    deleteAddress,
    getDefaultAddress,
    setDefaultAddress
} = require('../controller/addressCtrl');

const { authMiddleware } = require('../controller/userCtrl');

router.route('/').get(authMiddleware,getAddressesByUser)
router.route('/').post(authMiddleware,createAddress)
router.get('/default', authMiddleware, getDefaultAddress)
router.put('/default', authMiddleware, setDefaultAddress)
router.route('/:userId/:addressId').put(authMiddleware,updateAddress)
router.route('/:userId/:addressId').delete(authMiddleware,deleteAddress)

module.exports = router;
