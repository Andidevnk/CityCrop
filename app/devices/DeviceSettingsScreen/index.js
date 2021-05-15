import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import moment from 'moment-timezone';

import useFormState from 'shared/hooks/useFormState';
import useBooleanState from 'shared/hooks/useBooleanState';
import {
  deleteDeviceAsync,
  updateDeviceAsync,
} from 'shared/store/devices/actions';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import ListModal from 'shared/components/ListModal';
import PressableTextInput from 'shared/components/PressableTextInput';
import ConfirmationModal from 'shared/components/ConfirmationModal';
import SectionBtn from './SectionBtn';

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
  const [isTimezonesModalVisible, openTimezonesModal, closeTimezonesModal] =
    useBooleanState(false);
  const [
    isConfirmationModalVisible,
    openConfirmationModal,
    closeConfirmationModal,
  ] = useBooleanState(false);

  const dispatch = useDispatch();
  const navigateToWiFiSettings = () => {
    navigation.navigate('WiFi Settings');
  };
  const navigateToWaterWizard = (device) =>
    navigation.navigate('Water Wizard', { deviceId: device.id });
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
      <ConfirmationModal
        visible={isConfirmationModalVisible}
        onAcceptPress={deleteDevice}
        onRequestClose={closeConfirmationModal}
      />

      <View>
        <TextInput
          style={[styles.input, { marginBottom: 15 }]}
          placeholder="Name"
          value={formState.name}
          onChangeText={(text) => setFormState({ name: text })}
        />
        <PressableTextInput
          style={styles.input}
          placeholder="Timezone"
          value={formState.timezone}
          onPress={openTimezonesModal}
        />
        <ListModal
          visible={isTimezonesModalVisible}
          data={moment.tz.names()}
          onItemPress={(timezone) => {
            setFormState({ timezone });
            closeTimezonesModal();
          }}
          onOutsidePress={closeTimezonesModal}
          onRequestClose={closeTimezonesModal}
        />
      </View>

      <View style={{ marginTop: 40 }}>
        <SectionBtn
          style={{ marginBottom: 15 }}
          icon={require('assets/icons/wifi.png')}
          title="WiFi Settings"
          onPress={navigateToWiFiSettings}
        />
        <SectionBtn
          icon={require('assets/icons/watering-can.png')}
          title="Empty Tank"
          onPress={navigateToWaterWizard}
        />
      </View>

      <LightGreenBtn
        style={{ marginTop: 'auto' }}
        title="Save"
        loading={isLoading}
        onPress={updateDevice}
      />
      <Pressable
        style={{ marginTop: 20, alignItems: 'center' }}
        onPress={openConfirmationModal}
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
