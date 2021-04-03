import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { CardStyles } from 'shared/styles';

const LearnMoreCard = () => (
  <View style={CardStyles.card}>
    <Image
      style={styles.image}
      source={require('assets/icons/cart-large.png')}
      fadeDuration={0}
      resizeMode="contain"
    />
    <Text style={styles.topText}>Don't Own a CityCrop yet?</Text>
    <Text>Learn more and or order it today.</Text>
  </View>
);

const styles = StyleSheet.create({
  image: {
    height: 50,
    marginBottom: 35,
  },
  topText: {
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default LearnMoreCard;
