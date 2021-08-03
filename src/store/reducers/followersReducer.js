import * as types from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
  followers: {},
  error: null,
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case types.GET_FOLLOWERS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_FOLLOWERS_SUCCESS:
      const {username, result} = actions.payload;
      return {
        ...state,
        loading: false,
        error: null,
        followers: {...state.followers, [username]: result},
      };

    case types.GET_FOLLOWERS_FAIL:
      return {
        ...state,
        loading: false,
        error: actions.payload.error,
      };

    default:
      return state;
  }
};
