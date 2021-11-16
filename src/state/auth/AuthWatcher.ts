import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { actions } from '@state/actions';
import { eventChannel, EventChannel } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';

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
