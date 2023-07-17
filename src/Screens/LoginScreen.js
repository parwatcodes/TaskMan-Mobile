import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import Login from '../components/Login';
import { seedData } from '../seed';
import { login } from '../api/login';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const navigation = useNavigation();

  React.useEffect(() => {
    async function onScreenLoad() {
      await seedData();
    };

    onScreenLoad();
  });



  const handleLogin = async () => {
    console.log('Logging in...');

    const response = await login({ email, password });

    if (response.success) {

    } else {
      Toast.show({
        type: 'error',
        text1: response.message
      });
    }

    console.log('response', response);
    // navigation.navigate('Dashboard');
  };

  let data = {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin
  };

  return (
    <>
      <Login {...data} />
      <Toast
        position='top'
        bottomOffset={20}
      />
    </>
  );
};

export default LoginScreen;
