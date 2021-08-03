import {StyleSheet} from 'react-native';
import {colors} from '../utils';

export default StyleSheet.create({
  main: {flex: 1},
  flexH: {flexDirection: 'row'},
  flexV: {flexDirection: 'column'},
  centerV: {alignItems: 'center'},
  h1: {
    color: colors.primary,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    // marginVertical: 10,
  },
  h2: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  p: {color: colors.text, paddingTop: 5},
  input: {borderColor: colors.primary, borderWidth: 1, borderRadius: 5},
  btn: {backgroundColor: colors.primary},
});
