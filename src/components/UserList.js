import React from 'react';
import EnTypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';

import UserForm from './UserForm';
import { borderColor, btnBgColor, darkBlue, lightBlue, white } from '../constants/colors';

const CardView = ({ user }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{user.name}</Text>
    <Text style={styles.description}>{user.email}</Text>
    <Text style={styles.description}>Role: {user.role}</Text>
    <View style={{ borderBottomColor: borderColor, borderBottomWidth: 0.3, marginTop: 10 }} />
    <View style={{ flexDirection: 'column', justifyContent: 'center', marginVertical: 5 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
        <EnTypoIcon color={darkBlue} size={14} name="flow-tree" />
        <Text style={{
          fontWeight: 600,
          fontSize: 14,
          marginLeft: 5
        }}>{user.totalProjects} project involved in.</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesome5Icon size={14} color={darkBlue} name="tasks" />
        <Text style={{
          fontWeight: 500,
          fontSize: 14,
          marginLeft: 5
        }}>{user.totalTask} task assigned.</Text>
      </View>
    </View>
  </View>
);

const TaskList = (props) => {
  const { data } = props;
  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleUserForm = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <UserForm modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <View style={styles.column}>
        <FlatList
          data={data}
          renderItem={({ item }) => <CardView user={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Pressable style={styles.createBtnWrapper} onPress={toggleUserForm}>
        <Text style={styles.createBtn}>Create User</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  column: {
    flex: 1,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
  createBtnWrapper: {
    position: 'absolute',
    backgroundColor: btnBgColor,
    bottom: 0,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    zIndex: 1111,
    marginBottom: 10,
    borderRadius: 50,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 5,
    shadowRadius: 2,
  },
  createBtn: {
    color: white,
    fontSize: 16,
    fontWeight: 700,
  }
});

export default TaskList;
