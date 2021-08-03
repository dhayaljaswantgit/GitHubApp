import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header} from '../components';
import STYLES from '../styles';
import {colors} from '../utils';

export default props => {
  const {owner, name, description} = props.route.params.data;
  return (
    <>
      <Header navigation={props.navigation} title="Repository Details" />
      <View style={[STYLES.main, styles.main]}>
        <View style={styles.imgUpper}>
          <Image source={{uri: owner.avatar_url}} style={styles.img} />
        </View>
        <Text style={STYLES.h2}>{name}</Text>
        <Text style={STYLES.p}>{description}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {paddingHorizontal: 20},
  imgUpper: {alignItems: 'center', marginVertical: 20},
  img: {
    height: 80,
    width: 80,
    backgroundColor: colors.gray,
    borderRadius: 40,
  },
});
