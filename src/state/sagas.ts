import { all, fork } from 'redux-saga/effects';

import authSaga from './auth/AuthSaga';
import { watchForFirebaseAuth } from './auth/AuthWatcher';

export function* rootSaga() {
  yield all([fork(authSaga), fork(watchForFirebaseAuth)]);
}
