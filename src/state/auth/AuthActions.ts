import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { SignProps } from '@typings/.';

import { constants } from '../constants';

const authUserStateChanged = (user: FirebaseAuthTypes.User) => ({
  type: constants.auth.AUTH_USER_STATE_CHANGED,
  user,
});
const register = (payload: SignProps) => ({
  type: constants.auth.REGISTER,
  payload,
});

const logOut = () => ({
  type: constants.auth.LOGOUT,
});

const login = (payload: SignProps) => ({
  type: constants.auth.LOGIN,
  payload,
});

export const authActions = {
  authUserStateChanged,
  register,
  logOut,
  login,
};
