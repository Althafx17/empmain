var mongoose = require('mongoose');
var schema = mongoose.Schema({
    name: String,
    Age: Number,
    dept: String,
    sal: Number


})
var employeeModel = mongoose.model("employee", schema);
module.exports = employeeModel