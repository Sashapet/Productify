import { call, put, takeLeading } from 'redux-saga/effects';
import { SignProps } from '@typings/.';
import { actions, constants } from '@state/.';
import { authApi } from '@api/.';

function* register(data: { type: string; payload: SignProps }) {
  try {
    yield put(
      actions.app.setOnSync({
        type: '',
        setOnSync: true,
      }),
    );
    const { payload } = data;

    yield call(authApi.register, payload.email, payload.password);
  } catch (e) {
    console.tron.log(e.message);
  } finally {
    yield put(
      actions.app.setOnSync({
        type: '',
        setOnSync: false,
      }),
    );
  }
}

function* logOut() {
  try {
    yield put(
      actions.app.setOnSync({
        type: '',
        setOnSync: true,
      }),
    );
    yield call(authApi.logOut);
  } catch (e) {
    console.tron.log(e.message);
  } finally {
    yield put(
      actions.app.setOnSync({
        type: '',
        setOnSync: false,
      }),
    );
  }
}

function* login(data: { type: string; payload: SignProps }) {
  try {
    yield put(
      actions.app.setOnSync({
        type: '',
        setOnSync: true,
      }),
    );
    const { payload } = data;
    yield call(authApi.login, payload.email, payload.password);
  } catch (e) {
    console.tron.log(e.message);
  } finally {
    yield put(
      actions.app.setOnSync({
        type: '',
        setOnSync: false,
      }),
    );
  }
}

export default function* authSaga() {
  yield takeLeading(constants.auth.REGISTER, register);
  yield takeLeading(constants.auth.LOGOUT, logOut);
  yield takeLeading(constants.auth.LOGIN, login);
}
