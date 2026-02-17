const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
    },
    fullAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    landmark: {
        type: String,
    },
    buildingNo: {
        type: Number,
        required: true,
    },
    floorNo: {
        type: Number,
        required: true,
    },
    aptNo: {
        type: Number,
        required: true,
    },
    isDefault: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Address', addressSchema)