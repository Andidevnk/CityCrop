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
import { getPlant, getPlantImage } from 'shared/utilities';
import useBooleanState from 'shared/hooks/useBooleanState';
import { deletePlantAsync } from 'shared/store/plants/actions';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import ConfirmationModal from 'shared/components/ConfirmationModal';
import ProgressRing from './ProgressRing';
import DeletePlantBtnIcon from './DeletePlantBtnIcon';

const dateDiffInDays = (date1, date2) => {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  return Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));
};

const PlantScreen = ({
  navigation,
  route: {
    params: { deviceId, moduleId, plant },
  },
}) => {
  const { plantId, position } = plant;
  const windowHeight = useWindowDimensions().height;
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isHarvestLoading, setIsHarvestLoading] = useState(false);
  const [
    isConfirmationModalVisible,
    openConfirmationModal,
    closeConfirmationModal,
  ] = useBooleanState(false);

  const dispatch = useDispatch();
  const deletePlant = useCallback(() => {
    setIsDeleteLoading(true);
    dispatch(deletePlantAsync(deviceId, moduleId, position))
      .then(() => navigation.goBack())
      .finally(() => setIsDeleteLoading(false));
  }, [deviceId, dispatch, moduleId, navigation, position]);
  const harvestPlant = () => {
    setIsHarvestLoading(true);
    dispatch(deletePlantAsync(deviceId, moduleId, position))
      .then(() => navigation.goBack())
      .finally(() => setIsHarvestLoading(false));
  };

  // Set delete btn icon on header before painting
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerRight: () => (
        <DeletePlantBtnIcon
          loading={isDeleteLoading}
          onPress={openConfirmationModal}
        />
      ),
    });
  }, [navigation, isDeleteLoading, openConfirmationModal]);

  const daysSincePlanted = dateDiffInDays(
    new Date(),
    new Date(plant.planted_at)
  );
  const harvestDuration = getPlant(plantId).duration;
  const daysUntilHarvest = harvestDuration - daysSincePlanted;
  const progressPercentage =
    daysUntilHarvest > 0
      ? ((harvestDuration - daysUntilHarvest) / harvestDuration) * 100
      : 100;

  return (
    <View style={styles.container}>
      <ConfirmationModal
        visible={isConfirmationModalVisible}
        onAcceptPress={deletePlant}
        onRequestClose={closeConfirmationModal}
      />

      <View style={[styles.imageContainer, ShadowStyles.shadow2]}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={getPlantImage(plantId)}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ProgressRing
          progress={progressPercentage}
          height={windowHeight * 0.3}
          strokeWidth={14}
        />
        <View style={{ position: 'absolute', alignItems: 'center' }}>
          {daysUntilHarvest > 0 ? (
            <>
              <Text
                style={{ fontSize: 14, color: '#18191F', fontWeight: '300' }}
              >
                Ready to harvest in
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: 'bold', color: '#0B7B03' }}
              >
                {daysUntilHarvest} days
              </Text>
            </>
          ) : (
            <Text
              style={{ fontSize: 16, fontWeight: 'bold', color: '#0B7B03' }}
            >
              Ready to harvest
            </Text>
          )}
        </View>
      </View>
      <LightGreenBtn
        style={{ height: 60, marginTop: 'auto' }}
        icon={require('assets/icons/harvest-leaves.png')}
        title="Harvest"
        loading={isHarvestLoading}
        onPress={harvestPlant}
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
