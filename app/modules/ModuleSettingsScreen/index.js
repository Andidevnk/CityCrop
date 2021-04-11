import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import useFormState from 'shared/hooks/useFormState';
import { selectModule } from 'shared/store/modules/selectors';
import { updateModuleAsync } from 'shared/store/modules/actions';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import ModuleTypeToggler from './ModuleTypeToggler';

const ModuleSettingsScreen = ({
  navigation,
  route: {
    params: { deviceId, moduleId },
  },
}) => {
  const module = useSelector(selectModule(deviceId, moduleId));
  const [formState, setFormState] = useFormState({
    name: module.name,
    serialNumber: module.serialNumber,
    type: module.tray,
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const updateModule = () => {
    const { name, type } = formState;
    setIsLoading(true);
    dispatch(updateModuleAsync(moduleId, name, type))
      .then(() => navigation.goBack())
      .finally(() => setIsLoading(false));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit your module settings</Text>
      <TextInput
        style={[styles.input, { marginBottom: 15 }]}
        placeholder="Name"
        value={formState.name}
        onChangeText={(text) => setFormState({ name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Serial Number"
        value={formState.serialNumber}
        editable={false}
      />
      <ModuleTypeToggler
        style={{ marginTop: 50 }}
        value={formState.type}
        onOptionPress={(type) => setFormState({ type })}
      />
      <LightGreenBtn
        style={{ marginTop: 'auto' }}
        title="Save"
        loading={isLoading}
        onPress={updateModule}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#18191F',
  },
  input: {
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      height: 1,
    },
    shadowOpacity: 0.1,
  },
});

export default ModuleSettingsScreen;
