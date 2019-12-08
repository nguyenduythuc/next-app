import { takeLatest } from 'redux-saga/effects';
import Types from '../types';
import { test } from './test';

export default function* rootSaga() {
  yield [takeLatest(Types.TEST, test)];
}