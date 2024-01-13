import { combineReducers } from "redux";
import productReducer from "./slices/productSlice";
import searchQueryReducer from "./slices/SearchQuerySlice";


const rootReducer = combineReducers({
    products: productReducer,
    searchQuery: searchQueryReducer
})

export default rootReducer