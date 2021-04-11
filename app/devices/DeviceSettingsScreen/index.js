import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import useFormState from 'shared/hooks/useFormState';
import { updateDeviceAsync } from 'shared/store/devices/actions';
import { selectDevice } from 'shared/store/devices/selectors';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import TimezonesModal from './TimezonesModal';
import WifiSettingsBtn from './WifiSettingsBtn';

const DeviceSettingsScreen = ({
  navigation,
  route: {
    params: { deviceId },
  },
}) => {
  const device = useSelector(selectDevice(deviceId));
  const [formState, setFormState] = useFormState({
    name: device.name,
    timezone: device.timezone,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isTimezoneModalVisible, setIsTimezoneModalVisible] = useState(false);
  const dispatch = useDispatch();

  const navigateToWiFiSettings = () => {
    navigation.navigate('WiFi Settings');
  };

  const updateDevice = () => {
    const { name, timezone } = formState;
    setIsLoading(true);
    dispatch(updateDeviceAsync(deviceId, name, timezone))
      .then(() => navigation.goBack())
      .finally(() => setIsLoading(false));
  };

  const closeTimezonesModal = () => setIsTimezoneModalVisible(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit your device settings</Text>
      <TextInput
        style={[styles.input, { marginBottom: 15 }]}
        placeholder="Name"
        value={formState.name}
        onChangeText={(text) => setFormState({ name: text })}
      />
      <Pressable onPress={() => setIsTimezoneModalVisible(true)}>
        <TextInput
          style={styles.input}
          placeholder="Timezone"
          value={formState.timezone}
          pointerEvents="none"
          editable={false}
        />
      </Pressable>
      <WifiSettingsBtn onPress={navigateToWiFiSettings} />
      <LightGreenBtn
        style={{ marginTop: 'auto' }}
        title="Save"
        loading={isLoading}
        onPress={updateDevice}
      />

      <TimezonesModal
        visible={isTimezoneModalVisible}
        onItemPress={(timezone) => {
          setFormState({ timezone });
          closeTimezonesModal();
        }}
        onOutsidePress={closeTimezonesModal}
        onRequestClose={closeTimezonesModal} // Back button press
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

export default DeviceSettingsScreen;
