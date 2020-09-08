import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as types from '../constants/action.types';

// * ***********************
// * GOTO HOME
// * **********************
function* gotoPage({ pathname } : any) {
  yield put(push(pathname));
}

export function* gotoPageListener() {
  yield takeLatest(types.GOTO_PAGE, gotoPage);
}
