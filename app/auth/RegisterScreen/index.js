import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { register } from 'shared/store/auth/actions';
import useFormState from 'shared/hooks/useFormState';
import useIsMounted from 'shared/hooks/useIsMounted';
import KeyboardDismissArea from 'shared/components/KeyboardDismissArea';
import IconTextInput from 'shared/components/IconTextInput';
import GreenBtn from 'shared/components/GreenBtn';
import TouchableText from 'shared/components/TouchableText';
import CityCropBanner from 'shared/components/CityCropBanner';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const AnimatedIconTextInput = Animated.createAnimatedComponent(IconTextInput);
const TIMING_ANIMATION_CONFIG = { duration: 60 };

const RegisterScreen = ({ navigation }) => {
  const [form, setForm] = useFormState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [arePasswordsInvalid, setArePasswordsInvalid] = useState(false);
  const isMounted = useIsMounted();

  // Shake animation
  const translateX = useSharedValue(0);
  const calcShakeAnimatedStyle = () => {
    'worklet';
    return {
      transform: [{ translateX: translateX.value }],
    };
  };
  const shakeAnimatedStyle = useAnimatedStyle(calcShakeAnimatedStyle);
  const shakeAnimatedStyle2 = useAnimatedStyle(calcShakeAnimatedStyle);
  const shakePasswordInputs = () => {
    translateX.value = withSequence(
      withTiming(-4, TIMING_ANIMATION_CONFIG),
      withRepeat(withTiming(4, TIMING_ANIMATION_CONFIG), 8, true),
      withTiming(0, TIMING_ANIMATION_CONFIG)
    );
  };

  const dispatch = useDispatch();
  const registerUser = () => {
    // Password should be non-empty and match with confirm password
    if (form.password.length <= 0 || form.password !== form.confirmPassword) {
      setArePasswordsInvalid(true);
      shakePasswordInputs();
      return;
    }

    dispatch(
      register(form.firstName, form.lastName, form.email, form.password)
    );
  };

  return (
    <KeyboardDismissArea>
      <View style={styles.container}>
        <CityCropBanner style={styles.banner} />

        {isMounted && ( // Solves the autofill bug
          <>
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
              placeholder="Email"
              value={form.email}
              keyboardType="email-address"
              autoCapitalize="none"
              disableAutofill
              onChangeText={(text) => setForm({ email: text })}
            />
            <AnimatedIconTextInput
              style={[styles.input, shakeAnimatedStyle]}
              placeholder="Password"
              value={form.password}
              invalid={arePasswordsInvalid}
              secureTextEntry={true}
              disableAutofill
              onChangeText={(text) => setForm({ password: text })}
            />
            <AnimatedIconTextInput
              style={shakeAnimatedStyle2}
              placeholder="Confirm password"
              value={form.confirmPassword}
              invalid={arePasswordsInvalid}
              secureTextEntry={true}
              disableAutofill
              onChangeText={(text) => setForm({ confirmPassword: text })}
            />
            {arePasswordsInvalid && (
              <Text style={{ marginTop: 5, marginLeft: 10, color: 'red' }}>
                Passwords should match and not be empty
              </Text>
            )}
          </>
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
