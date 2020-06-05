/*
* @Author: @vedatbozkurt
* @Date:   2020-05-21 01:52:43
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-21 01:58:50
*/
const mongoose = require("mongoose");

const Tag = mongoose.model(
  "Tag",
  new mongoose.Schema({
    name: String,
    slug: String,
    tutorials: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tutorial"
      }
    ]
  })
);

module.exports = Tag;
