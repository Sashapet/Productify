import { call, fork, takeLatest } from 'redux-saga/effects';

import { constants } from '../constants';

function* helloWorld() {
  yield call(console.tron.log, 'Hello World');
}

export default function* authSaga() {
  yield fork(helloWorld);
}
