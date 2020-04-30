import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  users: []
}
const userSlice = createSlice({
    name: 'user', initialState, reducers: {
      getUsers: state => {
      },
      setUsers: (state, action) => {
        return {
          ...state,
          users: action.payload
        }
      },
    }
  }
)
export const usersActions = userSlice.actions;
export default userSlice.reducer;