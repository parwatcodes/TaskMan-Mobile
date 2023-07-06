import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CardView = ({ name, description }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{name}</Text>
    <View>
      <Text>Participants: </Text>

    </View>
    <View>
      <View>
        <Text>On Going</Text>
      </View>
    </View>
  </View>
);

const Project = (props) => {
  const { data } = props;

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <FlatList
          data={data}
          renderItem={({ item }) => <CardView name={item.name} description={item.description} />}
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
});

export default Project;
