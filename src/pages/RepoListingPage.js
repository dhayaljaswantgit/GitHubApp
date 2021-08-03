import React from 'react';
import {Header, RepoListing} from '../components';

export default props => {
  const {username} = props.route.params;
  return (
    <>
      <Header navigation={props.navigation} title="Followers" />
      <RepoListing navigation={props.navigation} username={username} />
    </>
  );
};
