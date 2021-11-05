import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { SignUpProps } from '@typings/.';

import { constants } from '../constants';

const authUserStateChanged = (user: FirebaseAuthTypes.User) => ({
  type: constants.auth.AUTH_USER_STATE_CHANGED,
  user,
});
const register = (payload: SignUpProps) => ({
  type: constants.auth.REGISTER,
  payload,
});

const logOut = () => ({
  type: constants.auth.LOGOUT,
});

export const authActions = {
  authUserStateChanged,
  register,
  logOut,
};
