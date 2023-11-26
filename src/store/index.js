import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware()

const middleware = [logger, sagaMiddleware]

const store = configureStore({
    reducer: rootReducer,
    middleware: [...middleware]
});

sagaMiddleware.run(rootSaga)
export default store;