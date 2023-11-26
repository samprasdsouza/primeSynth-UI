import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from '../slices/productSlice'
import * as api from '../../services/apiCall'

function * getProducts () {
    try {
        console.log('there');
        const response = yield call(api.primesynthService.getAllProducts)
        yield put(actions.getProductsSuccess(response.data))
    } catch (error) {
        yield put(actions.getProductsFailure())
    }
}

function * getProduct () {
    try {
        const response = yield call(api.primesynthService.getAllProducts)
        yield put(actions.getProductsSuccess(response.data))
    } catch (error) {
        yield put(actions.getProductsFailure())
    }
}

function * productSaga () {
    yield takeLatest('users/getProductsStart', getProducts);
    yield takeLatest('user/getProductStart', getProduct);
}

export default productSaga