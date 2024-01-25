import { createSlice } from "@reduxjs/toolkit";
import { create } from "lodash";

const initialState = {
    contactUs: [],
    loading: false,
    error: false
}

const contactUsSlice = createSlice({
    name: 'test-3',
    initialState,
    reducers: {
        postContactUsStart: (state) => {
            state.loading = true;
        },
        postContactUsSuccess: (state, action) => {
            state.loading = false;
            state.contatUs = action.payload
        },
        postContactUsFailure: (state) => {
            state.loading = false;
            state.error = true;
        }
    }

})

const contactUsReducer = contactUsSlice.reducer;
export const { postContactUsFailure, postContactUsStart, postContactUsSuccess} = contactUsReducer.actions
export default contactUsReducer

