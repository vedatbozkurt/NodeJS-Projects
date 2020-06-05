/*
* @Author: @vedatbozkurt
* @Date:   2020-05-21 03:13:34
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-21 03:14:06
*/
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
