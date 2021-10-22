/* eslint-disable import/extensions */
import createSagaMiddleware from 'redux-saga';
import { compact } from 'lodash';
import { persistReducer, persistStore } from 'redux-persist';
import { applyMiddleware, compose, createStore } from 'redux';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { storage } from '../utils/storage';
import { initReactotron } from '../utils/reactotron';

import { rootSaga } from './sagas';
import { PersistedAppState, rootReducer, RootState } from './reducers';

const persistorConfig = {
  key: '@<YourAppName>:state',
  storage: storage,
  whitelist: ['app'],
};

export const configStore = (initialState?: PersistedAppState) => {
  let sagaMonitor = undefined;
  let reactorEnhancer = undefined;

  const Reactotron = initReactotron();
  sagaMonitor = Reactotron.createSagaMonitor();
  reactorEnhancer = Reactotron.createEnhancer();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  console.tron = Reactotron;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore

  let sentryReduxEnhancer = undefined;

  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const appliedMiddleware = applyMiddleware(sagaMiddleware);
  const enhancers = compose(
    ...compact([appliedMiddleware, reactorEnhancer, sentryReduxEnhancer]),
  );
  const persistedReducer = persistReducer(persistorConfig, rootReducer);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const store = createStore(persistedReducer, initialState, enhancers as any);
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
