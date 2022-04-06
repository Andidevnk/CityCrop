import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { arePasswordsValid } from 'shared/utilities';
import { selectMe } from 'shared/store/users/selectors';
import { updateMeAsync } from 'shared/store/users/actions';
import useFormState from 'shared/hooks/useFormState';
import useIsMounted from 'shared/hooks/useIsMounted';
import KeyboardAvoidingScrollView from 'shared/components/KeyboardAvoidingScrollView';
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
  const [arePasswordsInvalid, setArePasswordsInvalid] = useState(false);
  const isMounted = useIsMounted();

  const dispatch = useDispatch();
  const updateMe = () => {
    // Passwords should match
    if (
      !arePasswordsValid(form.newPassword, form.confirmNewPassword, {
        allowEmpty: true,
      })
    ) {
      setArePasswordsInvalid(true);
      return;
    }

    setArePasswordsInvalid(false);
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
    <KeyboardAvoidingScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View>
        <UserProfileImagePicker
          style={styles.userProfileImagePicker}
          onPickImagePress={() => console.log('pick image')}
        />

        {isMounted && ( // Solves the autofill bug
          <>
            <View style={[styles.row, styles.input]}>
              <IconTextInput
                style={styles.column}
                inputContainerStyle={styles.inputContainer}
                placeholder="First name"
                autoCompleteType="name"
                textContentType="givenName"
                value={form.firstName}
                onChangeText={(text) => setForm({ firstName: text })}
              />
              <IconTextInput
                style={[styles.column, { marginRight: 0 }]}
                inputContainerStyle={styles.inputContainer}
                placeholder="Last name"
                autoCompleteType="name"
                textContentType="familyName"
                value={form.lastName}
                onChangeText={(text) => setForm({ lastName: text })}
              />
            </View>
            <IconTextInput
              style={styles.input}
              inputContainerStyle={styles.inputContainer}
              iconImage={require('assets/icons/mail.png')}
              placeholder="Email"
              editable={false}
              value={me.email}
            />
            <IconTextInput
              style={styles.input}
              inputContainerStyle={styles.inputContainer}
              iconImage={require('assets/icons/key.png')}
              placeholder="New password"
              value={form.newPassword}
              secureTextEntry={true}
              disableAutofill
              invalid={arePasswordsInvalid}
              onChangeText={(text) => setForm({ newPassword: text })}
            />
            <IconTextInput
              inputContainerStyle={styles.inputContainer}
              iconImage={require('assets/icons/key.png')}
              placeholder="Confirm new password"
              value={form.confirmNewPassword}
              secureTextEntry={true}
              disableAutofill
              invalid={arePasswordsInvalid}
              errorText="Passwords don't match"
              onChangeText={(text) => setForm({ confirmNewPassword: text })}
            />
          </>
        )}
      </View>
      <LightGreenBtn
        style={{ marginTop: 30 }}
        title="Download Manual"
        loading={isLoading}
        //onPress={updateMe}
      />
      <LightGreenBtn
        style={{ marginTop: 30 }}
        title="Save"
        loading={isLoading}
        onPress={updateMe}
      />
    </KeyboardAvoidingScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    padding: 20,
    justifyContent: 'space-between',
  },
  userProfileImagePicker: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  input: {
    marginBottom: 10,
  },
  inputContainer: {
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.1,
  },
});

export default AccountSettingsScreen;
