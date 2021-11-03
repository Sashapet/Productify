import { all, fork } from 'redux-saga/effects';

import authSaga from './app/AuthSaga';

export function* rootSaga() {
  yield all([fork(authSaga)]);
}
