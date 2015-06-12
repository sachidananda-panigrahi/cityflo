// Dependencies
var mongoose = require('mongoose');
var CONSTANT = require('../utilities/Constant').CONSTANTS;

// Model Definition
var transactionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: CONSTANT.DOCUMENT_NAMES.USER },
    amount: {type: Number},
    transaction_date: {type: Date}
});

// Export module.
module.exports = mongoose.model(CONSTANT.DOCUMENT_NAMES.TRANSACTIONS, transactionSchema);