import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { LOGO_URL } from '../constants';
import { borderColor, backgroundColor, white } from '../constants/colors';

const Login = (props) => {
  const { email, password, handleLogin } = props;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: LOGO_URL
          }}
        />
        <Text style={styles.text}>Sign in to TaskMan</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
        // onChangeText={text => setEmail(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
        // onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Button color='#ffff' title="Login" onPress={handleLogin} />
        </TouchableOpacity >
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: '10%',
    borderColor: 'gray',
  },
  topContainer: {
    marginBottom: 30,
    alignItems: 'center'
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom: 5
  },
  inputContainer: {
    backgroundColor,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor

  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor,
    backgroundColor: white,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: 500
  },
  button: {
    backgroundColor: 'green',
    width: '100%',
    borderRadius: 5,
    marginTop: 20
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 5
  }
});

export default Login;
