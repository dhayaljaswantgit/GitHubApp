import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Header, ListCard} from '../components';
import STYLES from '../styles';
import {getFollowers} from '../store/actions';

export default props => {
  const {username} = props.route.params;
  const dispatch = useDispatch();
  const followers = useSelector(state => state.followersReducer.followers);

  useEffect(() => {
    console.log('username => ', username);

    if (!followers[username]) {
      dispatch(getFollowers({username}));
    }
  }, []);

  return (
    <View style={STYLES.main}>
      <Header navigation={props.navigation} title="Followers" />
      {followers[username] && !followers[username].length && (
        <Text style={styles.error}>
          There is no followers exist for {username}
        </Text>
      )}
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={followers[username] || []}
        renderItem={item => {
          const {login, avatar_url, repos_url} = item.item;
          return (
            <ListCard
              onPress={() =>
                props.navigation.navigate('Repositories', {username: login})
              }
              image={avatar_url}
              title={login}
              description={repos_url}
            />
          );
        }}
      />
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
});
