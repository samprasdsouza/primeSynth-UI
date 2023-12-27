import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from '../slices/productSlice'
import * as api from '../../services/apiCall'

function * getProducts (payload) {
    try {
        const response = yield call(api.primesynthService.getAllProducts, payload)
        yield put(actions.getProductsSuccess(response.data))
    } catch (error) {
        yield put(actions.getProductsFailure())
    }
}



function * productSaga () {
    yield takeLatest('users/getProductsStart', getProducts);
}

export default productSaga