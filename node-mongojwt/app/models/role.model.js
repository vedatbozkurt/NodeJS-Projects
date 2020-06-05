/*
* @Author: @vedatbozkurt
* @Date:   2020-05-21 03:13:29
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-21 03:13:59
*/
const mongoose = require("mongoose");

const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Role;
