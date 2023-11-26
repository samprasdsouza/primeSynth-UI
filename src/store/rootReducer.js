import { combineReducers } from "redux";
import productReducer from "./slices/productSlice";


const rootReducer = combineReducers({
    products: productReducer
})

export default rootReducer