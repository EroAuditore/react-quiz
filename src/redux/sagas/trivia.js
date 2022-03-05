import { put, call, all, takeEvery } from 'redux-saga/effects';
import apiCall from '../api';
import { startTrvia, succesLoad, failLoad } from '../reducers/trivia';

// Fetch trivia

export function* loadTrivia() {
  try {
    const result = yield call(apiCall, '', null, null, 'GET');
    yield put(succesLoad(result));
  } catch (error) {
    yield put(failLoad(error));
  }
}

// Watcher
export default function* trivia() {
  yield all([yield takeEvery(startTrvia, loadTrivia)]);
}
