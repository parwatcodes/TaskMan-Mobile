import React from 'react';

import { getTasks } from '../api/task';
import TaskList from '../components/TaskList';

const TaskListScreen = () => {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    getTasks()
      .then(setTasks);
  },[]);

  return (
    <TaskList data={tasks} />
  );
};

export default TaskListScreen;
