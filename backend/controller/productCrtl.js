const Product = require('../models/productModel')
const Category = require('../models/categoryModal')

const getProducts = async (req, res) => {
  try {
    const { id } = req.params;

    // Try matching both fields
    const products = await Product.find({
      $or: [
        { category: id },
        { brand: id }
      ]
    })
      .populate('category')
      .populate('brand');

    res.status(200).json({
      success: true,
      length: products.length,
      data: products
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

const getProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate('brand')
    if (!product) return res.status(404).json({
      success: false,
      message: 'Product not found!',
    })
    res.status(200).json({
      success: true,
      data: product

    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }

}

const getRelatedProductsByCategory = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);

    const similarProducts = await Product.find({
      _id: { $ne: productId },   // exclude current product
      category: product.category
    }).limit(12);

    res.json({
      success: true,
      data: similarProducts
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message || err
    });
  }
};

const getRelatedProductsByBrand = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);

    const similarProducts = await Product.find({
      _id: { $ne: productId },   // exclude current product
      brand: product.brand
    }).limit(12);

    res.json({
      success: true,
      data: similarProducts
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message || err
    });
  }
};

const getFeaturedProductsByCategory = async (req, res) => {
  try {
    const products = await Category.aggregate([
      {
        $lookup: {
          from: 'products', // must match your actual MongoDB collection name
          let: { categoryId: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ['$category', '$$categoryId'] },
                featured: true
              }
            },
            { $sort: { createdAt: -1 } }, // Optional: show newest first
            { $limit: 12 }
          ],
          as: 'products'
        }
      },
      {
        $project: {
          _id: 1,
          title: 1,
          slug: 1,
          products: 1
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: products
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

module.exports = {
  getProducts,
  getProductDetails,
  getRelatedProductsByCategory,
  getFeaturedProductsByCategory,
  getRelatedProductsByBrand
}
