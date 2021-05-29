import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import { DEVICE_MODULE_IMAGES } from 'shared/constants';
import { CardStyles } from 'shared/styles';
import ScalableImage from 'shared/components/ScalableImage';

const AddModuleCard = ({ style, text, type, onPress }) => (
  <Pressable
    style={[CardStyles.card, styles.cardPadding, style]}
    onPress={onPress}
  >
    <ScalableImage
      style={styles.moduleImage}
      source={
        type === 'LU'
          ? DEVICE_MODULE_IMAGES['LU-add-module']
          : DEVICE_MODULE_IMAGES['UU-add-module']
      }
      resizeMode="contain"
    />
    <Text style={styles.text}>{text}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  cardPadding: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 25,
  },
  moduleImage: {
    height: 140,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0B7B03',
  },
});

export default AddModuleCard;
