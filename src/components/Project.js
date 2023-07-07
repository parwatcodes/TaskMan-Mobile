import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { backgroundColor, btnBgColor, white } from '../constants/colors';
import { projectStatusColor } from '../helpers/mappings';
import { PROJECT_STATUS } from '../constants/index';

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

const Project = (props) => {
  const { data } = props;

  return (
    <View style={styles.container}>
      <View style={styles.btnWrapper}>
        <Text style={styles.createBtn}>Create Project</Text>
      </View>
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
    padding: 20,
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
    borderRadius: 20,
    padding: 20,
    minHeight: 150,
    marginBottom: 20,
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
    borderRadius: 50
  },
  createBtn: {
    color: white,
    fontSize: 16,
    fontWeight: 700,
  }
});

export default Project;
