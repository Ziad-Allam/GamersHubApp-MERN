const Banner = require('../models/bannerModal')
const User = require('../models/userModel')

const getBanners = async (req, res) => {
    try {
        const banners = await Banner.find({})

        res.status(200).json({
            success: true,
            data: banners

        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getProfile = async (req, res) => {
    const user = await User.findById(req.user.id)

    try {
        res.status(200).json({
            success: true,
            data: {
                firstname:user.firstname,
                lastname:user.lastname,
                email:user.email,
                mobile:user.mobile,
                nationality:user.nationality,
                dob:user.dob,
                gender:user.gender,
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

};


module.exports = { getBanners, getProfile }