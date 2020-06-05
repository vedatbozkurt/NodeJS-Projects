/*
* @Author: @vedatbozkurt
* @Date:   2020-05-21 03:11:06
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-21 03:11:19
*/
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
