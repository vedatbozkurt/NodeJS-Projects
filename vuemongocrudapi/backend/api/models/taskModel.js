/*
* @Author: @vedatbozkurt
* @Date:   2020-05-20 02:07:43
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-20 02:30:09
*/
const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: 'name cannot be blank'
    },
    details: {
      type: String,
      required: 'details  cannot be blank'
    }
  },
  { collection: 'task' }
);

module.exports = mongoose.model('task', taskSchema);
