import { EventChannel, eventChannel } from 'redux-saga';
import { call, fork, put, take, takeLeading } from 'redux-saga/effects';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
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

const getAuthChannel = async () =>
  eventChannel(emit => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      emit({ user });
    });
    return unsubscribe;
  });

export function* watchForFirebaseAuth() {
  const channel: EventChannel<FirebaseAuthTypes.User> = yield call(
    getAuthChannel,
  );
  try {
    while (true) {
      const { user } = yield take(channel);
      yield put(actions.auth.authUserStateChanged(user));
    }
  } catch (e) {
    console.tron.log(e.message);
  }
}

export default function* authSaga() {
  yield fork(watchForFirebaseAuth);
  yield takeLeading(constants.auth.REGISTER, register);
  yield takeLeading(constants.auth.LOGOUT, logOut);
}
