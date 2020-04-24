import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  filters: {
    types: [],
    cities: [],
    formats: []
  }
}
const aoSlice = createSlice({
  name: 'ao', initialState, reducers: {
    getTypes: state => {
    },
    getCities: () => {
    },
    setCities: (state, action) => {
      return {
        ...state,
        filters: {
          ...state.filters,
          cities: action.payload
        }
      }
    },
    getFormats: () => {
    },
    setFormats: (state, action) => {
      return {
        ...state,
        filters: {
          ...state.filters,
          formats: action.payload
        }
      }
    },
    setTypes: (state, action) => {
      return {
        ...state,
        filters: {
          ...state.filters,
          types: action.payload
        }
      }
    }
  }
})
export const aoActions = aoSlice.actions;
export default aoSlice.reducer;