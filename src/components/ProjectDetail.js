import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

import ProjectForm from './Form/ProjectForm';
import { updateProjectById, getProjectById } from '../api/project';
import { backgroundColor, borderColor, btnBgColor, lightBlue, lightRed, white } from '../helpers/colors';

const ProjectDetail = (props) => {

  const project = props?.route?.params?.project;

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState('');

  const toggleProjectForm = () => {
    setModalVisible(!modalVisible);
  };

  React.useEffect(() => {
    async function getProject() {
      let project1 = await getProjectById(project.id)

      setSelectedProject(project1)
    }

    getProject();
  }, [project.id, modalVisible])

  const updateProject = async (project) => {
    let resp = await updateProjectById(project.id, project);
    let { message, success } = resp;

    Toast.show({
      type: success ? 'success' : 'error',
      text1: message
    });

    if (resp.success) {
      setTimeout(() => {
        setModalVisible(!modalVisible);
      }, 1000)
    }
  };

  const handleProjectDelete = (props) => Alert.alert('Delete Project', 'Are you sure!', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);

  return (
    <View style={styles.mainContainer}>
      <ProjectForm
        onSave={updateProject}
        project={project}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.name}>{selectedProject.name}</Text>
            <Text style={styles.projectStatus}>{selectedProject.status}</Text>
          </View>
          <Text style={styles.description}>{selectedProject.description}</Text>
        </View>
        <View>
          <View style={styles.memberWrapper}>
            <Text style={styles.headerText}>Members</Text>
            <View>
              {selectedProject.members?.map(member => (
                <Text style={styles.member}>{member?.fullName || member?.name}</Text>
              ))}
            </View>
          </View>
          <View style={styles.taskContainer}>
            <Text>Total task: 3</Text>
          </View>
        </View>
      </View>

      <View style={{
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
      }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={{
            width: 'auto',
            fontSize: 16,
            paddingVertical: 10,
            overflow: 'hidden',
            fontWeight: 500,
          }}>
            <IonIcon size={16} name='ios-arrow-back' />
            Back</Text>
        </Pressable>
        <View style={{
          flexDirection: 'row'
        }}>
          <Pressable onPress={toggleProjectForm}>
            <Text style={{
              width: 'auto',
              paddingVertical: 10,
              paddingHorizontal: 20,
              color: white,
              textAlign: 'center',
              overflow: 'hidden',
              borderRadius: 5,
              fontSize: 16,
              fontWeight: 500,
              backgroundColor: lightBlue,
            }}>
              <FeatherIcon size={16} name='edit-2' />
              Edit</Text>
          </Pressable>
          <Pressable onPress={handleProjectDelete}>
            <Text style={{
              width: 'auto',
              color: white,
              fontSize: 16,
              textAlign: 'center',
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginLeft: 10,
              color: white,
              overflow: 'hidden',
              borderRadius: 5,
              fontWeight: 500,
              backgroundColor: lightRed
            }}>
              <FeatherIcon size={16} name='trash-2' />

              Delete</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 5,
    elevation: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
  memberWrapper: {
    marginVertical: 20
  },
  headerText: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 5
  },
  member: {
    fontSize: 14,
    fontWeight: 500,
    color: lightBlue,
  },
  taskContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: lightBlue,
    paddingTop: 6,
    marginRight: 2,
    overflow: 'hidden',
    color: white,
    fontSize: 10,
    fontWeight: 600,
    textAlign: "center"
  },
  projectStatus: {
    backgroundColor: 'blue',
    color: white,
    height: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontWeight: 600,
    borderRadius: 5,
    fontSize: 12,
    overflow: 'hidden'
  }
});

export default ProjectDetail;
