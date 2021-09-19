import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { CATEGORIES, PLANTS } from 'shared/constants';
import { addPlantAsync } from 'shared/store/plants/actions';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import ScalableImage from 'shared/components/ScalableImage';

const AddDomeScreen = ({
  navigation,
  route: {
    params: { deviceId, moduleId, plantId, gridPosition },
  },
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const { categoryId } = PLANTS.find((plant) => plant.id === plantId);
  const { type } = CATEGORIES.find((category) => category.id === categoryId);

  const dispatch = useDispatch();
  const addPlant = () => {
    setIsLoading(true);
    dispatch(addPlantAsync(deviceId, moduleId, plantId, gridPosition))
      .then(() => navigation.navigate({ name: 'Module', merge: true }))
      .finally(() => setIsLoading(false));
  };

  return (
    <View style={styles.container}>
      <ScalableImage
        style={{
          height: Dimensions.get('window').height * 0.15,
          marginTop: 40,
        }}
        source={
          type === 'greens'
            ? require('assets/imgs/dome/greens.png')
            : require('assets/imgs/dome/microgreens.png')
        }
        resizeMode="contain"
      />
      <Text style={styles.text}>You should now add the dome!</Text>
      <LightGreenBtn
        style={{ marginTop: 'auto' }}
        title="Start growing"
        loading={isLoading}
        onPress={addPlant}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: '#F5F8F5',
    alignItems: 'center',
  },
  text: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#18191F',
  },
});

export default AddDomeScreen;
