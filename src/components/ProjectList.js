import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';

import ProjectForm from './ProjectForm';
import { PROJECT_STATUS } from '../constants/index';
import { projectStatusColor } from '../helpers/mappings';
import { backgroundColor, btnBgColor, white } from '../constants/colors';

const CardView = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{item.name}</Text>
    <View>
      <Text>Members: </Text>
      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <Text style={styles.circle}></Text>
        <Text style={styles.circle}></Text>
        <Text style={styles.circle}></Text>
      </View>
    </View>
    <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between' }}>
      <View>
        <View style={styles.container2}>
        </View>
      </View>
      <View>
        <Text style={{
          ...styles.projectStatus,
          backgroundColor: projectStatusColor[item.status]
        }}>{PROJECT_STATUS[item.status]}</Text>
      </View>
    </View>
  </View>
);

const ProjectList = (props) => {
  const { data } = props;
  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleProjectForm = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <ProjectForm modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <Pressable style={styles.btnWrapper} onPress={toggleProjectForm}>
        <Text style={styles.createBtn}>Create Project</Text>
      </Pressable>
      <View style={styles.column}>
        <FlatList
          data={data}
          renderItem={({ item }) => <CardView item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flex: 1,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    minHeight: 150,
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
  circle: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: 'yellow',
    marginRight: 5
  },
  projectStatus: {
    backgroundColor: 'blue',
    color: white,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    fontWeight: 600,
    borderRadius: 10,
    overflow: 'hidden'
  },
  btnWrapper: {
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
    shadowOpacity: 5
  },
  createBtn: {
    color: white,
    fontSize: 16,
    fontWeight: 700,
  }
});

export default ProjectList;
