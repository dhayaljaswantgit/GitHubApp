import React from 'react';
import {View, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {colors} from '../utils';

export const Card = ({children, onPress}) => {
  const Container = onPress ? TouchableOpacity : View;
  return (
    <Container onPress={onPress} style={[styles.main]}>
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 10,
    margin: 10,
    backgroundColor: colors.white,
    elevation: 4,
    shadowOffset: {width: 5, height: 5},
    shadowColor: Platform.OS === 'android' ? colors.black : colors.gray,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 5,
  },
});
