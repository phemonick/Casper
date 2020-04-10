import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  tab: {
    height: 60,
    ...Platform.select({
      android: {elevation: 4},
      ios: {
        shadowColor: 'rgb(134,150,167)',
        shadowOffset: {
          height: -3,
          width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
      },
    }),
  },
});
