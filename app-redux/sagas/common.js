import { delay, put } from 'redux-saga/effects';
// import { saveDebug } from '../actions/debug';
/* eslint-disable import/prefer-default-export */
export function* test() {
  yield delay(300);
  // const { debug } = yield select();
//   yield put(saveTest());
}