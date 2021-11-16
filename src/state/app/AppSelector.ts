import { RootState } from '../reducers';

const setOnSync = (state: RootState) => state.app.setOnSync;
const messageType = (state: RootState) => state.app.messages.type;

export const appSelectors = {
  setOnSync,
  messageType,
};
