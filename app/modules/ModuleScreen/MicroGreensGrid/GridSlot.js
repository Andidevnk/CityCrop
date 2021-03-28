import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
} from 'react-native';

import RectangleWithCutoff from './RectangleWithCutoff';

const GridSlot = ({ style, name, cutoffPosition }) => {
  const windowHeight = useWindowDimensions().height;
  const cardHeight = Math.min((windowHeight - 200) * 0.29, 150);
  const showTitleOnTop =
    cutoffPosition === 'bottom-right' || cutoffPosition === 'bottom-left';

  if (!name) return <EmptyGridSlot style={[{ height: cardHeight }, style]} />;
  return (
    <View style={[styles.card, { height: cardHeight }, style]}>
      {showTitleOnTop && <PlantTitle name={name} />}
      <RectangleWithCutoff
        cutoffPosition={cutoffPosition}
        height={cardHeight - 36}
        backgroundColor="#FFFFFF"
      />
      {!showTitleOnTop && <PlantTitle name={name} />}
    </View>
  );
};

const PlantTitle = ({ name }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

const EmptyGridSlot = ({ style }) => (
  <View style={[styles.card, styles.centerContent, style]}>
    <Image
      style={{ width: 50, height: 50 }}
      source={require('assets/icons/large-plus.png')}
    />
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.15,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 12,
  },
  title: {
    fontSize: 14,
    color: '#000000',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GridSlot;
