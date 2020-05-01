import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: {}
}
const userSlice = createSlice({
    name: 'user', initialState, reducers: {
      getUser: ()=>{},
      setUser: (state, action) => {
        return {
          ...state,
          user: action.payload
        }
      },
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