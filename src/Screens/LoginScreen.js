import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Login from '../components/Login';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Logging in...');
    navigation.navigate('Dashboard');
  };

  return (
    <Login
      handleLogin={handleLogin}
    />
  );
};

export default LoginScreen;
