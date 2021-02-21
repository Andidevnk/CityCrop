import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import useArrayToggleState from 'shared/hooks/useArrayToggleState';
import TextStyles from 'shared/styles/text';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import NutrientButton from './NutrientButton';

const nutrients = [
  {
    id: '1',
    name: 'CC 01',
    icon: require('assets/icons/bottle-brown.png'),
    level: 10,
  },
  {
    id: '2',
    name: 'CC 02',
    icon: require('assets/icons/bottle-green.png'),
    level: 24,
  },
  {
    id: '3',
    name: 'CC 03',
    icon: require('assets/icons/bottle-red.png'),
    level: 6,
  },
  {
    id: '4',
    name: 'CC 04',
    icon: require('assets/icons/bottle-black.png'),
    level: 59,
  },
  {
    id: '5',
    name: 'CC 05',
    icon: require('assets/icons/bottle-yellow.png'),
    level: 11,
  },
];

const ReplaceNutrientsScreen = () => {
  const [selectedNutrients, toggleSelectedNutrient] = useArrayToggleState([]);

  const isSelected = (id) => selectedNutrients.includes(id);

  return (
    <View style={styles.container}>
      <View>
        <Text style={[TextStyles.subtitleCenter, { marginBottom: 30 }]}>
          Select nutrients to replace
        </Text>
        {nutrients.map(({ id, name, icon, level }) => (
          <NutrientButton
            style={[styles.nutrientBtn, isSelected(id) && styles.selected]}
            key={id}
            title={name}
            iconSource={icon}
            level={level}
            onPress={() => toggleSelectedNutrient(id)}
          />
        ))}
      </View>
      <LightGreenBtn title="Submit" onPress={() => console.log('btn')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  subtitle: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#18191F',
  },
  nutrientBtn: {
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    marginBottom: 15,
  },
  selected: {
    borderWidth: 1.5,
    borderColor: '#0B7B03',
  },
});

export default ReplaceNutrientsScreen;
