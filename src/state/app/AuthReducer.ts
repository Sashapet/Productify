import { createReducer } from '@reduxjs/toolkit';

import { constants } from '../constants';

export const INITIAL_STATE: AuthReducerState = {
  auth: false,
};

export interface AuthReducerState {
  auth: boolean;
}

export const authReducer = createReducer(INITIAL_STATE, {
  // [constants.app.SET_APP_UPDATE_FLAG]: (state, action) => {
  //   state.needToUpdate = action.needToUpdate;
  // },
});
