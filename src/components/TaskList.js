import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';

import { borderColor, btnBgColor, white } from '../constants/colors';
import TaskForm from './TaskForm';

const CardView = ({ name, description }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.description}>{description}</Text>
    <View style={{ borderBottomColor: borderColor, borderBottomWidth: 0.5, marginTop: 10 }} />
    <View>
    </View>
  </View>
);

const TaskList = (props) => {
  const { data } = props;
  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleTaskForm = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <TaskForm modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <View style={styles.column}>
        <FlatList
          data={data}
          renderItem={({ item }) => <CardView name={item.name} description={item.description} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Pressable style={styles.createBtnWrapper} onPress={toggleTaskForm}>
        <Text style={styles.createBtn}>Create Task</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20
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
    borderRadius: 50
  },
  createBtn: {
    color: white,
    fontSize: 16,
    fontWeight: 700,
  }
});

export default TaskList;
