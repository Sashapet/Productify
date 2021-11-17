import { call, put, takeLeading } from 'redux-saga/effects';
import { SignProps } from '@typings/.';
import { actions, constants, messages } from '@state/.';
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
    yield put(actions.app.firebaseErr(e.message));
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
    yield put(actions.app.firebaseErr(e.message));
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
    yield put(actions.app.firebaseErr(e.message));
  } finally {
    yield put(
      actions.app.setOnSync({
        type: '',
        setOnSync: false,
      }),
    );
  }
}

function* recover(data: { type: string; payload: string }) {
  try {
    yield put(
      actions.app.setOnSync({
        type: '',
        setOnSync: true,
      }),
    );
    //Payload is an email
    const { payload } = data;
    //Recover
    yield call(authApi.recover, payload);
    //Success
    yield put(
      actions.app.success({
        type: messages.recoverPassword,
        text: 'Recover link has been successfully sent to your inbox',
      }),
    );
  } catch (e) {
    //Err
    console.tron.log(e.message);
    yield put(actions.app.firebaseErr(e.message));
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
  yield takeLeading(constants.auth.RECOVER, recover);
}
