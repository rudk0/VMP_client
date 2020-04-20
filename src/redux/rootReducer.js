import {combineReducers} from 'redux';
import authReducer from './auth/authSlice';
import {connectRouter} from "connected-react-router";


export const createRootReducer = history =>
    combineReducers({
        auth: authReducer,
      router: connectRouter(history),

    });
