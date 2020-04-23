import { all, fork } from 'redux-saga/effects';

import { authSagas } from './auth/authSaga';
import {aoSagas} from "./ao/aoSaga";

export const rootSaga = function* rootSaga() {
  yield all([
    fork(authSagas),
    fork(aoSagas)
  ]);
};
