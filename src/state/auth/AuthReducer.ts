import { createReducer } from '@reduxjs/toolkit';

import { constants } from '../constants';

export const INITIAL_STATE: AuthReducerState = {
  user: false,
};

export interface AuthReducerState {
  user: boolean;
}

export const authReducer = createReducer(INITIAL_STATE, {
  [constants.auth.AUTH_USER_STATE_CHANGED]: (state, action) => {
    state.user = action.user;
  },
});
