import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { selectDevice } from 'shared/store/devices/selectors';
import { addModuleAsync } from 'shared/store/modules/actions';
import useFormState from 'shared/hooks/useFormState';
import IconTextInput from 'shared/components/IconTextInput';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import TraySelector from 'shared/components/TraySelector';
import KeyboardDismissArea from 'shared/components/KeyboardDismissArea';
import KeyboardAvoidingScrollView from 'shared/components/KeyboardAvoidingScrollView';

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
    <KeyboardAvoidingScrollView>
      <View style={styles.container}>
        <View style={{ marginBottom: 40 }}>
          <Text style={styles.description}>You’re adding a module to</Text>
          <Text style={styles.deviceName}>{device.name}</Text>
        </View>
        <Text style={styles.inputLabel}>Module Name</Text>
        <IconTextInput
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          placeholder="Name"
          value={formState.name}
          onChangeText={(text) => setFormState({ name: text })}
        />
        <Text style={styles.inputLabel}>Serial Number</Text>
        <IconTextInput
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          placeholder="Serial Number"
          value={formState.serialNumber}
          onChangeText={(text) => setFormState({ serialNumber: text })}
        />
        <Text style={styles.inputLabel}>Choose Your Tray</Text>
        <TraySelector
          style={{ marginBottom: 30 }}
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
    </KeyboardAvoidingScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    marginBottom: 25,
  },
  inputContainer: {
    borderRadius: 15,
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
