import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {colors} from '../utils';

export const Button = ({
  title = 'Button',
  onPress = () => {},
  style,
  disabled,
  textStyle,
}) => {
  const Container = disabled ? View : TouchableOpacity;
  return (
    <Container
      style={[styles.main, style, disabled && styles.disabled]}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabled: {opacity: 0.5},
});
