import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';

import TaskForm from './TaskForm';
import { TASK_STATUS } from '../constants';
import { priorityToLabelColor, statusToCardColor } from '../helpers/mappings';
import { borderColor, btnBgColor, lightBlue, white } from '../constants/colors';

const CardView = ({ task }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{task.name}</Text>
    <Text style={styles.description}>{task.description}</Text>
    <View style={{ borderBottomColor: borderColor, borderBottomWidth: 0.3, marginTop: 10 }} />
    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
      <AntIcon size={16} name="user" />
      <Text style={{
        fontWeight: 500,
        fontSize: 14,
      }}>{task.assigneeName}</Text>
    </View>
    <View style={{ borderBottomColor: borderColor, borderBottomWidth: 0.5 }} />
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',  marginTop: 10 }}>
      <Text style={{
        paddingHorizontal: 10,
        paddingVertical: 2,
        overflow: 'hidden',
        borderRadius: 5,
        backgroundColor: statusToCardColor[task.status]
      }}>{TASK_STATUS[task.status]}</Text>
      <FontAwesomeIcon size={20} color={priorityToLabelColor[task.priority]} name="tag" />
      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
        <MCIcon size={20} name="clock" />
        <Text style={{ fontWeight: 500, marginLeft: 2}}>{task.startDate}</Text>
      </View>
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
          renderItem={({ item }) => <CardView task={item} />}
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
