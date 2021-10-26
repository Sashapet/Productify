import { put } from 'redux-saga/effects';

import { actions } from '../actions';

function* getMinAppVersion(
  minAppVersion: string,
  forceUpdateRequired: boolean,
) {
  try {
    if (forceUpdateRequired) {
      yield put(actions.app.clearAppState());
      yield put(actions.app.setAppUpdateFlag(true));
    } else {
      yield put(actions.app.setAppUpdateFlag(false));
    }
  } catch (e) {
    console.log(e);
  }
}

export { getMinAppVersion };
