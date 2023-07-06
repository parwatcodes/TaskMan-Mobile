import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/HomeScreen';

const Stack = createNativeStackNavigator();

const SignedInStack = () => {
  return (
    <HomeScreen />
  );
};

export default SignedInStack;
