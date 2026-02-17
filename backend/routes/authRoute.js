const express = require('express')
const router = express.Router()

const {
    createUser,
    loginUser,
    logoutUser,
    updateUser,
    authMiddleware,
    profile,
} = require('../controller/userCtrl')

router.route('/profile').get(authMiddleware, profile)
router.route('/register').post(createUser)
router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)
router.route('/update/:userId').put(authMiddleware, updateUser)
router.route('/check-auth').get(authMiddleware, (req, res) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        message: 'Authenticated user!',
        user,
    });
});

module.exports = router;
