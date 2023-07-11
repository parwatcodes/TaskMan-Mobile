import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

import ProjectForm from './Form/ProjectForm';
import { projectStatusColor, PROJECT_STATUS } from '../helpers/mappings';
import { backgroundColor, btnBgColor, darkGreen, lightBlue, lightGreen, white } from '../helpers/colors';

const CardView = ({ item, handleOnProjectClick }) => (
  <Pressable style={styles.card} onPress={handleOnProjectClick}>
    <View>
      <View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'baseline'
        }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={{
            ...styles.projectStatus,
            backgroundColor: projectStatusColor[item.status || 'on-going']
          }}>{PROJECT_STATUS[item.status || 'on-going']}</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <View>
            <Text>Members: </Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text style={styles.circle}>PK</Text>
              <Text style={styles.circle}>JK</Text>
              <Text style={styles.circle}>AP</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{
        position: 'absolute',
        right: 10,
        top: 1
      }}>
        <ProgressCircle
          percent={30}
          radius={35}
          borderWidth={10}
          color={darkGreen}
          shadowColor="#999"
          bgColor="#fff"
        >
          <Text style={{ fontSize: 14, fontWeight: 500 }}>{'30%'}</Text>
        </ProgressCircle>
      </View>
    </View>
    <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between' }}>
      <View>
        <View style={styles.container2}>
        </View>
      </View>
    </View>
  </Pressable>
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
          renderItem={({ item }) => <CardView item={item}
            handleOnProjectClick={props.handleOnProjectClick}
          />}
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
    marginRight: 5
  },
  description: {
    fontSize: 14,
    color: '#888',
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
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontWeight: 600,
    borderRadius: 5,
    fontSize: 12,
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
