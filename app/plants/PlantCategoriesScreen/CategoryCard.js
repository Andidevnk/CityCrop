import React from 'react';
import { StyleSheet, Text, Pressable, Image } from 'react-native';

import { ShadowStyles } from 'shared/styles';

const CategoryCard = ({ style, category, onPress }) => {
  const { id, name, image } = category;
  return (
    <Pressable
      style={[styles.container, ShadowStyles.shadow2, style]}
      onPress={() => onPress(id)}
    >
      <Image style={styles.image} source={image} />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  name: {
    paddingVertical: 14,
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#18191F',
  },
});

export default CategoryCard;
