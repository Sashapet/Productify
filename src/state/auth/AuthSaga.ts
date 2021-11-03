import { EventChannel, eventChannel } from 'redux-saga';
import { call, fork, put, take } from 'redux-saga/effects';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';

// import { constants } from '../constants';
import { actions } from '../actions';

// const usersChannel = async (uid: string) => {
//   const db = database().ref(`users/${uid}`);
//   return eventChannel(emit => {
//     db.on(
//       'value',
//       snapshot => {
//         emit({ user: snapshot.val() });
//       },
//       errorObject => {
//         console.log(errorObject);
//       },
//     );
//     return () => db.off();
//   });
// };

// export function* watchUser(uid: string) {
//   const channel: EventChannel<IUserProps> = yield call(usersChannel, uid);
//   try {
//     while (true) {
//       const { user } = yield take(channel);
//       yield put(actions.auth.updateUserInfo(user));
//     }
//   } catch (e) {
//     console.tron.log(e.message);
//   }
// }

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
      // if (userState) {
      //   yield fork(watchUser, userState.uid);
      // }
    }
  } catch (e) {
    console.tron.log(e.message);
  }
}

export default function* authSaga() {
  yield fork(watchForFirebaseAuth);
}
