import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import OctiIcon from 'react-native-vector-icons/Octicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TaskScreen from './TaskScreen';
import ProjectScreen from './ProjectScreen';
import OverviewScreen from './OverviewScreen';
import { darkBlue } from '../constants/colors';

const Tab = createBottomTabNavigator();

let tabBarIconSize = 24;
let tabBarLabelStyle = {
  fontSize: 12,
  fontWeight: 500
};

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Overview" component={OverviewScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <IonIcon size={tabBarIconSize} color={darkBlue} name="ios-grid-outline" />
        ),
        tabBarLabelStyle
      }} />
      <Tab.Screen name="Project" component={ProjectScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <OctiIcon size={tabBarIconSize} color={darkBlue} name="project" />
        ),
        tabBarLabelStyle
      }} />
      <Tab.Screen name="Task" component={TaskScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5Icon size={tabBarIconSize} color={darkBlue} name="tasks" />
        ),
        tabBarLabelStyle
      }} />
      <Tab.Screen name="Member" component={TaskScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FeatherIcon size={tabBarIconSize} color={darkBlue} name="users" />
        ),
        tabBarLabelStyle
      }} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
