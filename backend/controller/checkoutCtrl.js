const Cart = require('../models/cartModel')
const Checkout = require("../models/checkoutModel");

const validateCheckout = async (req, res) => {
    try {
        const userId = req.user.id;

        if (!userId) {
            return res.status(400).json({ success: false, message: 'User id is required!' });
        }

        const cart = await Cart.findOne({ userId }).populate('products.productId');

        if (!cart || cart.products.length === 0) {
            return res.status(400).json({ success: false, message: 'Cart is empty' });
        }

        // Check if there is already a draft checkout for this user
        let checkout = await Checkout.findOne({ userId, status: 'draft' });


        const orderItems = [];
        let subtotal = 0;

        for (const item of cart.products) {
            const product = item.productId;
            if (!product) continue;

            if (item.quantity > product.totalStock) {
                await Cart.updateOne(
                    { userId, "products.productId": product._id },
                    { $set: { "products.$.quantity": product.totalStock } }
                )
                return res.status(400).json({ success: false, message: `Product ${product.title} is out of stock` });
            }

            const price = product.price; // original price
            const salePrice = product.salePrice || price; // price after discount
            subtotal += price * item.quantity;

            orderItems.push({
                productId: product._id,
                title: product.title,
                price: price,
                salePrice: product.salePrice,
                quantity: item.quantity,
                image: product.image,
                total: salePrice * item.quantity,
            });
        }

        if (orderItems.length === 0) {
            return res.status(400).json({ success: false, message: 'No valid items to checkout' });
        }

        const total = orderItems.reduce((sum, item) => sum + item.total, 0);
        const discount = subtotal - total;

        if (!checkout) {
            // Create new draft checkout
            checkout = new Checkout({
                userId,
                cartId: cart._id,
                orderItems,
                subtotal,
                discount,
                total,
                status: 'draft', // Add status field in schema
            });
        } else {
            // Update existing draft checkout
            checkout.orderItems = orderItems;
            checkout.subtotal = subtotal;
            checkout.discount = discount;
            checkout.total = total;
            checkout.cartId = cart._id;
        }

        await checkout.save();

        res.status(200).json({
            success: true,
            data: checkout,
            message: 'Checkout validated successfully.'
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getUserCheckouts = async (req, res) => {
    try {
        const checkouts = await Checkout.find({ userId: req.user._id }).sort({
            createdAt: -1,
        });
        res.status(200).json(checkouts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const getCheckoutById = async (req, res) => {
    try {
        const checkout = await Checkout.findById(req.params.id);

        if (!checkout) {
            return res.status(404).json({ message: "Checkout not found" });
        }

        // Ensure the user owns the order
        if (checkout.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized" });
        }

        res.status(200).json(checkout);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    validateCheckout,
    getUserCheckouts,
    getCheckoutById,
};
