/*
* @Author: @vedatbozkurt
* @Date:   2020-05-21 00:51:55
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-21 01:17:39
*/
const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = { Customer, CustomerSchema };
