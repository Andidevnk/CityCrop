import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import { useDispatch } from 'react-redux';

import { resetPassword } from 'shared/store/auth/actions';
import useIsMounted from 'shared/hooks/useIsMounted';
import KeyboardDismissArea from 'shared/components/KeyboardDismissArea';
import IconTextInput from 'shared/components/IconTextInput';
import IconButton from 'shared/components/IconButton';
import GreenBtn from 'shared/components/GreenBtn';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const isMounted = useIsMounted();

  const dispatch = useDispatch();

  const sendResetPasswordEmail = () => {
    setLoading(true);
    dispatch(resetPassword(email))
      .then(() => setModalVisible(true))
      .finally(() => setLoading(false));
  };

  const closeModalAndNavigateToLogin = () => {
    setModalVisible(false);
    navigation.navigate('Login');
  };

  return (
    <KeyboardDismissArea>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Forgot password</Text>
          <Text style={styles.subtitle}>
            Fill in your email below and press 'Send'.
          </Text>
        </View>

        {isMounted && ( // Solves the autofill bug
          <IconTextInput
            iconImage={require('assets/icons/mail.png')}
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            onChangeText={(text) => setEmail(text)}
          />
        )}

        <View style={styles.bottomSection}>
          <GreenBtn
            title="Send"
            loading={loading}
            onPress={sendResetPasswordEmail}
          />
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          statusBarTranslucent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <IconButton
                style={styles.closeIcon}
                name="close"
                size={30}
                color="#0B7B03"
                onPress={() => setModalVisible(false)}
              />
              <View style={{ marginTop: 30 }}>
                <Text style={[styles.modalText, { fontWeight: '600' }]}>
                  You are almost done!
                </Text>
                <Text style={[styles.modalText, { marginBottom: 0 }]}>
                  Check your inbox and use the new password we sent you to
                  login.
                </Text>
              </View>
              <GreenBtn
                style={{ marginTop: 50 }}
                title="Go back"
                onPress={closeModalAndNavigateToLogin}
              />
            </View>
          </View>
        </Modal>
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
  titleContainer: {
    marginTop: 100,
    marginBottom: 70,
    alignItems: 'center',
  },
  title: {
    marginBottom: 5,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0B7B03',
  },
  subtitle: {
    fontSize: 16,
    color: '#18191F',
  },
  bottomSection: {
    marginTop: 50,
    paddingHorizontal: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    marginHorizontal: 25,
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeIcon: {
    position: 'absolute',
    top: 18,
    right: 20,
  },
  modalText: {
    marginBottom: 10,
    fontSize: 18,
    color: '#18191F',
  },
});

export default ForgotPasswordScreen;
