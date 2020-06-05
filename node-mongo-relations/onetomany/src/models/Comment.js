/*
* @Author: @vedatbozkurt
* @Date:   2020-05-21 01:26:23
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-21 01:49:12
*/
const mongoose = require("mongoose");

const Comment = mongoose.model(
  "Comment",
  new mongoose.Schema({
    username: String,
    text: String,
    createdAt: Date
  })
);

module.exports = Comment;
