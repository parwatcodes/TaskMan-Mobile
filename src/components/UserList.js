import React from 'react';
import EnTypoIcon from 'react-native-vector-icons/Entypo';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';

import { addUser } from '../api/user';
import UserForm from './Form/UserForm';
import { USER_ROLE } from '../helpers/mappings';
import { borderColor, btnBgColor, darkBlue, darkRed, lightBlue, white } from '../helpers/colors';

const CardView = ({ user, handleOnUserClick }) => (
  <Pressable style={styles.card} onPress={handleOnUserClick}>
    <View style={{flexDirection: 'row', alignItems: 'baseline'}}>

    <Text style={styles.name}>{user.fullName || user.name}</Text>
    <Text style={{
      backgroundColor: user.role === 'admin' ? darkRed : lightBlue,
      color: white,
      paddingHorizontal: 10,
      paddingVertical: 1,
      borderRadius: 5,
      overflow: 'hidden',
      fontWeight: 500,
      marginLeft: 10
    }}>{USER_ROLE[user.role]}</Text>

    </View>
    <Text style={styles.description}>{user.email}</Text>
    <View style={{ borderBottomColor: borderColor, borderBottomWidth: 0.3, marginTop: 10 }} />
    <View style={{ flexDirection: 'column', justifyContent: 'center', marginVertical: 5 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
        <EnTypoIcon color={darkBlue} size={14} name="flow-tree" />
        <Text style={{
          fontWeight: 600,
          fontSize: 14,
          marginLeft: 5
        }}>{user.totalProjects || 0} project involved in.</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesome5Icon size={14} color={darkBlue} name="tasks" />
        <Text style={{
          fontWeight: 500,
          fontSize: 14,
          marginLeft: 5
        }}>{user.totalTask || 0} task assigned.</Text>
      </View>
    </View>
  </Pressable>
);

const UserList = (props) => {
  const { data } = props;
  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleUserForm = () => {
    setModalVisible(!modalVisible);
  };


  const handleAddUser = async (user) => {
    let resp = await addUser(user);
    let { message, success } = resp;

    Toast.show({
      type: success ? 'success' : 'error',
      text1: message
    });

    if (resp.success) {
      setTimeout(() => {
        setModalVisible(!modalVisible);
        props.navigation.navigate('User List')
      }, 1000)
    }
  };

  return (
    <View style={styles.container}>
      <UserForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onSave={handleAddUser}
      />
      <View style={styles.column}>
        <FlatList
          data={data}
          renderItem={({ item }) => <CardView user={item} handleOnUserClick={() => {
            props.handleOnUserClick(item)
          }} />}
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

export default UserList;
