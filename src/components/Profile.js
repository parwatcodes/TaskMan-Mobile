import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Profile = () => {
  return (
    <View style={styles.container}>
          <FontAwesome5Icon size={150} name="user-circle" />

      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.name}>john.doe@gmail.com</Text>
      <Text style={styles.name}>Admin</Text>
      <Text style={styles.bio}>Software Developer</Text>
      <Text style={styles.location}>San Francisco, CA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 18,
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
  },
});

export default Profile;
