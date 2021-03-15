import { StyleSheet } from 'react-native';

const cardStyles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.1,
    marginBottom: 25,
  },
});

export default cardStyles;
