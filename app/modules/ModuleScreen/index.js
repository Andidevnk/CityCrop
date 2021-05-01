import React, { useMemo, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import { selectModule } from 'shared/store/modules/selectors';
import { setModuleMeasurementsInterval } from 'shared/store/modules/actions';
import Measurements from './Measurements';
import GreensGrid from './GreensGrid';
import MicroGreensGrid from './MicroGreensGrid';

const ModuleScreen = ({
  navigation,
  route: {
    params: { deviceId, moduleId },
  },
}) => {
  const module = useSelector(selectModule(deviceId, moduleId));
  const dispatch = useDispatch();

  // Fetch measurements every 10 seconds
  useFocusEffect(
    useCallback(() => {
      const intervalId = dispatch(
        setModuleMeasurementsInterval(deviceId, moduleId)
      );
      return () => clearInterval(intervalId);
    }, [deviceId, dispatch, moduleId])
  );

  const PlantsGrid = useMemo(
    () => (module.tray === 'greens' ? GreensGrid : MicroGreensGrid),
    [module.tray]
  );

  const navigateToPlant = (plant) =>
    navigation.navigate('Plant', {
      deviceId,
      moduleId,
      plant,
    });
  const navigateToPlantCategories = (gridPosition) =>
    navigation.navigate('Plant Categories', {
      // Props for Add Plant screen
      deviceId,
      moduleId,
      gridPosition,
    });

  return (
    <View style={styles.container}>
      <Measurements measurements={module.measurements} />
      <Text style={styles.plantsGridTitle}>Your plants</Text>
      <PlantsGrid
        plants={module.plants}
        onUsedSlotPress={navigateToPlant}
        onEmptySlotPress={navigateToPlantCategories}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 28,
    paddingHorizontal: 20,
    backgroundColor: '#F5F8F5',
  },
  plantsGridTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#18191F',
    marginBottom: 30,
  },
});

export default ModuleScreen;
