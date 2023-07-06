import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TaskScreen from './TaskScreen';
import ProjectScreen from './ProjectScreen';
import OverviewScreen from './OverviewScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Overview" component={OverviewScreen} />
      <Tab.Screen name="Project" component={ProjectScreen} />
      <Tab.Screen name="Task" component={TaskScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
