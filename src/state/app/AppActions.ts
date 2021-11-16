import { constants } from '../constants';

const setOnSync = (payload: { type: string; setOnSync: boolean }) => ({
  type: constants.app.SET_ON_SYNC,
  payload,
});

export const appActions = {
  setOnSync,
};
