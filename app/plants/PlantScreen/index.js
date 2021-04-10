import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';

import { selectPlant } from 'shared/store/plants/selectors';
import { ShadowStyles } from 'shared/styles';
import { getPlantImage } from 'shared/utilities';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import ProgressRing from './ProgressRing';

const PlantScreen = ({
  route: {
    params: { deviceId, moduleId, plantId },
  },
}) => {
  const plant = useSelector(selectPlant(deviceId, moduleId, plantId));
  const windowHeight = useWindowDimensions().height;

  console.log(plant);

  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, ShadowStyles.shadow2]}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={getPlantImage(plant.plantId)}
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
