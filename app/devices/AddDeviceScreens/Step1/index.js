import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import moment from 'moment-timezone';

import useFormState from 'shared/hooks/useFormState';
import { addDeviceAsync } from 'shared/store/devices/actions';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import ListModal from 'shared/components/ListModal';
import KeyboardDismissArea from 'shared/components/KeyboardDismissArea';

const Step1 = ({ navigation }) => {
  const [form, setForm] = useFormState({
    name: '',
    timezone: moment.tz.guess(),
  });
  const [isTimezoneModalVisible, setIsTimezoneModalVisible] = useState(false);

  const dispatch = useDispatch();
  const closeTimezonesModal = () => setIsTimezoneModalVisible(false);
  const createDeviceAndNavigateToStep2 = () =>
    dispatch(addDeviceAsync(form.name, form.timezone)).then(() =>
      navigation.navigate('Add New Device - Step 2')
    );

  return (
    <KeyboardDismissArea>
      <View style={styles.container}>
        <Text style={styles.title}>Step 1</Text>
        <Text style={styles.subtitle}>
          Name your device and select your timezone
        </Text>

        <View>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            placeholder="Name"
            value={form.name}
            onChangeText={(text) => setForm({ name: text })}
          />
          <Pressable onPress={() => setIsTimezoneModalVisible(true)}>
            <TextInput
              style={styles.input}
              placeholder="Timezone"
              value={form.timezone}
              pointerEvents="none"
              editable={false}
            />
          </Pressable>
          <ListModal
            visible={isTimezoneModalVisible}
            data={moment.tz.names()}
            onItemPress={(timezone) => {
              setForm({ timezone });
              closeTimezonesModal();
            }}
            onOutsidePress={closeTimezonesModal}
            onRequestClose={closeTimezonesModal} // Back button press
          />
        </View>

        <LightGreenBtn
          style={{ marginTop: 'auto' }}
          title="Next"
          onPress={createDeviceAndNavigateToStep2}
        />
      </View>
    </KeyboardDismissArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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

export default Step1;
