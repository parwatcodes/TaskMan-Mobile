import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProjectListScreen from '../../Screens/ProjectListScreen';
import ProjectDetailScreen from '../../Screens/ProjectDetailScreen';

const ProjectStack = createNativeStackNavigator();

const ProjectStackScreen = () => {
  return (
    <ProjectStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProjectStack.Screen name="Project List" component={ProjectListScreen} />
      <ProjectStack.Screen name="Project Details" component={ProjectDetailScreen} />
    </ProjectStack.Navigator>
  );
};

export default ProjectStackScreen;
