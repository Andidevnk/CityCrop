import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';

const NutrientButton = ({ title, iconSource, level, style, ...props }) => {
  return (
    <Pressable style={[styles.button, style]} {...props}>
      <ScalableImage
        style={{ height: 28, marginRight: 15 }}
        source={iconSource}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
        <Text style={styles.levelTitle}>LEVEL</Text>
        <Text style={styles.levelValue}>{level}%</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 1,
    },
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#18191F',
  },
  levelTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#BEBEBE',
  },
  levelValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#59C901',
  },
});

export default NutrientButton;
