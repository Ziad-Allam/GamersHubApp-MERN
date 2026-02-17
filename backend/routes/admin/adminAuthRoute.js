const express = require('express')
const router = express.Router()

const {
    loginAdmin,
    logoutAdmin,
    getAdmins,
    deleteAdmin,
    getUsers,
    authMiddlewareAdmin,
} = require('../../controller/admin/adminAuthCtrl')

router.route('/login-admin').post(loginAdmin)
router.route('/logout-admin').post(logoutAdmin)
router.route('/get/admins').get(getAdmins)
router.route('/get/users').get(getUsers)
router.route('/delete/:id').delete(deleteAdmin)

router.route('/check-auth-admin').get(authMiddlewareAdmin, (req, res) => {
    const admin = req.admin;
    res.status(200).json({
        success: true,
        message: 'Authenticated user!',
        admin,
    });
});

module.exports = router;