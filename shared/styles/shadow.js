import { StyleSheet } from 'react-native';

const ShadowStyles = StyleSheet.create({
  shadow1: {
    elevation: 1,
    shadowColor: '#000000',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.08,
  },
  shadow2: {
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.15,
  },
});

export default ShadowStyles;
