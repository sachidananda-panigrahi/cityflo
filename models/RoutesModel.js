// Dependencies
var mongoose = require('mongoose');
var CONSTANT = require('../utilities/Constant').CONSTANTS;

// Model Definition
var routeSchema = new mongoose.Schema({
    stations: [{name: {type: String}, latitude: {type: Number}, longitude: {type: Number}, bus_number: {type: String}, bus_type: {type: String}}]
});

// Export module.
module.exports = mongoose.model(CONSTANT.DOCUMENT_NAMES.ROUTE, routeSchema);