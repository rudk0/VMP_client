import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  id: null,
  token: null,
  name: '',
  surname: '',
  cityId: null,
  role: null
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData(state, action) {
      const {token, id, name, surname, cityId, role} = action.payload;
      return {
        ...state,
        token,
        id,
        name,
        surname, cityId, role
      };
    },
    logout() {
      return {
        ...initialState,
      };
    },
    auth({login, password}) {
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
