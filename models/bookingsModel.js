// Dependencies
var mongoose = require('mongoose');
var CONSTANT = require('../utilities/Constant').CONSTANTS;

// Model Definition
var bookingSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: CONSTANT.DOCUMENT_NAMES.USER },
    transaction_id: { type: mongoose.Schema.Types.ObjectId, ref: CONSTANT.DOCUMENT_NAMES.TRANSACTIONS },
    from: {type: String},
    to: {type: String},
    pick_point: {type: String},
    drop_point: {type: String},
    bus_number: {type: String},
    bus_type: {type: String},
    start_date: {type: Date},
    end_date: {type: Date},
    extend_month: {type: Number},
    total_amount: {type: Number}

});

// Export module.
module.exports = mongoose.model(CONSTANT.DOCUMENT_NAMES.BOOKING, bookingSchema);