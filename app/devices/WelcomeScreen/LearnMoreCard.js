import React from 'react';
import { StyleSheet, Pressable, Text, Image } from 'react-native';
import * as Linking from 'expo-linking';

import { CardStyles } from 'shared/styles';

const LearnMoreCard = () => (
  <Pressable
    style={CardStyles.card}
    onPress={() => Linking.openURL('https://www.citycrop.io/how-it-works/')}
  >
    <Image
      style={styles.image}
      source={require('assets/icons/cart-large.png')}
      fadeDuration={0}
      resizeMode="contain"
    />
    <Text style={styles.topText}>Don't Own a CityCrop yet?</Text>
    <Text>Learn more and or order it today.</Text>
  </Pressable>
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
