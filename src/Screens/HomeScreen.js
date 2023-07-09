import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TaskListScreen from './TaskListScreen';
import OverviewScreen from './OverviewScreen';
import UserListScreen from './UserListScreen';
import ProjectListScreen from './ProjectListScreen';
import ProfileScreen from './ProfileScreen';
import { darkBlue, white } from '../constants/colors';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator

      screenOptions={{
        tabBarActiveTintColor: 'green',
        headerTitleAlign: 'left',
        tabBarInactiveTintColor: darkBlue,
        headerTintColor: darkBlue,
        showIcon: true,
        showLabel: false,
        iconStyle: {
          width: 'auto',
          height: 28,
        },
        tabStyle: {
          margin: 0.2,
          borderRadius: 2,
        },
        tabBarStyle: {
          borderTopWidth: 0,
        },
        headerStyle: {
          backgroundColor: 'rgb(241, 241, 241)',
          shadowColor: 'transparent'
        },
        headerTitleStyle: {
          fontWeight: 700,
          fontSize: 20,
          marginLeft: 5
        }
      }}
    >
      <Tab.Screen name="Overview" component={OverviewScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FoundationIcon size={size} color={color} name="home" />
        )
      }} />
      <Tab.Screen name="Project" component={ProjectListScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MCIcon size={size} color={color} name="card-bulleted-outline" />
        )
      }} />
      <Tab.Screen name="Task" component={TaskListScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5Icon size={size} color={color} name="tasks" />
        )
      }} />
      <Tab.Screen name="Member" component={UserListScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FeatherIcon size={size} color={color} name="users" />
        )
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5Icon size={size} color={color} name="user-circle" />
        )
      }} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
