import {all, takeLatest, put} from 'redux-saga/effects';
import {listsApi} from "../../api/getlists";
import {error} from "../../helpers/toaster-helper";
import {aoActions} from "./aoSlice";
import {AO_ACTION_TYPES} from "./aoConstant";


function* getTypes(){
  try{
    const response = yield listsApi.getTypes();
    yield put(aoActions.setTypes(response.data))
  } catch (e) {
    error(e);
  }
}
function* sagas() {
yield all([
  takeLatest(AO_ACTION_TYPES.GET_TYPES, getTypes)
])
}
export const aoSagas = sagas;
