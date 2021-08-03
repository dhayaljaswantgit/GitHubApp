import {combineReducers} from 'redux';
import loaderReducer from './loaderReducer';
import repoReducer from './repoReducer';
import followersReducer from './followersReducer';

export default combineReducers({
  loaderReducer,
  repoReducer,
  followersReducer,
});
