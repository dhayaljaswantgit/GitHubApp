import * as types from '../actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import {API} from '../../utils';

export default function* listSaga() {
  yield takeLatest(types.GET_REPO_START, list);
}

function* list(action) {
  yield put({
    type: types.LOADER_START,
  });

  try {
    const result = yield new API().call({
      apiEndPoints: `${action.payload.username.toLowerCase()}/repos`,
    });
    yield put({
      type: types.GET_REPO_SUCCESS,
      payload: {
        username: action.payload.username,
        result: result.data,
      },
    });
    yield put({
      type: types.LOADER_STOP,
    });
  } catch (error) {
    yield put({
      type: types.GET_REPO_FAIL,
      payload: error,
    });
    yield put({
      type: types.LOADER_STOP,
    });
  }
}
