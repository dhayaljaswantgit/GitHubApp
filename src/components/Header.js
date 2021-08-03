import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import STYLES from '../styles';
import {colors} from '../utils';

export const Header = ({title, navigation}) => {
  return (
    <View style={styles.main}>
      {navigation && navigation.canGoBack() ? (
        <TouchableOpacity
          style={[styles.iconCommon, styles.icon]}
          onPress={() => navigation && navigation.pop()}>
          <Image
            style={styles.iconImage}
            source={require('../imgs/back.png')}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.defaultView} />
      )}
      <Text style={STYLES.h1}>{title}</Text>

      {navigation && navigation.canGoBack() ? (
        <TouchableOpacity
          style={[styles.iconCommon, styles.iconRight]}
          onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.iconImage}
            source={require('../imgs/home.png')}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.iconCommon, styles.iconRight]}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            style={styles.iconImage}
            source={require('../imgs/profile.png')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.white,
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
  },
  iconCommon: {
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  icon: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  iconRight: {
    paddingRight: 10,
    paddingBottom: 10,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  defaultView: {
    width: 40,
  },
});
