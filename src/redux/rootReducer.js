import {combineReducers} from 'redux';
import authReducer from './auth/authSlice';
import {connectRouter} from "connected-react-router";
import aoReducer from './ao/aoSlice';


export const createRootReducer = history =>
  combineReducers({
    auth: authReducer,
    router: connectRouter(history),
    ao: aoReducer

  });
