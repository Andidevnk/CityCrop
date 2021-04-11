import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

const TimezoneOption = ({ timezone, onPress }) => (
  <TouchableHighlight
    style={styles.optionContainer}
    underlayColor="#EEEEEE"
    onPress={() => onPress(timezone)}
  >
    <Text style={styles.optionText}>{timezone}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  optionContainer: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  optionText: {
    fontSize: 15,
  },
});

export default React.memo(TimezoneOption);
