import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TaskListScreen from './TaskListScreen';
import ProjectScreen from './ProjectScreen';
import OverviewScreen from './OverviewScreen';
import { darkBlue, white } from '../constants/colors';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        title: '',
        tabBarStyle: {
          borderTopWidth: 0,
        },
        headerStyle: {
          backgroundColor: 'rgb(239, 239, 239)',
          shadowColor: 'transparent'
        },
      }}
      tabBarOptions={{
        activeTintColor: 'red',
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
      }}
    >
      <Tab.Screen name="Overview" component={OverviewScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FoundationIcon size={size} color={darkBlue} name="home" />
        )
      }} />
      <Tab.Screen name="Project" component={ProjectScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MCIcon size={size} color={darkBlue} name="card-bulleted-outline" />
        )
      }} />
      <Tab.Screen name="Task" component={TaskListScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5Icon size={size} color={darkBlue} name="tasks" />
        )
      }} />
      <Tab.Screen name="Member" component={TaskListScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FeatherIcon size={size} color={darkBlue} name="users" />
        )
      }} />
      <Tab.Screen name="Profile" component={TaskListScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5Icon size={size} color={darkBlue} name="user-circle" />
        )
      }} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
