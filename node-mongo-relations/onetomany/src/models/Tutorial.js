/*
* @Author: @vedatbozkurt
* @Date:   2020-05-21 01:26:09
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-21 01:49:35
*/
const mongoose = require("mongoose");

const Tutorial = mongoose.model(
  "Tutorial",
  new mongoose.Schema({
    title: String,
    author: String,
    images: [],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
      }
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    }
  })
);

module.exports = Tutorial;
