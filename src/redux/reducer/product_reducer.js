import { handleActions as createReducer } from 'redux-actions';
import { saveProducts } from '../action/productActions';
const iniitialState = [];
const handSaveProducts = (state, action) => action.payload;
console.log("打印数据", handSaveProducts)
export default createReducer({
    // 将商品列表数据保存在本地store对象中
    [saveProducts]: handSaveProducts
}, iniitialState);
