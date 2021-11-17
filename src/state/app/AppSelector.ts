import { RootState } from '../reducers';

const setOnSync = (state: RootState) => state.app.setOnSync;
const messageType = (state: RootState) => state.app.messages.type;
const firebaseErr = (state: RootState) => state.app.firebaseErr;

export const appSelectors = {
  setOnSync,
  messageType,
  firebaseErr,
};
