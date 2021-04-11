import React, { useState, useCallback, useLayoutEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  Text,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { ShadowStyles } from 'shared/styles';
import { getPlantImage } from 'shared/utilities';
import { deletePlantAsync } from 'shared/store/plants/actions';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import ProgressRing from './ProgressRing';
import DeletePlantBtnIcon from './DeletePlantBtnIcon';

const PlantScreen = ({
  navigation,
  route: {
    params: { deviceId, moduleId, plant },
  },
}) => {
  const { plantId, position } = plant;
  const windowHeight = useWindowDimensions().height;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const deletePlant = useCallback(() => {
    setIsLoading(true);
    dispatch(deletePlantAsync(deviceId, moduleId, position))
      .then(() => navigation.goBack())
      .finally(() => setIsLoading(false));
  }, [deviceId, dispatch, moduleId, navigation, position]);

  // Set delete btn icon on header before painting
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerRight: () => (
        <DeletePlantBtnIcon loading={isLoading} onPress={deletePlant} />
      ),
    });
  }, [navigation, deletePlant, isLoading]);

  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, ShadowStyles.shadow2]}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={getPlantImage(plantId)}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ProgressRing
          progress={80}
          height={windowHeight * 0.3}
          strokeWidth={14}
        />
        <View style={{ position: 'absolute', alignItems: 'center' }}>
          <Text style={{ fontSize: 14, color: '#18191F', fontWeight: '300' }}>
            Ready to harvest in
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#0B7B03' }}>
            6 day
          </Text>
        </View>
      </View>
      <LightGreenBtn
        style={{ marginTop: 'auto' }}
        icon={require('assets/icons/harvest-leaves.png')}
        title="Harvest"
        onPress={() => console.log('Harvest')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#F5F8F5',
  },
  imageContainer: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
});

export default PlantScreen;
