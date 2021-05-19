import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { addNutrientsAsync } from 'shared/store/water-tank/actions';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import ScalableImage from 'shared/components/ScalableImage';

const Step3 = ({
  navigation,
  route: {
    params: { deviceId },
  },
}) => {
  const windowHeight = useWindowDimensions().height;
  const dispatch = useDispatch();

  const addNutrients = () =>
    dispatch(addNutrientsAsync(deviceId)).then(() =>
      navigation.navigate('Devices')
    );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Step 3</Text>
      <Text style={styles.subtitle}>How to add new water</Text>
      <ScalableImage
        style={[styles.image, { height: windowHeight * 0.35 }]}
        source={require('assets/imgs/water-tank/step-3.gif')}
      />
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.listNumber}>1.</Text>
          <Text style={styles.listItemText}>Open the cap</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listNumber}>2.</Text>
          <Text style={styles.listItemText}>
            Add 8lt of fresh water for your plants
          </Text>
        </View>
      </View>
      <LightGreenBtn
        style={{ marginTop: 'auto' }}
        title="Done!"
        onPress={addNutrients}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    backgroundColor: '#FFFFFF',
  },
  title: {
    marginBottom: 5,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#59C901',
  },
  subtitle: {
    marginBottom: 30,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#18191F',
  },
  image: {
    alignSelf: 'center',
    marginBottom: 30,
    borderRadius: 15,
    overlayColor: '#FFFFFF',
  },
  listContainer: {
    marginBottom: 30,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  listNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#59C901',
    marginRight: 5,
  },
  listItemText: {
    fontSize: 16,
    color: '#18191F',
    flex: 1,
  },
  buttonsContainer: {
    paddingHorizontal: 5,
  },
});

export default Step3;
