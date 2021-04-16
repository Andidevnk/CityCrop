import React from 'react';

import DrawerItem from './DrawerItem';

const screens = [
  {
    name: 'Account Settings',
    icon: require('assets/icons/user.png'),
  },
  // {
  //   name: 'Notifications',
  //   icon: require('assets/icons/bell.png'),
  // },
];
const links = [
  {
    name: 'Plant Showroom',
    icon: require('assets/icons/plant.png'),
    url: 'https://www.citycrop.io/plant-showroom',
  },
  {
    name: 'Shop',
    icon: require('assets/icons/cart.png'),
    url: 'https://www.citycrop.io/shop',
  },
];

const DrawerItems = ({ activeRouteIndex, onRoutePress, onLinkPress }) => {
  return (
    <>
      {screens.map(({ name, icon }, index) => (
        <DrawerItem
          key={name}
          label={name}
          icon={icon}
          focused={index === activeRouteIndex}
          onPress={() => onRoutePress(name)}
        />
      ))}
      {links.map(({ name, icon, url }) => (
        <DrawerItem
          key={name}
          label={name}
          icon={icon}
          onPress={() => onLinkPress(url)}
        />
      ))}
    </>
  );
};

export default DrawerItems;
