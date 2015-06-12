// Dependencies
var mongoose = require('mongoose');
var CONSTANT = require('../utilities/Constant').CONSTANTS;

// Model Definition
var bookingSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: CONSTANT.DOCUMENT_NAMES.USER },
    transaction_id: { type: mongoose.Schema.Types.ObjectId, ref: CONSTANT.DOCUMENT_NAMES.TRANSACTIONS },
    from: {type: String},
    to: {type: String}
});

// Export module.
module.exports = mongoose.model(CONSTANT.DOCUMENT_NAMES.BOOKING, bookingSchema);