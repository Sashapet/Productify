import { createReducer } from '@reduxjs/toolkit';

import { constants } from '../constants';

export const INITIAL_STATE: AuthReducerState = {
  user: false,
};

export interface AuthReducerState {
  user: boolean;
}

export const authReducer = createReducer(INITIAL_STATE, {
  [constants.app.AUTH_USER_STATE_CHANGED]: (state, action) => {
    state.user = action.user;
  },
});
