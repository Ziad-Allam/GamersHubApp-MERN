const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        required: true,

    },

    // Items inside the order
    orderItems: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            title: { type: String, required: true },
            price: { type: Number, required: true },
            salePrice: { type: Number, required: true },
            quantity: { type: Number, required: true },
            image: {
                url: { type: String, required: true },
                public_id: { type: String, required: true }
            }
        }
    ],

    // Price summary
    subtotal: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
    },
    total: {
        type: Number,
        required: true,
    },

    status: {
        type: String,
        enum: ['draft', 'completed'],
        default: 'draft'
    }


    // Address from Address model
    // shippingAddress: {
    //     name: { type: String, required: true },
    //     phoneNo: { type: Number, required: true },
    //     fullAddress: { type: String, required: true },
    //     city: { type: String, required: true },
    //     landmark: { type: String, required: true },
    //     buildingNo: { type: Number, required: true },
    //     floorNo: { type: Number, required: true },
    //     aptNo: { type: Number, required: true },
    // },
    // Payment method
},
    { timestamps: true }
);

module.exports = mongoose.model('Checkout', checkoutSchema)