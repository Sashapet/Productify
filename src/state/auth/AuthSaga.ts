import { call, put, takeLeading } from 'redux-saga/effects';
import { SignUpProps } from '@typings/.';
import { actions, constants, setOnSyncConstants } from '@state/.';
import { authApi } from '@api/.';

function* register(data: { type: string; payload: SignUpProps }) {
  try {
    const { payload } = data;

    yield put(
      actions.app.setOnSync({
        type: setOnSyncConstants.register,
        setOnSync: true,
      }),
    );
    yield call(authApi.register, payload.email, payload.password);
  } catch (e) {
    console.tron.log(e.message);
  } finally {
    yield put(
      actions.app.setOnSync({
        type: setOnSyncConstants.register,
        setOnSync: false,
      }),
    );
  }
}

function* logOut() {
  try {
    yield call(authApi.logOut);
    yield put(
      actions.app.setOnSync({
        type: setOnSyncConstants.logOut,
        setOnSync: true,
      }),
    );
  } catch (e) {
    console.tron.log(e.message);
  } finally {
    yield put(
      actions.app.setOnSync({
        type: setOnSyncConstants.logOut,
        setOnSync: false,
      }),
    );
  }
}

export default function* authSaga() {
  yield takeLeading(constants.auth.REGISTER, register);
  yield takeLeading(constants.auth.LOGOUT, logOut);
}
