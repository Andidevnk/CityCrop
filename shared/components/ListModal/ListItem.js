import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

const ListItem = ({ item, renderItemContent, onPress }) => (
  <TouchableHighlight
    style={styles.container}
    underlayColor="#EEEEEE"
    onPress={() => onPress(item)}
  >
    <Text style={styles.text}>
      {renderItemContent ? renderItemContent(item) : item}
    </Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  text: {
    fontSize: 15,
  },
});

export default React.memo(ListItem);
