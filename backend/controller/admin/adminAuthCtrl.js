const User = require('../../models/userModel')
const jwt = require('jsonwebtoken')
const CustomError = require('../../errorHandlers/CustomError')

const loginAdmin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        const err = new CustomError('please provide email and password', 400)
        return next(err)
    }
    const user = await User.findOne({ email }).select('+password');

    if (user.role === "user") {
        const err = new CustomError('Not Authorised', 400)
        return next(err)
    }

    if (!user || !(await user.comparePasswordInDb(password, user.password))) {
        const err = new CustomError('incorrect email or password', 400)
        return next(err)
    }
    const token = jwt.sign({
        id: user._id, role: user.role, email: user.email, firstname: user.firstname, lastname: user.lastname
    }, process.env.SECRET_STR, { expiresIn: "60m" })

    res.cookie("token-admin", token, {
        httpOnly: true,
        secure: false
        // maxAge: 72 * 60 * 60 * 1000
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
            }
        }
    })
};

const logoutAdmin = async (req, res) => {
    res.clearCookie("token-admin").json({
        success: true,
        message: 'logged out successfully',
    })
};

const getAdmins = async (req, res) => {
    try {
        // Fetch users where the role is 'admin'
        const admins = await User.find({ role: "admin" });

        res.status(200).json({
            success: true,
            length: admins.length,
            data: {
                admins,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occurred",
        });
    }
};

const deleteAdmin = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id)

        if (!deletedUser) return res.status(404).json({
            success: false,
            message: 'User with that ID is not found!',
        })

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occured",
        });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find()

        res.status(200).json({
            success: true,
            length: users.length,
            data: {
                users
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occured",
        });
    }
}

const authMiddlewareAdmin = async (req, res, next) => {
    const tokenAdmin = req.cookies['token-admin']
    if (!tokenAdmin) return res.status(401).json({
        success: false,
        message: 'Unauthorised user!',
    })

    try {
        const decodeed = jwt.verify(tokenAdmin, process.env.SECRET_STR)
        req.admin = decodeed
        next()
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Unauthorised user!',
        })
    }
};

module.exports = {
    loginAdmin,
    logoutAdmin,
    getAdmins,
    deleteAdmin,
    getUsers,
    authMiddlewareAdmin,
}