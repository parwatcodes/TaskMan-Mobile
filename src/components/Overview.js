import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { statusToCardColor } from '../helpers/mappings';

const renderItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={{ ...styles.item, backgroundColor: statusToCardColor[item.status || 'default'] }}>
      <Text style={styles.title}>{item.total} {item.status}</Text>
      <Text>{item.type}</Text>
    </View>
  </View>
);

const Overview = (props) => {
  let { data } = props;

  return (
    <View style={styles.container}>

    <FlatList
      data={data}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
    <View style={styles.reportContainer}>
      <Text>Task Analysis</Text>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 4,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    minHeight: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 500
  },
  reportContainer: {
    backgroundColor: 'yellow',
    height: '50%',
    marginTop: 10,
    marginBottom: 10,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  }
});

export default Overview;
