import React from 'react';

import Login from '../components/Login';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in...');
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your login code to authenticate the user and navigate to the next screen
  };


  return (
    <Login handleLogin={handleLogin} />
  );
};

export default LoginScreen;
