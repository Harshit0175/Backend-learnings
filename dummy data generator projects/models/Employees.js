const mongoose = require('mongoose');

const EmployeesSchema = new mongoose.Schema({
  name: String,
  salary: Number,
    language: String,
    city: String,
    age: Number,
    ismanger: Boolean,



});
const Employees = mongoose.model('Employees', EmployeesSchema);
module.exports = Employees; 