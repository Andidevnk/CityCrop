import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { selectDevice } from 'shared/store/devices/selectors';
import { addModuleAsync } from 'shared/store/modules/actions';
import useFormState from 'shared/hooks/useFormState';
import IconTextInput from 'shared/components/IconTextInput';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import ModuleTypeToggler from '../ModuleSettingsScreen/ModuleTypeToggler';

const AddModuleScreen = ({
  navigation,
  route: {
    params: { deviceId },
  },
}) => {
  const device = useSelector(selectDevice(deviceId));
  const [formState, setFormState] = useFormState({
    name: '',
    serialNumber: '',
    type: 'greens',
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const addModule = () => {
    const { name, serialNumber, type } = formState;
    const nextPosition = device.modules.length;
    setIsLoading(true);
    dispatch(addModuleAsync(deviceId, serialNumber, name, type, nextPosition))
      .then(() => navigation.goBack())
      .finally(() => setIsLoading(false));
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 40 }}>
        <Text style={styles.description}>You’re adding a module to</Text>
        <Text style={styles.deviceName}>{device.name}</Text>
      </View>
      <Text style={styles.inputLabel}>Module Name</Text>
      <IconTextInput
        style={{ marginBottom: 25 }}
        inputContainerStyle={styles.input}
        placeholder="Name"
        value={formState.name}
        onChangeText={(text) => setFormState({ name: text })}
      />
      <Text style={styles.inputLabel}>Serial Number</Text>
      <IconTextInput
        style={{ marginBottom: 25 }}
        inputContainerStyle={styles.input}
        placeholder="Serial Number"
        value={formState.serialNumber}
        onChangeText={(text) => setFormState({ serialNumber: text })}
      />
      <ModuleTypeToggler
        value={formState.type}
        onOptionPress={(type) => setFormState({ type })}
      />
      <LightGreenBtn
        style={{ marginTop: 'auto' }}
        title="Save"
        loading={isLoading}
        onPress={addModule}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
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
