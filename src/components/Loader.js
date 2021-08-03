import React from 'react';
import {useSelector} from 'react-redux';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';

export const Loader = () => {
  const loading = useSelector(state => state.loaderReducer.loading);

  if (!loading) {
    return null;
  }
  return (
    <View style={styles.main}>
      <ActivityIndicator color="#fff" size="large" />
    </View>
  );
};

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    height,
    width,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
});
