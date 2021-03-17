import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Measurement = ({ style, icon, name, formattedValue }) => {
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
      <Image
        style={{ width: 25, height: 25, marginRight: 12 }}
        source={icon}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.value}>{formattedValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#BEBEBE',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#18191F',
  },
});

export default Measurement;
