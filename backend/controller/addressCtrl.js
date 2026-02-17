const Address = require('../models/address')

const getAddressesByUser = async (req, res) => {
    try {
        const userId = req.user.id

        if (!userId) {
            res.status(400).json({
                success: false,
                message: 'User id is required'
            })
        }

        const address = await Address.find({ userId })

        res.status(200).json({
            success: true,
            data: address
        
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

const createAddress = async (req, res) => {
    try {

        const userId = req.user.id;

        const {
            name,
            phoneNo,
            fullAddress,
            city,
            landmark,
            buildingNo,
            floorNo,
            aptNo,
        } = req.body

        if (!userId || !name || !phoneNo || !fullAddress || !city || !landmark || !buildingNo || !floorNo || !aptNo) {
            res.status(400).json({
                success: false,
                message: 'Invalid data provided'
            })
        }

        const addressCount = await Address.countDocuments({ userId });

        const address = new Address({
            userId,
            name,
            phoneNo,
            fullAddress,
            city,
            landmark,
            buildingNo,
            floorNo,
            aptNo,
            isDefault: addressCount === 0
        })

        await address.save();

        res.status(201).json({
            success: true,
            data: address
            
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

const getDefaultAddress = async (req, res) => {
    try {
        const userId = req.user.id;

        const address = await Address.findOne({ userId, isDefault: true });

        res.status(200).json({
            success: true,
            data: address
            
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const setDefaultAddress = async (req, res) => {
    try {
        const userId = req.user.id;
        const { addressId } = req.body;

        if (!addressId) {
            return res.status(400).json({
                success: false,
                message: 'Address ID is required'
            });
        }

        // Check if this address exists and belongs to the user
        const address = await Address.findOne({ _id: addressId, userId });

        if (!address) {
            return res.status(404).json({
                success: false,
                message: 'Address not found'
            });
        }

        // Remove default from any existing default address
        await Address.updateMany(
            { userId, isDefault: true },
            { $set: { isDefault: false } }
        );

        // Set the new default address
        address.isDefault = true;
        await address.save();

        return res.status(200).json({
            success: true,
            message: 'Default address updated successfully',
            data: {
                address
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateAddress = async (req, res) => {
    try {

        const { userId, addressId } = req.params
        const formData = req.body

        if (!userId || !addressId) {
            res.status(400).json({
                success: false,
                message: 'User and address id are required'
            })
        }

        const address = await Address.findOneAndUpdate({
            _id: addressId,
            userId
        },
            formData,
            { new: true }
        )

        if (!address) {
            return res.status(400).json({
                success: false,
                message: 'Address not found!'
            })
        }

        res.status(200).json({
            success: true,
            data: {
                address
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

const deleteAddress = async (req, res) => {
    try {

        const { userId, addressId } = req.params

        if (!userId || !addressId) {
            res.status(400).json({
                success: false,
                message: 'User and address id are required'
            })
        }

        const address = await Address.findOneAndDelete({
            _id: addressId,
            userId
        })

        if (!address) {
            return res.status(400).json({
                success: false,
                message: 'Address not found!'
            })
        }

        res.status(200).json({
            success: true,
            address: 'Address deleted successfully'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

module.exports = {
    getAddressesByUser,
    createAddress,
    updateAddress,
    deleteAddress,
    getDefaultAddress,
    setDefaultAddress
}
