import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchQueryResults: [],
    loading: false,
    error: false
}

const searchQuerySlice = createSlice({
    name: 'test-2',
    initialState,
    reducers: {
        getSearchQueryStart: (state) => {
            state.loading = true;
        },
        getSearchQuerySuccess: (state, action) => {
            state.loading = false;
            state.searchQueryResults = action.payload
        },
        getSearchQueryFailure: (state) => {
            state.loading = false;
            state.error = true;
        }
    }
})

const searchQueryReducer = searchQuerySlice.reducer;
export const { getSearchQueryStart, getSearchQuerySuccess, getSearchQueryFailure} = searchQuerySlice.actions
export default searchQueryReducer