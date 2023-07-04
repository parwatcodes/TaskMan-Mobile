import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Screens/LoginScreen';

const Stack = createNativeStackNavigator();

const SignedInStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* Add more screens here as needed */}
    </Stack.Navigator>
  );
};

export default SignedInStack;
