import * as types from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
  repo: {},
  error: null,
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case types.GET_REPO_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_REPO_SUCCESS:
      const {username, result} = actions.payload;
      return {
        ...state,
        loading: false,
        error: null,
        repo: {...state.repo, [username]: result},
      };

    case types.GET_REPO_FAIL:
      return {
        ...state,
        loading: false,
        error: actions.payload.error,
      };

    default:
      return state;
  }
};
