const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb+srv://username:password@cluster0-mptpj.mongodb.net/tablename?retryWrites=true&w=majority";

const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;
