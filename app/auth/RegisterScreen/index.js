import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useDispatch } from 'react-redux';

import { isEmailValid, arePasswordsValid } from 'shared/utilities';
import { register } from 'shared/store/auth/actions';
import useFormState from 'shared/hooks/useFormState';
import useIsMounted from 'shared/hooks/useIsMounted';
import KeyboardDismissArea from 'shared/components/KeyboardDismissArea';
import IconTextInput from 'shared/components/IconTextInput';
import GreenBtn from 'shared/components/GreenBtn';
import TouchableText from 'shared/components/TouchableText';
import CityCropBanner from 'shared/components/CityCropBanner';
import useShakeAnimation from './useShakeAnimation';

const getInvalidFormInputs = (form) => [
  ...(!isEmailValid(form.email) ? ['email'] : []),
  ...(!arePasswordsValid(form.password, form.confirmPassword)
    ? ['password', 'confirmPassword']
    : []),
];

const RegisterScreen = ({ navigation }) => {
  const [form, setForm] = useFormState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [invalidInputs, setInvalidInputs] = useState([]);
  const headerHeight = useHeaderHeight();
  const isMounted = useIsMounted();

  const [shakeEmailInput, shakeEmailAnimatedStyle] = useShakeAnimation();
  const [shakePasswordInput, shakePasswordAnimatedStyle] = useShakeAnimation();
  const [shakeConfirmPasswordInput, shakeConfirmPasswordAnimatedStyle] =
    useShakeAnimation();

  const dispatch = useDispatch();
  const shakeInvalidInputs = (invalidInputIds) => {
    if (invalidInputIds.includes('email')) shakeEmailInput();
    if (invalidInputIds.includes('password')) shakePasswordInput();
    if (invalidInputIds.includes('confirmPassword'))
      shakeConfirmPasswordInput();
  };
  const registerUser = () => {
    const invalidInputIds = getInvalidFormInputs(form);

    setInvalidInputs(invalidInputIds);

    // Form is invalid, shake inputs and return
    if (invalidInputIds.length > 0) {
      shakeInvalidInputs(invalidInputIds);
      return;
    }

    dispatch(
      register(form.firstName, form.lastName, form.email, form.password)
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <KeyboardDismissArea>
        <View style={styles.container}>
          <CityCropBanner
            style={[styles.banner, { marginTop: headerHeight }]}
          />

          {isMounted && ( // Solves the autofill bug
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <IconTextInput
                  style={[styles.input, { flex: 1, marginRight: 10 }]}
                  placeholder="First name"
                  autoCompleteType="name"
                  textContentType="givenName"
                  value={form.firstName}
                  onChangeText={(text) => setForm({ firstName: text })}
                />
                <IconTextInput
                  style={[styles.input, { flex: 1 }]}
                  placeholder="Last name"
                  autoCompleteType="name"
                  textContentType="familyName"
                  value={form.lastName}
                  onChangeText={(text) => setForm({ lastName: text })}
                />
              </View>

              <IconTextInput
                style={styles.input}
                inputContainerStyle={shakeEmailAnimatedStyle}
                placeholder="Email"
                value={form.email}
                keyboardType="email-address"
                autoCapitalize="none"
                disableAutofill
                invalid={invalidInputs.includes('email')}
                errorText="Email is not valid"
                onChangeText={(text) => setForm({ email: text })}
              />

              <IconTextInput
                style={styles.input}
                inputContainerStyle={shakePasswordAnimatedStyle}
                placeholder="Password"
                value={form.password}
                secureTextEntry={true}
                disableAutofill
                invalid={invalidInputs.includes('password')}
                onChangeText={(text) => setForm({ password: text })}
              />
              <IconTextInput
                inputContainerStyle={shakeConfirmPasswordAnimatedStyle}
                placeholder="Confirm password"
                value={form.confirmPassword}
                secureTextEntry={true}
                disableAutofill
                invalid={invalidInputs.includes('confirmPassword')}
                errorText="Passwords don't match or empty"
                onChangeText={(text) => setForm({ confirmPassword: text })}
              />
            </View>
          )}

          <View style={styles.bottomSection}>
            <GreenBtn title="Signup" onPress={registerUser} />
            <TouchableText
              style={styles.alreadyRegisteredTextContainer}
              textStyle={styles.alreadyRegisteredText}
              onPress={() => navigation.navigate('Login')}
            >
              Already a CityCropper?
            </TouchableText>
          </View>
        </View>
      </KeyboardDismissArea>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  banner: {
    marginBottom: 30,
    height: '7%',
  },
  input: {
    marginBottom: 10,
  },
  bottomSection: {
    marginTop: 30,
    paddingHorizontal: 15,
  },
  alreadyRegisteredTextContainer: {
    alignSelf: 'center',
    marginTop: 15,
  },
  alreadyRegisteredText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#18191F',
  },
});

export default RegisterScreen;
