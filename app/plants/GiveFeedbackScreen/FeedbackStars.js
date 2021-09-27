import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ShadowStyles } from 'shared/styles';
import ScalableImage from 'shared/components/ScalableImage';
import StarsInput from './StarsInput';

const FeedbackStars = ({ style, icon, text, ...props }) => (
  <View style={[styles.feedbackInput, style]}>
    <ScalableImage style={styles.icon} source={icon} resizeMode="contain" />
    <Text style={styles.text}>{text}</Text>
    <StarsInput style={styles.stars} {...props} />
  </View>
);

const styles = StyleSheet.create({
  feedbackInput: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    elevation: 2,
    ...ShadowStyles.shadow1,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
  text: {
    fontSize: 16,
    color: '#18191F',
    fontWeight: 'bold',
  },
  stars: {
    marginLeft: 'auto',
  },
});

export default FeedbackStars;
