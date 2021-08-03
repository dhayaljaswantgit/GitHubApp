import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Keyboard} from 'react-native';
import {Button, Header, RepoListing} from '../components';
import STYLES from '../styles';
import {colors} from '../utils';

export default props => {
  const [username, setUsername] = useState('');
  const [searchedValue, setSearchedValue] = useState('');
  const getResult = () => {
    setSearchedValue(username);
    Keyboard.dismiss();
  };
  return (
    <View style={STYLES.main}>
      <Header navigation={props.navigation} title="GitHub App" />
      <View style={[STYLES.flexH, STYLES.centerV, styles.searchUpper]}>
        <TextInput
          placeholder="Enter username"
          onChangeText={setUsername}
          style={[STYLES.input, styles.searchInput]}
        />
        <Button
          disabled={!username}
          title="Submit"
          onPress={getResult}
          style={styles.btn}
        />
      </View>

      {searchedValue === '' && (
        <Text style={styles.error}>Please search data by username</Text>
      )}

      {searchedValue ? (
        <RepoListing
          navigation={props.navigation}
          showFollowerBtn
          username={searchedValue}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchUpper: {marginHorizontal: 30},
  searchInput: {flexGrow: 1, height: 50, fontSize: 25, paddingHorizontal: 10},
  btn: {
    width: 80,
    margin: 10,
    height: 50,
  },
  error: {textAlign: 'center', fontWeight: 'bold', marginTop: 40},
  followersBtnUpper: {alignItems: 'center'},
  followersBtn: {
    width: 160,
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  textStyle: {color: colors.primary},
});
