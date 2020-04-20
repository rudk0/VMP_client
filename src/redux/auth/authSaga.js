import { all, takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { Routes } from '../../const/Routes';
import { AUTH_ACTION_TYPES } from './authConstants';
import {authApi} from "../../api/login";
import {authActions} from './authSlice'
import {error} from "../../helpers/toaster-helper";

function* checkAuthStatusSaga() {
    try {
        const savedToken = localStorage.getItem('authToken');
        const name = localStorage.getItem('name');
        const surname = localStorage.getItem('surname');

        if (savedToken) {
            yield put(authActions.setAuthData({ token: savedToken, name, surname }));
        }
    } catch (err) {
        console.error('checkAuthStatusSaga error', err);
    }
}

function* authSaga({ payload }) {
    try {
        yield authApi.auth(payload.login, payload.password);
        yield call(checkAuthStatusSaga);
    } catch (err) {
        if (err.response && err.response.status === 401) {
            error('Authorization error')
        }
        console.error('authSaga error', err);
    }
}
function* logoutSaga() {
    localStorage.removeItem('authToken');
    yield put(push(Routes.EmptyRoute));
}
function* sagas() {
    yield all([
        call(checkAuthStatusSaga),
        takeLatest(AUTH_ACTION_TYPES.AUTH, authSaga),
        takeLatest(AUTH_ACTION_TYPES.LOGOUT, logoutSaga),
    ]);
}
export const authSagas = sagas;
