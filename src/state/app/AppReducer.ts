import { createReducer } from '@reduxjs/toolkit';

import { constants } from '../constants';

export const INITIAL_STATE: AppReducerState = {
  setOnSync: { type: null, setOnSync: false },
  messages: { type: null, text: false },
  firebaseErr: null,
};

export interface AppReducerState {
  setOnSync: { type: string; setOnSync: boolean };
  messages: { type: string; text: boolean };
  firebaseErr: string;
}

export const appReducer = createReducer(INITIAL_STATE, {
  [constants.app.SET_ON_SYNC]: (state, action) => {
    state.setOnSync = action.payload;
  },
  [constants.app.SUCCESS]: (state, action) => {
    state.messages = action.payload;
  },
  [constants.app.ERROR]: (state, action) => {
    state.messages = action.payload;
  },
  [constants.app.FIREBASE_ERROR]: (state, action) => {
    state.firebaseErr = action.payload;
  },
});
