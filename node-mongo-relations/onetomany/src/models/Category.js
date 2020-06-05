/*
* @Author: @vedatbozkurt
* @Date:   2020-05-21 01:26:02
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-21 01:49:00
*/
const mongoose = require("mongoose");

const Category = mongoose.model(
  "Category",
  new mongoose.Schema({
    name: String,
    description: String
  })
);

module.exports = Category;
