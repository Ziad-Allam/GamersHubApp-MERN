const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const CustomError = require('../errorHandlers/CustomError')

const createUser = async (req, res) => {
    const email = req.body.email
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        const newUser = await User.create(req.body)
        res.status(201).json({
            success: true,
            data: {
                newUser
            }
        })
    } else {
        res.status(400).json({
            success: false,
            message: 'user already exist'
        })
    }
};

const loginUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
        const err = new CustomError('please provide email and password', 400)
        return next(err)
    }
    const user = await User.findOne({ email }).select('+password');

    if (user.role === "admin") {
        const err = new CustomError('incorrect', 400)
        return next(err)
    }

    if (!user || !(await user.comparePasswordInDb(password, user.password))) {
        const err = new CustomError('incorrect email or password', 400)
        return next(err)
    }
    const token = jwt.sign({
        id: user._id, role: user.role, email: user.email, firstname: user.firstname, lastname: user.lastname, mobile: user.mobile
    }, process.env.SECRET_STR, { expiresIn: "30s" })

    res.cookie("token", token, {
        httpOnly: true,
        secure: false
    }).json({
        success: true,
        message: 'logged in successfully',
        data: {
            user: {
                email: user.email,
                role: user.role,
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                mobile: user.mobile,
            }
        }
    })
};

const logoutUser = async (req, res) => {
    res.clearCookie("token").json({
        success: true,
        message: 'logged out successfully',
    })
};

const updateUser = async (req, res) => {
    try {
        const { userId } = req.params
        const formData = req.body

        if (!userId) {
            res.status(400).json({
                success: false,
                message: 'User is required'
            })
        }

        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            formData,
            { new: true }
        )

        res.status(200).json({
            success: true,
            data: {
                updatedUser
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

const profile = async (req, res) => {
    const user = await User.findById(req.user.id)

    try {
        res.status(200).json({
            success: true,
            data: 
                user
            
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token
    if (!token) return res.status(401).json({
        success: false,
        message: 'Unauthorised user!',
    })

    try {
        const decodeed = jwt.verify(token, process.env.SECRET_STR)
        req.user = decodeed
        next()
    } catch (error) {
        res.clearCookie("token").status(401).json({
            success: false,
            message: error.message,
        })
    }
};

module.exports = {
    createUser,
    loginUser,
    logoutUser,
    updateUser,
    profile,
    authMiddleware,
}
