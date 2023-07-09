import React, { useState } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';
import { View, Text, StyleSheet, Pressable, TextInput, Modal, TouchableOpacity, Button } from 'react-native';

import { transformObject } from '../helpers/utils';
import { borderColor, darkBlue, lightBlue, white } from '../constants/colors';
import { TASK_PRIORITY_LABEL, PROJECT_STATUS } from '../constants';

const ProjectForm = (props) => {
  const { modalVisible, setModalVisible } = props;
  const [selected, setSelected] = React.useState("");

  let projectStatus = transformObject(PROJECT_STATUS);
  let taskPriority = transformObject(TASK_PRIORITY_LABEL);
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

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
            <Text style={styles.modalText}>Create a Project</Text>
            <View>
              <View style={{
                marginBottom: 15
              }}>
                <Text style={styles.textLabel}>Name</Text>
                <TextInput style={styles.textInput} value='' />
              </View>
              <View style={{
                marginBottom: 15
              }}>
                <Text style={styles.textLabel}>Description</Text>
                <TextInput style={{ ...styles.textInput, height: 80 }} multiline={true} />
              </View>
              <View style={{
                marginBottom: 15
              }}>
                <Text style={styles.textLabel}>Status</Text>
                <SelectList
                  setSelected={(val) => setSelected(val)}
                  data={projectStatus}
                  save="value"
                  search={false}
                  boxStyles={styles.dropdownStyles}
                  dropdownStyles={styles.dropdownStyles}
                  dropdownItemStyles={styles.dropdownItemStyles}
                  dropdownTextStyles={styles.dropdownTextStyles}
                />
              </View>
              <View style={{
                marginBottom: 15
              }}>
                <Text style={styles.textLabel}>Add member</Text>
                <SelectList
                  setSelected={(val) => setSelected(val)}
                  data={projectStatus}
                  save="value"
                  search={false}
                  boxStyles={styles.dropdownStyles}
                  dropdownStyles={styles.dropdownStyles}
                  dropdownItemStyles={styles.dropdownItemStyles}
                  dropdownTextStyles={styles.dropdownTextStyles}
                />
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
    borderColor
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


export default ProjectForm;
