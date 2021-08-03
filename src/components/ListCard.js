import React from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import {colors} from '../utils';
import {Card} from './Card';
import STYLES from '../styles';

const {width} = Dimensions.get('window');

export const ListCard = ({
  image = null,
  title = '',
  description = '',
  onPress,
}) => {
  return (
    <Card onPress={onPress}>
      <View style={STYLES.flexH}>
        <Image source={{uri: image}} style={styles.img} />
        <View style={styles.right}>
          <View style={[STYLES.flexH, STYLES.centerV]}>
            <Text style={[STYLES.h2, styles.title]}>{title}</Text>
            <Image
              source={require('../imgs/green-tick.png')}
              resizeMode={'contain'}
              style={styles.tickImg}
            />
          </View>
          <Text style={[STYLES.p, styles.text]}>{description}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 60,
    width: 60,
    backgroundColor: colors.gray,
    borderRadius: 40,
    margin: 5,
  },
  right: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  tickImg: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  text: {width: width - 140},
  title: {maxWidth: width - 140},
});
