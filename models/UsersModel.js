// Dependencies
var mongoose = require('mongoose');
var CONSTANT = require('../utilities/Constant').CONSTANTS;

// Model Definition
var userSchema = new mongoose.Schema({
    id_: {type: String},
    name: {type: String},
    email: {type: String},
    mobile: {type: Number},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    country: {type: String},
    pin: {type: Number},
    password: {type: String},
    birth_date: {type: Date},
    gender: {type: String},
    created_at: {type: Date},
    payment_day: {type: Date},
    Last_day_of_subscription: {type: Date},
    profile_pic: { type: String },
    transaction_amount: { type: Number },
    discount_amount: { type: Number },
    duration_of_subscription: { type: Number },
    profile_pic_url: { type: String },
    home: { latitude: {type: Number}, longitude: {type: Number} },
    office: { latitude: {type: Number}, longitude: {type: Number} },
    home_pickup: { latitude: {type: Number}, longitude: {type: Number} },
    home_drop_off: { latitude: {type: Number}, longitude: {type: Number} },
    office_pickup: { latitude: {type: Number}, longitude: {type: Number} },
    office_drop_off: { latitude: {type: Number}, longitude: {type: Number} },
    message: {type: String},
    status: {type: String}
});

// Export module.
module.exports = mongoose.model(CONSTANT.DOCUMENT_NAMES.USER, userSchema);