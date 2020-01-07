import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../config/ReactotronConfig';

import reducers from './ducks';
import sagas from './sagas';
import { compose } from 'redux';


const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middleware),
    Reactotron.createEnhancer(),
  ),
);

sagaMiddleware.run(sagas);
export default store;