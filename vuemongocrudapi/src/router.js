/*
* @Author: @vedatbozkurt
* @Date:   2020-05-20 02:12:06
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-20 02:13:42
*/
/*
/tasks—display all the tasks in the database
/tasks/new—create a new task
/tasks/:id—display a task
/tasks/:id/edit—edit a task
 */
import Vue from 'vue';
import Router from 'vue-router';
import Tasks from './views/Tasks.vue';
import New from './views/New.vue';
import Show from './views/Show.vue';
import Edit from './views/Edit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/tasks'
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/tasks/new',
      name: 'new-task',
      component: New
    },
    {
      path: '/tasks/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/tasks/:id/edit',
      name: 'edit',
      component: Edit
    }

  ]
});
