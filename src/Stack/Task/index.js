import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListScreen from '../../Screens/TaskListScreen';
import TaskDetailScreen from '../../Screens/TaskDetailScreen';

const TaskStack = createNativeStackNavigator();

const TaskStackScreen = () => {
  return (
    <TaskStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TaskStack.Screen name="Task List" component={TaskListScreen} />
      <TaskStack.Screen name="Task Details" component={TaskDetailScreen} />
    </TaskStack.Navigator>
  );
};

export default TaskStackScreen;
