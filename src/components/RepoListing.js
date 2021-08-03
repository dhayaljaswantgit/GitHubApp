import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Button, ListCard} from '.';
import STYLES from '../styles';
import {getRepo} from '../store/actions';
import {colors} from '../utils';

export const RepoListing = props => {
  const {username, showFollowerBtn = false} = props;
  const dispatch = useDispatch();
  const repositories = useSelector(state => state.repoReducer.repo);

  useEffect(() => {
    if (!repositories[username]) {
      dispatch(getRepo({username}));
    }
  }, [username]);

  if (!repositories[username]) {
    return null;
  }
  return (
    <View style={STYLES.main}>
      {!repositories[username].length ? (
        <Text style={styles.error}>There is no data exist for {username}</Text>
      ) : (
        <>
          {showFollowerBtn && (
            <View style={styles.followersBtnUpper}>
              <Button
                style={styles.followersBtn}
                textStyle={styles.textStyle}
                onPress={() =>
                  props.navigation.navigate('Followers', {
                    username,
                  })
                }
                title="Show Followers"
              />
            </View>
          )}
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={repositories[username] || []}
            renderItem={item => {
              const {owner, name, description} = item.item;
              return (
                <ListCard
                  onPress={() =>
                    props.navigation.navigate('Details', {data: item.item})
                  }
                  image={owner.avatar_url}
                  title={name}
                  description={description}
                />
              );
            }}
          />
        </>
      )}
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
