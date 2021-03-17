import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import useFormState from 'shared/hooks/useFormState';
import IconTextInput from 'shared/components/IconTextInput';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import ToggleButtons from './ToggleButtons';

const AddModuleScreen = ({ route }) => {
  const { device } = route.params;
  const [formState, setFormState] = useFormState({
    name: '',
    serialNumber: '',
    plantsGrid: 'microgreens',
  });

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 40 }}>
        <Text style={styles.description}>You’re adding a module to</Text>
        <Text style={styles.deviceName}>{device.name}</Text>
      </View>
      <Text style={styles.inputLabel}>Module Name</Text>
      <IconTextInput
        style={styles.input}
        placeholder="Name"
        value={formState.name}
        onChangeText={(text) => setFormState({ name: text })}
      />
      <Text style={styles.inputLabel}>Serial Number</Text>
      <IconTextInput
        style={styles.input}
        placeholder="Serial Number"
        value={formState.serialNumber}
        onChangeText={(text) => setFormState({ serialNumber: text })}
      />
      <ToggleButtons
        selection={formState.plantsGrid}
        onPress={(selection) => setFormState({ plantsGrid: selection })}
      />
      <LightGreenBtn
        style={{ position: 'absolute', bottom: 50 }}
        title="Save"
        onPress={() => console.log('Save')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#F5F8F5',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#18191F',
  },
  deviceName: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#18191F',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#18191F',
    marginBottom: 16,
  },
  input: {
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginBottom: 25,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
  saveBtn: {
    width: '90%',
    marginTop: 'auto',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 80,
    backgroundColor: '#59C901',
    borderRadius: 27,
  },
  saveBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default AddModuleScreen;
