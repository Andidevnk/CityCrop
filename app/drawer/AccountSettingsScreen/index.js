import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import useFormState from 'shared/hooks/useFormState';
import IconTextInput from 'shared/components/IconTextInput';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import ScalableImage from 'shared/components/ScalableImage';
import UserProfileImagePicker from './UserProfileImagePicker';

const AccountSettingsScreen = () => {
  const [formState, setFormState] = useFormState({
    name: '',
    email: '',
    oldPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingTop: 35,
          paddingBottom: 150,
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <UserProfileImagePicker
          style={{ alignSelf: 'center', marginBottom: 30 }}
          onPickImagePress={() => console.log('pick image')}
        />
        <IconTextInput
          style={styles.input}
          placeholder="Name"
          iconImage={require('assets/icons/user.png')}
          value={formState.name}
          onChangeText={(text) => setFormState({ name: text })}
        />
        <IconTextInput
          style={[styles.input, { marginBottom: 0 }]}
          placeholder="Email"
          iconImage={require('assets/icons/mail.png')}
          value={formState.email}
          onChangeText={(text) => setFormState({ email: text })}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 60,
            marginLeft: 26,
            marginBottom: 30,
          }}
        >
          <ScalableImage
            style={{
              width: 20,
              marginRight: 20,
            }}
            source={require('assets/icons/key.png')}
          />
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#0B7B03' }}>
            Change password
          </Text>
        </View>
        <IconTextInput
          style={[styles.input]}
          placeholder="Old password"
          value={formState.oldPassword}
          onChangeText={(text) => setFormState({ oldPassword: text })}
        />
        <IconTextInput
          style={[styles.input]}
          placeholder="New password"
          value={formState.newPassword}
          onChangeText={(text) => setFormState({ newPassword: text })}
        />
        <IconTextInput
          style={[styles.input, { marginBottom: 0 }]}
          placeholder="Confirm password"
          value={formState.newPasswordConfirm}
          onChangeText={(text) => setFormState({ newPasswordConfirm: text })}
        />
      </ScrollView>
      <LightGreenBtn
        style={{ position: 'absolute', bottom: 50 }}
        title="Save"
        onPress={() => console.log('Save')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.1,
    marginBottom: 20,
  },
});

export default AccountSettingsScreen;