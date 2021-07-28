import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { PLANTS } from 'shared/constants';
import { ShadowStyles } from 'shared/styles';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import DurationInfo from './DurationInfo';

const AddPlantScreen = ({
  navigation,
  route: {
    params: { deviceId, moduleId, plantId, gridPosition },
  },
}) => {
  const plant = PLANTS.find((plant) => plant.id === plantId);
  const { name, image, characteristics, commonUse, germinationDays, duration } =
    plant;

  const navigateToAddDome = () =>
    navigation.navigate('Add Dome', {
      deviceId,
      moduleId,
      gridPosition,
      plantId,
      plantName: name,
    });

  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, ShadowStyles.shadow2]}>
        <Image style={styles.image} source={image} resizeMode="contain" />
      </View>
      <Text style={styles.name}>{name}</Text>
      <View style={{ maxHeight: '24%' }}>
        <ScrollView>
          <Text style={[styles.description, { marginBottom: 10 }]}>
            {characteristics}
          </Text>
          <Text style={styles.description}>{commonUse}</Text>
        </ScrollView>
      </View>
      <View style={styles.durationInfoContainer}>
        <DurationInfo
          source={require('assets/icons/seeds.png')}
          name="Germination"
          duration={germinationDays}
        />
        <DurationInfo
          source={require('assets/icons/tall-plant-pot.png')}
          name="Harvest"
          duration={duration}
        />
      </View>
      <LightGreenBtn
        style={{ marginTop: 'auto' }}
        title="Next"
        onPress={navigateToAddDome}
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
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '100%',
    height: '24%',
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
  durationInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 30,
  },
});
