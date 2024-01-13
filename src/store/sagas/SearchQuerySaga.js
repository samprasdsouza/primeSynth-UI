import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../../services/apiCall'
import * as actions from '../slices/SearchQuerySlice'

function * getSearchQuery (payload) {
    try {
        const response = yield call(api.primesynthService.getSearchQuery, payload)
        yield put(actions.getSearchQuerySuccess(response.data))
    } catch (error) {
        yield put(actions.getSearchQueryFailure())
    } 
}


function * searchQuerySaga () {
    yield takeLatest('users/getSearchQuery', getSearchQuery);
}

export default searchQuerySaga