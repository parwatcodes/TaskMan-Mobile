import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from '../../Screens/UserListScreen';
import UserDetailScreen from '../../Screens/UserDetailScreen';

const UserStack = createNativeStackNavigator();

const UserStackScreen = () => {
  return (
    <UserStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <UserStack.Screen name="User List" component={UserListScreen} />
      <UserStack.Screen name="User Details" component={UserDetailScreen} />
    </UserStack.Navigator>
  );
};

export default UserStackScreen;
