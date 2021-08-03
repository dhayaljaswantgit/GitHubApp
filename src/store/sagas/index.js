import {fork, all} from 'redux-saga/effects';
import repoSaga from './repoSaga';
import followersSaga from './followersSaga';

export default function* rootSaga() {
  yield all([fork(repoSaga), fork(followersSaga)]);
}
