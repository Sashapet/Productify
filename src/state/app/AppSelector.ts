import { RootState } from '../reducers';

const setOnSync = (state: RootState) => state.app.setOnSync;
export const appSelectors = {
  setOnSync,
};
