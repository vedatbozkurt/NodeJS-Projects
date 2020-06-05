/*
* @Author: @vedatbozkurt
* @Date:   2020-05-21 01:52:51
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-21 01:59:00
*/
const mongoose = require("mongoose");

const Tutorial = mongoose.model(
  "Tutorial",
  new mongoose.Schema({
    title: String,
    author: String,
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
      }
    ]
  })
);

module.exports = Tutorial;
