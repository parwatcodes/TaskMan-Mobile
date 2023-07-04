import React from 'react';

import Register from '../components/Register';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Registering user...');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your registration code to store the user data in your backend or perform any necessary actions
  };

  return (
    <Register handleRegister={handleRegister} />
  );
};

export default RegisterScreen;
