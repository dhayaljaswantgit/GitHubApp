import * as types from '../actionTypes';

export const getRepo = payload => ({
  type: types.GET_REPO_START,
  payload,
});
