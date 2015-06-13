// Dependencies
var mongoose = require('mongoose');
var CONSTANT = require('../utilities/Constant').CONSTANTS;

// Model Definition
var routeSchema = new mongoose.Schema({
    stations: {type: Array}
});

// Export module.
module.exports = mongoose.model(CONSTANT.DOCUMENT_NAMES.ROUTE, routeSchema);