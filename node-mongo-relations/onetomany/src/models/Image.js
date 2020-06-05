/*
* @Author: @vedatbozkurt
* @Date:   2020-05-21 01:26:16
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-21 01:49:22
*/
const mongoose = require("mongoose");

const Image = mongoose.model(
  "Image",
  new mongoose.Schema({
    path: String,
    url: String,
    caption: String,
    createdAt: Date
  })
);

module.exports = Image;
