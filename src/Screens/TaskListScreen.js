import React from 'react';

import { getTasks } from '../api/task';
import TaskList from '../components/TaskList';

const TaskListScreen = (props) => {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    getTasks()
      .then(setTasks);
  }, []);

  const handleOnTaskClick = () => {
    props.navigation.navigate('Task Details');
  };

  return (
    <TaskList
      data={tasks}
      handleOnTaskClick={handleOnTaskClick}
    />
  );
};

export default TaskListScreen;
