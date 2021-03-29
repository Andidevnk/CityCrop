import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';

const UserInfo = ({ name }) => {
  return (
    <>
      <Image
        style={{
          width: 60,
          height: 60,
          marginRight: 15,
        }}
        source={require('assets/imgs/user-profile/user-profile.png')}
        resizeMode="contain"
      />
      <Text style={styles.userInfoText} numberOfLines={1}>
        {name}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  userInfoText: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#18191F',
  },
});

export default UserInfo;
