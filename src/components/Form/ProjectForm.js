import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';
import { View, Text, StyleSheet, Pressable, TextInput, Modal, TouchableOpacity } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

import { transformObject } from '../../helpers/utils';
import { PROJECT_STATUS } from '../../helpers/mappings';
import { getMembers } from '../../api/user';
import { borderColor, darkBlue, lightBlue, white } from '../../helpers/colors';

const ProjectForm = (props) => {
  const { modalVisible, setModalVisible } = props;
  const [selectedProject, setSelectedProject] = React.useState({
    name: '',
    description: '',
    status: 'not-started',
    members: []
  });
  const [memberList, setMemberList] = React.useState([]);
  const [statusDropdown, setStatusDropdown] = React.useState({
    key: 'not-started',
    value: 'Not Started'
  });

  React.useEffect(() => {
    async function getMemberList() {
      let members = await getMembers();

      let membersForDropdown = members.map(member => (
        {
          value: member.fullName || member.name,
          key: member.id
        }
      ));

      setMemberList(membersForDropdown);
    }

    getMemberList();
  }, []);

  React.useEffect(() => {
    if (props.project) {
      setSelectedProject(props.project);
    }

    if (props.project?.status) {
      let initialStatus = {
        key: props.project.status,
        value: PROJECT_STATUS[props.project.status]
      };

      setStatusDropdown(initialStatus);
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
    selectedProject.members = selectedMembers;
    props.onSave(selectedProject);
  };

  const modalTitle = props.project ? 'Edit a project' : 'Create a project';

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
                  value={selectedProject.description}
                  style={{ ...styles.textInput, height: 80 }}
                  onChangeText={(value) => handleChangeText('description', value)} />
              </View>
              <View style={{
                marginBottom: 15
              }}>
                <Text style={styles.textLabel}>Status</Text>
                <SelectList
                  setSelected={(val) => {
                    handleChangeText('status', val);
                  }}
                  data={projectStatus}
                  defaultOption={statusDropdown}
                  save="key"
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
                <Text style={styles.textLabel}>Members</Text>
                <MultipleSelectList
                  setSelected={(val) => {
                    setSelectedMembers(val);
                  }}
                  data={memberList}
                  save="key"
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
            <Toast
              position='top'
            />
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


export default ProjectForm;
