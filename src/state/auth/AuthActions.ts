import { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { constants } from '../constants';

const authUserStateChanged = (user: FirebaseAuthTypes.User) => ({
  type: constants.app.AUTH_USER_STATE_CHANGED,
  user,
});

export const authActions = {
  authUserStateChanged,
};
