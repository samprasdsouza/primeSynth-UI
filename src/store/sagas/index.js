import { all } from "redux-saga/effects";
import productSaga from "./productSaga";
import searchQuerySaga from "./SearchQuerySaga";

function * rootSaga() {
    yield all([productSaga(), searchQuerySaga()])
}

export default rootSaga