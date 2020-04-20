import {combineReducers} from 'redux';
import authReducer from './auth/authSlice';


export const createRootReducer = () =>
    combineReducers({
        auth: authReducer,
    });
