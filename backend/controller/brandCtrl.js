const Brand = require('../models/brandModel')

const getBrands = async (req, res, next) => {
    try {
        const brands = await Brand.find();

        res.status(200).json({
            success: true,
            length: brands.length,
            data: brands
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    getBrands,
}
