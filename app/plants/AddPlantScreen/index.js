import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';

import { addPlantAsync } from 'shared/store/plants/actions';
import { PLANTS } from 'shared/constants';
import { ShadowStyles } from 'shared/styles';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import HarvestInfo from './HarvestInfo';

const BUTTON_TITLE = {
  add: 'Add',
  loading: 'Adding...',
  added: 'Added!',
};

const AddPlantScreen = ({
  navigation,
  route: {
    params: { deviceId, moduleId, plantId, gridPosition },
  },
}) => {
  const plant = PLANTS.find((plant) => plant.id === plantId);
  const { name, image, characteristics, commonUse, duration } = plant;
  const [requestStatus, setRequestStatus] = useState('add');
  const dispatch = useDispatch();

  const addPlant = () => {
    setRequestStatus('loading');
    dispatch(addPlantAsync(deviceId, moduleId, plantId, gridPosition)).then(
      () => {
        setRequestStatus('added');
        setTimeout(() => navigation.navigate('Module'), 2000);
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, ShadowStyles.shadow2]}>
        <Image style={styles.image} source={image} resizeMode="contain" />
      </View>
      <Text style={styles.name}>{name}</Text>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Text style={[styles.description, { marginBottom: 10 }]}>
            {characteristics}
          </Text>
          <Text style={styles.description}>{commonUse}</Text>
        </ScrollView>
      </View>
      <HarvestInfo style={{ marginVertical: 30 }} days={duration} />
      <LightGreenBtn
        style={{ marginTop: 'auto' }}
        title={BUTTON_TITLE[requestStatus]}
        disabled={requestStatus !== 'add'}
        onPress={addPlant}
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
