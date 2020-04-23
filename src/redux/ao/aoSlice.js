import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  types: []
}
const aoSlice = createSlice({
  name: 'ao', initialState, reducers: {
    getTypes: state => {
    },
    setTypes: (state, action) => {
      return {
        ...state,
        types: action.payload
      }

    }
  }
})
export const aoActions = aoSlice.actions;
export default aoSlice.reducer;