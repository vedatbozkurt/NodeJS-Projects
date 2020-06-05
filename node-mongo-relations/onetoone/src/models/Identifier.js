/*
* @Author: @vedatbozkurt
* @Date:   2020-05-21 00:52:06
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-21 01:17:57
*/
const mongoose = require("mongoose");
const CustomerSchema = require("./Customer").CustomerSchema;

const Identifier = mongoose.model(
  "Identifier",
  new mongoose.Schema({
    cardCode: String,
    // customer: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Customer"
    // }
    customer: CustomerSchema
  })
);

module.exports = Identifier;
