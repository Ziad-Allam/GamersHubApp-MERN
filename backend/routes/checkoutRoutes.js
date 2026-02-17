const express = require('express');
const router = express.Router()
const {validateCheckout } = require('../controller/checkoutCtrl');
const { authMiddleware } = require('../controller/userCtrl');

router.get('/validate', authMiddleware, validateCheckout);

module.exports = router;
