import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';

const StarsInput = ({ style, rating, onRatingChange }) => (
  <View style={[styles.container, style]}>
    {[...Array(5)].map((_, index) => (
      <Pressable key={index} onPress={() => onRatingChange(index + 1)}>
        <ScalableImage
          style={[styles.icon, ...(index === 4 ? [{ marginRight: 0 }] : [])]}
          source={
            index < rating
              ? require('assets/icons/star-filled.png')
              : require('assets/icons/star-outlined.png')
          }
          resizeMode="contain"
          fadeDuration={0}
          onPress={() => onRatingChange(index + 1)}
        />
      </Pressable>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});

export default StarsInput;
