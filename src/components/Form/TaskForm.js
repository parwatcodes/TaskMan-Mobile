import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { View, Text, StyleSheet, Pressable, TextInput, Modal, TouchableOpacity, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import IonIcon from 'react-native-vector-icons/Ionicons';

import { borderColor, darkBlue, lightBlue, white } from '../../helpers/colors';
import { PROJECT_STATUS, TASK_PRIORITY_LABEL, TASK_STATUS } from '../../helpers/mappings';
import { transformObject } from '../../helpers/utils';
import { getProjects } from '../../api/project';
import { getMembers } from '../../api/user';

const TaskForm = (props) => {
  const { modalVisible, setModalVisible } = props;
  let taskStatus = transformObject(TASK_STATUS);
  let taskPriority = transformObject(TASK_PRIORITY_LABEL);

  const [defaultTaskStatus, setDefaultTaskStatus] = React.useState(taskStatus[0]);
  const [defaultPriority, setDefaultPriority] = React.useState(taskPriority[0]);
  const [projects, setProjects] = React.useState([]);
  const [members, setMembers] = React.useState([]);

  const [selectedTask, setSelectedTask] = React.useState({
    name: '',
    description: '',
    project: '',
    member: '',
    status: '',
    priority: '',
    startDate: '',
    endDate: ''
  });

  React.useEffect(() => {
    async function getProjectList() {
      let projects = await getProjects();

      let listForDropdown = projects.map(project => ({
        key: project.id,
        value: project.name
      }));

      setProjects(listForDropdown);
    }

    getProjectList();
  }, [])

  React.useEffect(() => {
    async function getMemberList() {
      let members = await getMembers();

      let listForDropdown = members.map(member => ({
        key: member.id,
        value: member.fullName || member.name
      }));

      setMembers(listForDropdown)
    }

    getMemberList();
  }, [])

  React.useEffect(() => {
    if (props.task) {
      setSelectedTask(props.task);
    }

    if (props?.task?.status) {
      setDefaultTaskStatus({
        key: props.task.status,
        value: TASK_STATUS[props.task.status]
      });
    }

    if (props?.task?.priority) {
      setDefaultPriority({
        key: props.task.priority,
        value: TASK_PRIORITY_LABEL[props.task.priority]
      });
    }

  }, [props.task]);

  const handleTextChange = (key, value) => {
    setSelectedTask({
      ...selectedTask,
      [key]: value
    });
  };

  const modalTitle = props.task ? 'Edit a task' : 'Create a task';

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{
          backgroundColor: 'green'
        }}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={{
              position: 'absolute',
              right: 15,
              top: 15
            }} onPress={() => setModalVisible(!modalVisible)}>
              <IonIcon size={40} color={'grey'} name="ios-close-circle-outline" />
            </Pressable>
            <Text style={styles.modalText}>{modalTitle}</Text>
            <View>
              <View style={{
                marginBottom: 15
              }}>
                <Text style={styles.textLabel}>Title</Text>
                <TextInput
                  style={styles.textInput}
                  value={selectedTask.name}
                  onChangeText={(val) => handleTextChange('name', val)}
                />
              </View>
              <View style={{
                marginBottom: 15
              }}>
                <Text style={styles.textLabel}>Description</Text>
                <TextInput
                  style={{ ...styles.textInput, height: 80 }}
                  multiline={true}
                  value={selectedTask.description}
                  onChangeText={(val) => handleTextChange('description', val)}
                />
              </View>
              <View style={{
                marginBottom: 15
              }}>
                <Text style={styles.textLabel}>Project</Text>
                <SelectList
                  setSelected={(val) => handleTextChange('project', val)}
                  data={projects}
                  save="value"
                  boxStyles={styles.dropdownStyles}
                  dropdownStyles={styles.dropdownStyles}
                  dropdownItemStyles={styles.dropdownItemStyles}
                  dropdownTextStyles={styles.dropdownTextStyles}
                />
              </View>
              <View style={{
                marginBottom: 15
              }}>
                <Text style={styles.textLabel}>Member</Text>
                <SelectList
                  setSelected={(val) => handleTextChange('member', val)}
                  data={members}
                  save="value"
                  boxStyles={styles.dropdownStyles}
                  dropdownStyles={styles.dropdownStyles}
                  dropdownItemStyles={styles.dropdownItemStyles}
                  dropdownTextStyles={styles.dropdownTextStyles}
                />
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: 15
              }}>
                <View style={{
                  width: '48%'
                }}>
                  <Text style={styles.textLabel}>Status</Text>
                  <SelectList
                    setSelected={(val) => handleTextChange('status', val)}
                    data={taskStatus}
                    save="value"
                    search={false}
                    defaultOption={defaultTaskStatus}
                    boxStyles={styles.dropdownStyles}
                    dropdownStyles={styles.dropdownStyles}
                    dropdownItemStyles={styles.dropdownItemStyles}
                    dropdownTextStyles={styles.dropdownTextStyles}
                  />
                </View>
                <View style={{
                  width: '48%'
                }}>
                  <Text style={styles.textLabel}>Priority</Text>
                  <SelectList
                    setSelected={(val) => handleTextChange('priority', val)}
                    data={taskPriority}
                    save="value"
                    search={false}
                    defaultOption={defaultPriority}
                    boxStyles={styles.dropdownStyles}
                    dropdownStyles={styles.dropdownStyles}
                    dropdownItemStyles={styles.dropdownItemStyles}
                    dropdownTextStyles={styles.dropdownTextStyles}
                  />
                </View>
              </View>
              <View style={{
                marginBottom: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Text style={styles.textLabelDate}>Start Date</Text>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={new Date(setSelectedTask.startDate || new Date())}
                  mode='datetime'
                  is24Hour={true}
                  onChange={(event, date) => handleTextChange('startDate', date)}
                  style={{
                    alignSelf: 'flex-end'
                  }}
                />
              </View>
              <View style={{
                marginBottom: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Text style={styles.textLabelDate}>End Date</Text>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={new Date(selectedTask.endDate || new Date)}
                  mode='datetime'
                  is24Hour={true}
                  onChange={(event, date) => handleTextChange('endDate', date)}
                  style={{
                    alignSelf: 'flex-end'
                  }}
                />
              </View>
              <TouchableOpacity style={styles.doneBtnWrapper} onPress={() => props.onSave(selectedTask)} >
                <Text style={styles.doneText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    marginBottom: 80,
    justifyContent: 'flex-end'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 700
  },
  textLabel: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 5
  },
  textLabelDate: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 600,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    borderColor,
    paddingHorizontal: 5
  },
  doneBtnWrapper: {
    backgroundColor: darkBlue,
    borderRadius: 50,
    marginTop: 10
  },
  doneText: {
    color: white,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center'
  },
  dropdownStyles: {
    borderRadius: 5,
    borderColor,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
  },
  dropdownItemStyles: {
    paddingBottom: 5,
    paddingTop: 5
  },
  dropdownTextStyles: {
    fontWeight: 500
  }
});


export default TaskForm;
