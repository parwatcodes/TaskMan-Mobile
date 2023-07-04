import React from 'react';

import Register from '../components/Register';

const RegisterScreen = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Registering user...');
    // Add your registration code to store the user data in your backend or perform any necessary actions
  };

  return (
    <Register handleRegister={handleRegister} />
  );
};

export default RegisterScreen;
