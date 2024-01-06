import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    error: false,
    product: []
}
const productSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        getProductsStart: (state) => {
            state.loading = true;
        },
        getProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload
        },
        getProductsFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        getProductStart: (state) => {
            state.loading = true;
        },
        getProductSuccess: (state, action) => {
            state.loading = false;
            state.product = action.payload
        },
        getProductFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
    }
})

const productReducer = productSlice.reducer;
export const { getProductsStart, getProductsSuccess, getProductsFailure, getProductStart, getProductSuccess, getProductFailure } = productSlice.actions;
export default productReducer