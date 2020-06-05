/*
* @Author: @vedatbozkurt
* @Date:   2020-05-21 03:13:24
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-21 03:13:52
*/
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
