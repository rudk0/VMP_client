import {all, takeLatest, put} from 'redux-saga/effects';
import {error} from "../../helpers/toaster-helper";
import {UsersApi} from "../../api/UserAPI";
import {usersActions} from "./userSlice";
import {USER_ACTION_TYPES} from "./userConstant";


function* getUsers() {
  try {
    const response = yield UsersApi.getUsers();
    yield put(usersActions.setUsers(response.data));
  } catch (e) {
    error(e);
  }
}

function* getUser() {
  try {
   // const response = yield UsersApi.getUser();
    yield put(usersActions.setUser(null))
  } catch (e) {
    error(e);
  }
}

function* sagas() {
  yield all([
    takeLatest(USER_ACTION_TYPES.GET_USER_LIST, getUsers),
    takeLatest(USER_ACTION_TYPES.GET_USER, getUser)
  ]);
}

export const userSagas = sagas;
