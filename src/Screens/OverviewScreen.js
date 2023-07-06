import React from 'react';

import Overview from '../components/Overview';

const OverviewScreen = () => {
  let projects = { type: 'Project', total: 10 };
  let taskCompleted = { type: 'Task', status: 'completed', total: 15 };
  let taskPending = { type: 'Task', status: 'pending', total: 10 };
  let taskInReview = { type: 'Task', status: 'review', total: 20 };
  let taskToDo = { type: 'Task', status: 'todo', total: 5 };

  let data = [projects, taskCompleted, taskPending, taskInReview, taskToDo];

  return (
    <Overview data={data} />
  )
}

export default OverviewScreen;
