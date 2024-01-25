
import * as actions from '../slices/contactUsSlice'
import * as api from '../../services/apiCall'
import { takeLatest } from 'redux-saga/effects'

function * postContactUs (payload) {
    try {
        const response = yield call(api.primesynthService.postContactUs, payload)
        yield put(actions.postContactUsSuccess(response.data))
    } catch (error) {
        yield put(actions.postContactUsFailure())
    }
}


function * contactUsSaga () {
    yield takeLatest('users/postContactUsStart', postContactUs);
}

export default contactUsSaga