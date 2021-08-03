import * as types from '../actionTypes';

export const getFollowers = payload => ({
  type: types.GET_FOLLOWERS_START,
  payload,
});
