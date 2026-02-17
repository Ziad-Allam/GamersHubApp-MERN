const Category = require('../models/categoryModal')

const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find()
        
        res.status(200).json({
            success: true,
            length: categories.length,
            data: categories
            
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
module.exports = { 
    getCategories,
}