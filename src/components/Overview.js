import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';

import { statusToCardColor, TASK_STATUS } from '../helpers/mappings';
import { goldTips, portage, white } from '../helpers/colors';
import { LOGO_URL, SCREEN_1 } from '../helpers/constant';

const renderItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={{ ...styles.item, backgroundColor: statusToCardColor[item.status || 'default'] }}>
      <Text style={styles.title}>{TASK_STATUS[item.status]}</Text>
      <View style={{
        alignItems: 'baseline',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 10
      }}>
        <Text style={{
          fontSize: 40,
          fontWeight: 600,
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.85)',
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 1
        }}>{item.total}</Text>
        <Text style={{
          fontSize: 10,
          fontWeight: 600
        }}>
          &nbsp;
          {item.type}(s)</Text>
      </View>
    </View>
  </View>
);

const Overview = (props) => {
  let { data } = props;

  return (
    <View style={styles.main}>
        <ImageBackground source={{
          uri: SCREEN_1
        }} style={{
          flex: 1
        }}>
      <View style={styles.container}>
          <View>
            <FlatList
              data={data}
              numColumns={2}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.reportContainer}>
            <View>
              <Text>Report Analysis</Text>
            </View>
          </View>
      </View >
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%"
  },
  container: {
    margin: 10,
    flexDirection: 'column',
    flex: 1
  },
  itemContainer: {
    flex: 1,
    margin: 4,
  },
  item: {
    padding: 16,
    borderRadius: 8,
    minHeight: 110,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  title: {
    fontSize: 16,
    fontWeight: 500
  },
  reportContainer: {
    flex: 1,
    backgroundColor: goldTips,
    marginTop: 10,
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
