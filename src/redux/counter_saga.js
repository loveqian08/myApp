import { takeEvery, put, delay } from 'redux-saga/effects';
import { increment } from './action/count_actions';
import { INCREMENT_ASYNC } from './action/actionType';
import { loadProducts, saveProducts } from './action/productActions';
import axios  from 'axios';

/**
 * takeEvery 接收action
 * put 触发action
 */

function* increment_async_fn () {
    yield  delay(2000);
    //  const {data} = yield axios.get('http://localhost:3005/goods');
    // yield put(increment(10));
    yield put(saveProducts({name: 'cjem'}))
}

export default function* counterSaga () {
    // 接收action
    // yield takeEvery(INCREMENT_ASYNC, increment_async_fn);
    yield takeEvery(loadProducts, increment_async_fn);
}