import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    filters: {
        types: [],
        cities: [],
        formats: [],
        segments: [],
        significance: []
    }
}
const aoSlice = createSlice({
        name: 'ao', initialState, reducers: {
            getSegments: state => {
            },
            setSegments: (state, action) => {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        segments: action.payload
                    }
                }
            },
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
            },
        getSignificance: () => {
        },
        setSignificance: (state, action) => {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    significance: action.payload
                }
            }
        }
        },

    }
)
export const aoActions = aoSlice.actions;
export default aoSlice.reducer;