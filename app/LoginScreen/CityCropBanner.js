import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

function CityCropBanner() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('assets/logos/citycrop-green.png')}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 65,
    paddingHorizontal: 45,
  },
  image: { width: '100%' },
});

export default CityCropBanner;
