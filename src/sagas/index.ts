import { spawn, all } from 'redux-saga/effects';

// **************************
// NOTE: import sagas here **
// **************************
import * as appSaga from './app';

export default function* rootSaga() {
  yield all(
    [
      ...Object.values(appSaga),
    ].map(spawn)
  );
}
