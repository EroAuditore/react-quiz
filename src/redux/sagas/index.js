import { all } from 'redux-saga/effects';
import trivia from './trivia';

// all watchers goes here
export default function* rootSaga() {
  yield all([trivia()]);
}
