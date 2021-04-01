import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { PLANTS } from 'shared/constants';
import { ShadowStyles } from 'shared/styles';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import HarvestInfo from './HarvestInfo';

const AddPlantScreen = ({
  route: {
    params: { plantId },
  },
}) => {
  const plant = PLANTS.find((plant) => plant.id === plantId);
  const { name, image, characteristics, commonUse, duration } = plant;
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, ShadowStyles.shadow2]}>
        <Image style={styles.image} source={image} resizeMode="contain" />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={[styles.description, { marginBottom: 10 }]}>
        {characteristics}
      </Text>
      <Text style={styles.description}>{commonUse}</Text>
      <HarvestInfo style={{ marginTop: 'auto' }} days={duration} />
      <LightGreenBtn
        style={{ marginTop: 'auto' }}
        title="Add"
        onPress={() => console.log('add plant')}
      />
    </View>
  );
};

export default AddPlantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: '#F5F8F5',
  },
  imageContainer: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 40,
  },
  image: {
    height: '100%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#18191F',
    marginBottom: 25,
  },
  description: {
    fontSize: 14,
    color: '#18191F',
  },
});
