const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        userId: String,
        cartId: String,
        totalAmount: Number,
        paymentStatus: String,
        paymentMethod: String,
        orderStatus: String,
        orderUpdateDate: Date,
        paymentId: String,
        payerId: String,
        orderDate: {
            type: Date,
            default: Date.now()
        },
        cartProducts: [
            {
                productId: String,
                title: String,
                image: {
                    url: {
                        type: String,
                    },            
                },
                quantity: Number,
                price: Number,
            }
        ],
        shippingInfo: {
            name: String,
            phoneNo: Number,
            fullAddress: String,
            city: String,
            landmark: String,
            buildingNo: Number,
            floorNo:Number,
            aptNo:Number,

        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Order", orderSchema);