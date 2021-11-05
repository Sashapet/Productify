import { createReducer } from '@reduxjs/toolkit';

import { constants } from '../constants';

export const INITIAL_STATE: AppReducerState = {
  setOnSync: { type: null, setOnSync: false },
};

export interface AppReducerState {
  setOnSync: { type: string; setOnSync: boolean };
}

export const appReducer = createReducer(INITIAL_STATE, {
  [constants.app.SET_ON_SYNC]: (state, action) => {
    state.setOnSync = action.payload;
  },
});
