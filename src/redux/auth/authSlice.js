import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: null,
    token: null,
    name: '',
    surname: ''
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData(state, action) {
            const { token, userId, name, surname } = action.payload;
            return {
                ...state,
                token,
                userId,
                name,
                surname
            };
        },
        logout() {
            return {
                ...initialState,
            };
        },
        auth({login, password}) {},
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
