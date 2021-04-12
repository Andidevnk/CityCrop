import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Linking from 'expo-linking';
import { useDispatch, useSelector } from 'react-redux';

import { selectMe } from 'shared/store/users/selectors';
import { logout } from 'shared/store/auth/actions';
import UserInfo from './UserInfo';
import DrawerItems from './DrawerItems';
import LogoutText from './LogoutText';

const Drawer = ({ state, navigation }) => {
  const { name } = useSelector(selectMe());
  const dispatch = useDispatch();
  const activeRouteIndex = state.index - 1;

  const logoutUser = () => dispatch(logout());

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.userInfoContainer}>
        <UserInfo name={name} />
      </View>
      <View style={styles.drawerContentContainer}>
        <DrawerItems
          activeRouteIndex={activeRouteIndex}
          onRoutePress={(name) => navigation.navigate(name)}
          onLinkPress={(url) => Linking.openURL(url)}
        />
        <LogoutText onPress={logoutUser} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    backgroundColor: 'rgba(190, 190, 190, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  drawerContentContainer: {
    flex: 1,
    marginTop: 5,
    paddingHorizontal: 25,
  },
});

const DrawerComponent = (props) => <Drawer {...props} />;
export default DrawerComponent;
