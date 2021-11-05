import { AnyAction, CombinedState, combineReducers } from 'redux';

import { appReducer, AppReducerState } from './app/AppReducer';
import { authReducer, AuthReducerState } from './auth/AuthReducer';

export interface RootState {
  auth: AuthReducerState;
  app: AppReducerState;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  auth: authReducer,
  app: appReducer,
});

export const rootReducer = (state: RootState | undefined, action: AnyAction) =>
  combinedReducer(state, action);
