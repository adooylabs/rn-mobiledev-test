import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import createRootReducer from '../reducers';
import rootsaga from '../sagas';

export default history => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  sagaMiddleware.run(rootsaga);
  return store;
};
