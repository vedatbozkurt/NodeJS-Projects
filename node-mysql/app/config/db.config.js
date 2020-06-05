/*
* @Author: @vedatbozkurt
* @Date:   2020-05-21 02:14:42
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-06-05 13:51:06
*/
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "test",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
