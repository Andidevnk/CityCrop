import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';

const UserInfo = ({ name }) => {
  return (
    <>
      <Image
        style={styles.userImage}
        source={require('assets/imgs/user-profile/avatar-placeholder.png')}
        borderRadius={50 / 2} // Android fix
        resizeMode="cover" // Android fix
      />
      <Text style={styles.userInfoText} numberOfLines={1}>
        {name}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  userImage: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderWidth: 1.5,
    borderColor: '#0B7B03',
    borderRadius: 50 / 2,
  },
  userInfoText: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#18191F',
  },
});

export default UserInfo;
