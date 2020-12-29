import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { register } from 'shared/store/auth/actions';
import useFormState from 'shared/hooks/useFormState';
import KeyboardDismissArea from 'shared/components/KeyboardDismissArea';
import IconTextInput from 'shared/components/IconTextInput';
import GreenBtn from 'shared/components/GreenBtn';
import TouchableText from 'shared/components/TouchableText';
import CityCropBanner from 'shared/components/CityCropBanner';

const RegisterScreen = ({ navigation }) => {
  const [formState, setFormState] = useFormState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();

  const registerUser = () => {
    const [firstName, lastname] = formState.name.split(' ');
    dispatch(
      register(firstName, lastname, formState.email, formState.password)
    );
  };

  return (
    <KeyboardDismissArea>
      <View style={styles.container}>
        <CityCropBanner style={styles.banner} />

        <IconTextInput
          style={styles.input}
          iconImage={require('assets/icons/user.png')}
          placeholder="Name"
          value={formState.name}
          autoCompleteType="name"
          keyboardType="visible-password"
          onChangeText={(text) => setFormState({ name: text })}
        />
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
          style={styles.input}
          iconImage={require('assets/icons/key.png')}
          placeholder="Password"
          value={formState.password}
          autoCompleteType="off"
          secureTextEntry={true}
          onChangeText={(text) => setFormState({ password: text })}
        />
        <IconTextInput
          iconImage={require('assets/icons/key.png')}
          placeholder="Confirm password"
          value={formState.confirmPassword}
          autoCompleteType="off"
          secureTextEntry={true}
          onChangeText={(text) => setFormState({ confirmPassword: text })}
        />

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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F8F5',
  },
  banner: {
    paddingBottom: 45,
  },
  input: {
    marginBottom: 10,
  },
  bottomSection: {
    marginTop: 'auto',
    paddingHorizontal: 15,
  },
  alreadyRegisteredTextContainer: {
    marginTop: 15,
  },
  alreadyRegisteredText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#18191F',
  },
});

export default RegisterScreen;
