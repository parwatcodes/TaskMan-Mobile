import React from 'react';

import Overview from '../components/Overview';

const OverviewScreen = () => {
  let projects = { type: 'Project', total: 10 };
  let taskCompleted = { type: 'Task', status: 'done', total: 15 };
  let taskPending = { type: 'Task', status: 'progress', total: 10 };
  let taskInReview = { type: 'Task', status: 'review', total: 20 };
  let taskToDo = { type: 'Task', status: 'todo', total: 5 };
  let taskHold = { type: 'Task', status: 'hold', total: 5 };

  let data = [taskToDo, taskPending, taskInReview, taskHold, taskCompleted, projects];

  return (
    <Overview data={data} />
  )
}

export default OverviewScreen;
