/*
* @Author: @vedatbozkurt
* @Date:   2020-05-21 02:16:43
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-21 02:16:44
*/
module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};
