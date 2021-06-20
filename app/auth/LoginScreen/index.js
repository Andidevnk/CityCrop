import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import useIsMounted from 'shared/hooks/useIsMounted';
import { login } from 'shared/store/auth/actions';
import useFormState from 'shared/hooks/useFormState';
import KeyboardDismissArea from 'shared/components/KeyboardDismissArea';
import IconTextInput from 'shared/components/IconTextInput';
import GreenBtn from 'shared/components/GreenBtn';
import TouchableText from 'shared/components/TouchableText';
import TouchableTextIcon from 'shared/components/TouchableTextIcon';
import CityCropBanner from 'shared/components/CityCropBanner';

function LoginScreen({ navigation }) {
  const [formState, setFormState] = useFormState({
    email: '',
    password: '',
  });
  const isMounted = useIsMounted();

  const dispatch = useDispatch();

  const loginUser = () => {
    dispatch(login(formState.email, formState.password));
  };

  return (
    <KeyboardDismissArea>
      <View style={styles.container}>
        <CityCropBanner />

        {isMounted && ( // Solves the autofill bug
          <>
            <IconTextInput
              style={styles.input}
              iconImage={require('assets/icons/mail.png')}
              placeholder="Email"
              value={formState.email}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCompleteType="email"
              onChangeText={(text) => setFormState({ email: text })}
            />
            <IconTextInput
              iconImage={require('assets/icons/key.png')}
              placeholder="Password"
              value={formState.password}
              autoCompleteType="password"
              secureTextEntry={true}
              onChangeText={(text) => setFormState({ password: text })}
            />
          </>
        )}

        <View style={styles.loginButtonContainer}>
          <GreenBtn title="Login" onPress={loginUser} />
        </View>
        <TouchableText
          style={styles.forgotPasswordTextContainer}
          textStyle={styles.forgotPasswordText}
          onPress={() => navigation.navigate('Forgot Password')}
        >
          Forgot password?
        </TouchableText>

        <View style={styles.registerSectionContainer}>
          <Text style={styles.registerText}>Not a CityCropper yet?</Text>
          <TouchableTextIcon
            style={styles.registerCtaTextContainer}
            textStyle={styles.registerCtaText}
            icon="chevron-forward"
            onPress={() => navigation.navigate('Register')}
          >
            Register here
          </TouchableTextIcon>
        </View>
      </View>
    </KeyboardDismissArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F8F5',
  },
  input: {
    marginBottom: 10,
  },
  loginButtonContainer: {
    marginTop: 60,
    paddingHorizontal: 15,
  },
  forgotPasswordTextContainer: {
    marginTop: 15,
  },
  forgotPasswordText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#18191F',
  },
  registerSectionContainer: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
    color: '#18191F',
  },
  registerCtaTextContainer: {
    marginTop: 10,
    paddingLeft: 10,
  },
  registerCtaText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0B7B03',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

export default LoginScreen;
