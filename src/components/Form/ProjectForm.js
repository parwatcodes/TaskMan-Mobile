import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';
import { View, Text, StyleSheet, Pressable, TextInput, Modal, TouchableOpacity } from 'react-native';

import { transformObject } from '../../helpers/utils';
import { PROJECT_STATUS } from '../../helpers/mappings';
import { borderColor, darkBlue, lightBlue, white } from '../../helpers/colors';

const ProjectForm = (props) => {
  const { modalVisible, setModalVisible } = props;
  const [selectedProject, setSelectedProject] = React.useState({
    name: '',
    description: '',
    status: '',
    members: []
  });

  React.useEffect(() => {
    if (props.project) {
      setSelectedProject(props.project);
    }
  }, [props.project]);

  let projectStatus = transformObject(PROJECT_STATUS);

  const handleChangeText = (key, val) => {
    setSelectedProject({
      ...selectedProject,
      [key]: val
    });
  };

  const handleSubmit = () => {
    props.onSave(selectedProject);
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
                <TextInput
                  style={styles.textInput}
                  value={selectedProject.name}
                  onChangeText={(value) => handleChangeText('name', value)} />
              </View>
              <View style={{
                marginBottom: 15
              }}>
                <Text style={styles.textLabel}>Description</Text>
                <TextInput
                  multiline={true}
                  style={{ ...styles.textInput, height: 80 }}
                  onChangeText={(value) => handleChangeText('name', value)} />
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
              <TouchableOpacity style={styles.doneBtnWrapper} onPress={handleSubmit}>
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
