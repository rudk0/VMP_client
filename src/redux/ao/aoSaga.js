import {all, takeLatest, put} from 'redux-saga/effects';
import {AOApi} from "../../api/AOAPI";
import {error} from "../../helpers/toaster-helper";
import {aoActions} from "./aoSlice";
import {AO_ACTION_TYPES} from "./aoConstant";

function* getCities() {
  try {
    const response = yield AOApi.getCities();
    yield put(aoActions.setCities(response.data));
  } catch (e) {
    error(e);
  }
}

function* getTypes() {
  try {
    const response = yield AOApi.getTypes();
    yield put(aoActions.setTypes(response.data))
  } catch (e) {
    error(e);
  }
}

function* getFormats() {
  try {
    const response = yield AOApi.getFormats();
    yield put(aoActions.setFormats(response.data))
  } catch (e) {
    error(e);
  }
}

function* getSegments() {
  try {
    const response = yield AOApi.getSegments();
    yield put(aoActions.setSegments(response.data))
  } catch (e) {
    error(e);
  }
}

function* sagas() {
  yield all([
    takeLatest(AO_ACTION_TYPES.GET_TYPES, getTypes),
    takeLatest(AO_ACTION_TYPES.GET_CITIES, getCities),
    takeLatest(AO_ACTION_TYPES.GET_FORMATS, getFormats),
    takeLatest(AO_ACTION_TYPES.GET_SEGMENTS, getSegments)
  ])
}

export const aoSagas = sagas;
