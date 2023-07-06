import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const renderItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.item}>
    <Text>{item.total} {item.status}</Text>
    <Text>{item.type}</Text>
    </View>
  </View>
);

const Overview = (props) => {
  let { data } = props;

  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemContainer: {
    flex: 1,
    margin: 4,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    minHeight: 100
  },
});

export default Overview;
