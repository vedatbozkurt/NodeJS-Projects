/*
* @Author: @vedatbozkurt
* @Date:   2020-05-21 00:52:24
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-06-05 14:02:47
*/
const mongoose = require("mongoose");
const Customer = require("./models/Customer").Customer;
const Identifier = require("./models/Identifier");

const createCustomer = function(name, age, gender) {
  const customer = new Customer({
    name,
    age,
    gender
  });

  return customer.save();
};

const createIdentifier = function(cardCode, customer) {
  const identifier = new Identifier({
    cardCode,
    customer
  });

  return identifier.save();
};

const showAllIdentifier = async function() {
  const identifiers = await Identifier.find().select("-__v -customer.__v -customer._id");

  console.log("> All Identifiers\n", identifiers);
};

mongoose
  .connect("mongodb+srv://username:password@cluster0-mptpj.mongodb.net/tablename?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch(err => console.error("Connection error", err));

createCustomer("John", 90, "male")
  .then(customer => {
    console.log("> Created new Customer\n", customer);

    return createIdentifier(
      customer._id.toString().substring(0, 10).toUpperCase(),
      customer
    );
  })
  .then(identifier => {
    console.log("> Created new Identifier\n", identifier);

    showAllIdentifier();
  })
  .catch(err => console.log(err));
