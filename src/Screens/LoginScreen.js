import React from 'react';

import Login from '../components/Login';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in...');
    // Add your login code to authenticate the user and navigate to the next screen
  };


  return (
    <Login handleLogin={handleLogin} />
  );
};

export default LoginScreen;
