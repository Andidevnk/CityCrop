import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import { ShadowStyles } from 'shared/styles';
import EmptyGridSlot from './EmptyGridSlot';

const GridSlot = ({ style, name, onGridSlotPress, onEmptyGridSlotPress }) => {
  if (!name)
    return <EmptyGridSlot style={style} onPress={onEmptyGridSlotPress} />;
  return (
    <View style={style}>
      <Pressable
        style={[styles.contentContainer, ShadowStyles.shadow2]}
        onPress={onGridSlotPress}
      >
        <View style={styles.plantImageContainer}>
          <Image
            style={styles.image}
            source={require('assets/imgs/plants/herbs/thai_basil.png')}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.name}>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    alignSelf: 'flex-start',
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
  },
  plantImageContainer: {
    height: 54,
    padding: 5,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    paddingVertical: 3,
    paddingLeft: 5,
    fontSize: 11,
    color: '#000000',
  },
});

export default GridSlot;
