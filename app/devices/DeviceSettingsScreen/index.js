import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import moment from 'moment-timezone';

import useFormState from 'shared/hooks/useFormState';
import {
  deleteDeviceAsync,
  updateDeviceAsync,
} from 'shared/store/devices/actions';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import ListModal from 'shared/components/ListModal';
import WifiSettingsBtn from './WifiSettingsBtn';

const DeviceSettingsScreen = ({
  navigation,
  route: {
    params: { device },
  },
}) => {
  const [formState, setFormState] = useFormState({
    name: device.name,
    timezone: device.timezone,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isTimezonesModalVisible, setIsTimezonesModalVisible] = useState(false);

  const dispatch = useDispatch();
  const closeTimezonesModal = () => setIsTimezonesModalVisible(false);
  const navigateToWiFiSettings = () => {
    navigation.navigate('WiFi Settings');
  };
  const updateDevice = () => {
    const { name, timezone } = formState;
    setIsLoading(true);
    dispatch(updateDeviceAsync(device.id, name, timezone))
      .then(() => navigation.goBack())
      .finally(() => setIsLoading(false));
  };
  const deleteDevice = () =>
    dispatch(deleteDeviceAsync(device.id)).then(() => navigation.goBack());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit your device settings</Text>

      <View>
        <TextInput
          style={[styles.input, { marginBottom: 15 }]}
          placeholder="Name"
          value={formState.name}
          onChangeText={(text) => setFormState({ name: text })}
        />
        <Pressable onPress={() => setIsTimezonesModalVisible(true)}>
          <TextInput
            style={styles.input}
            placeholder="Timezone"
            value={formState.timezone}
            pointerEvents="none"
            editable={false}
          />
        </Pressable>
        <ListModal
          visible={isTimezonesModalVisible}
          data={moment.tz.names()}
          onItemPress={(timezone) => {
            setFormState({ timezone });
            closeTimezonesModal();
          }}
          onOutsidePress={closeTimezonesModal}
          onRequestClose={closeTimezonesModal} // Back button press
        />
      </View>

      <WifiSettingsBtn onPress={navigateToWiFiSettings} />

      <LightGreenBtn
        style={{ marginTop: 'auto' }}
        title="Save"
        loading={isLoading}
        onPress={updateDevice}
      />
      <Pressable
        style={{ marginTop: 20, alignItems: 'center' }}
        onPress={deleteDevice}
      >
        <Text style={{ fontSize: 16, color: 'red' }}>Delete</Text>
      </Pressable>
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
