import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { View, Text, StyleSheet, Pressable, TextInput, Modal, TouchableOpacity, Button } from 'react-native';

import { borderColor, darkBlue, lightBlue, white } from '../constants/colors';
import { TASK_PRIORITY_LABEL, TASK_STATUS } from '../constants';
import { transformObject } from '../helpers/utils';

const TaskForm = (props) => {
  const { modalVisible, setModalVisible } = props;
  const [selected, setSelected] = React.useState("");

  let taskStatus = transformObject(TASK_STATUS);
  let taskPriority = transformObject(TASK_PRIORITY_LABEL);

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
            <Text style={styles.modalText}>Create a Task</Text>
            <View>
              <Text style={styles.textLabel}>Title</Text>
              <TextInput style={styles.textInput} value='' />
              <Text style={styles.textLabel}>Description</Text>
              <TextInput style={{ ...styles.textInput, height: 80 }} multiline={true} />
              {/* <Text>Start Date</Text>
              <Text>End Date</Text> */}
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
                <View style={{
                  width: '45%'
                }}>
                  <Text>Status</Text>
                  <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={taskStatus}
                    save="value"
                    boxStyles={styles.dropdownStyles}
                    dropdownStyles={styles.dropdownStyles}
                  />
                </View>
                <View style={{
                  width: '45%'
                }}>
                  <Text>Priority</Text>
                  <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={taskPriority}
                    save="value"
                    boxStyles={styles.dropdownStyles}
                    dropdownStyles={styles.dropdownStyles}
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.doneBtnWrapper}>
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
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 40,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
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
    fontWeight: 600
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    borderColor
  },
  doneBtnWrapper: {
    backgroundColor: darkBlue,
    borderRadius: 50,
  },
  doneText: {
    color: white,
    paddingTop: 10,
    paddingBottom: 10,
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
  }
});


export default TaskForm;
