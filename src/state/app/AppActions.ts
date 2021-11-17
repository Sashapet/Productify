import { constants } from '../constants';

const setOnSync = (payload: { type: string; setOnSync: boolean }) => ({
  type: constants.app.SET_ON_SYNC,
  payload,
});

const success = (payload: { type: string; text: string }) => ({
  type: constants.app.SUCCESS,
  payload,
});
const firebaseErr = (payload: string) => ({
  type: constants.app.FIREBASE_ERROR,
  payload,
});

export const appActions = {
  setOnSync,
  success,
  firebaseErr,
};
