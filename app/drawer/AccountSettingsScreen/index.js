import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { arePasswordsValid } from 'shared/utilities';
import { selectMe } from 'shared/store/users/selectors';
import { updateMeAsync } from 'shared/store/users/actions';
import useFormState from 'shared/hooks/useFormState';
import IconTextInput from 'shared/components/IconTextInput';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import UserProfileImagePicker from './UserProfileImagePicker';

const AccountSettingsScreen = () => {
  const me = useSelector(selectMe());
  const [form, setForm] = useFormState({
    firstName: me.name,
    lastName: me.surname,
    newPassword: '',
    confirmNewPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPasswordsErrorText, setShowPasswordsErrorText] = useState(false);

  const dispatch = useDispatch();

  const updateMe = () => {
    // Passwords should match
    if (
      !arePasswordsValid(form.newPassword, form.confirmNewPassword, {
        allowEmpty: true,
      })
    ) {
      setShowPasswordsErrorText(true);
      return;
    }

    setShowPasswordsErrorText(false);
    setIsLoading(true);
    dispatch(
      updateMeAsync({
        name: form.firstName,
        surname: form.lastName,
        // If password is non-empty, update it
        ...(form.newPassword.length > 0 && {
          password: form.newPassword,
        }),
      })
    ).finally(() => setIsLoading(false));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingBottom: 40,
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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <IconTextInput
            style={{ flex: 1, marginRight: 10 }}
            inputContainerStyle={styles.input}
            placeholder="First name"
            autoCompleteType="name"
            textContentType="givenName"
            value={form.firstName}
            onChangeText={(text) => setForm({ firstName: text })}
          />
          <IconTextInput
            style={{ flex: 1 }}
            inputContainerStyle={styles.input}
            placeholder="Last name"
            autoCompleteType="name"
            textContentType="familyName"
            value={form.lastName}
            onChangeText={(text) => setForm({ lastName: text })}
          />
        </View>
        <IconTextInput
          inputContainerStyle={styles.input}
          iconImage={require('assets/icons/mail.png')}
          placeholder="Email"
          editable={false}
          value={me.email}
        />
        <IconTextInput
          inputContainerStyle={styles.input}
          iconImage={require('assets/icons/key.png')}
          placeholder="New password"
          secureTextEntry={true}
          value={form.newPassword}
          onChangeText={(text) => setForm({ newPassword: text })}
        />
        <IconTextInput
          inputContainerStyle={[styles.input, { marginBottom: 0 }]}
          iconImage={require('assets/icons/key.png')}
          placeholder="Confirm new password"
          secureTextEntry={true}
          value={form.confirmNewPassword}
          onChangeText={(text) => setForm({ confirmNewPassword: text })}
        />
        {showPasswordsErrorText && (
          <Text style={{ marginTop: 5, marginLeft: 10, color: 'red' }}>
            Passwords should match
          </Text>
        )}
      </ScrollView>
      <LightGreenBtn title="Save" loading={isLoading} onPress={updateMe} />
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
