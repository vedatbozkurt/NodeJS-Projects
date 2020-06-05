/*
* @Author: @vedatbozkurt
* @Date:   2020-05-20 02:07:50
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-20 02:09:57
*/
const taskBuilder = require('../controllers/taskController');

module.exports = app => {
  app
    .route('/tasks')
    .get(taskBuilder.list_all_tasks)
    .post(taskBuilder.create_a_task);

  app
    .route('/tasks/:taskId')
    .get(taskBuilder.read_a_task)
    .put(taskBuilder.update_a_task)
    .delete(taskBuilder.delete_a_task);
};
