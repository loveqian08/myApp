// 合并所有reducer 并且返回
import { combineReducers } from 'redux';
import counter from  './count';
import auth from './auth_reducer';
import registerState from './register_reducer.js';
import loginState from './login_reducer.js';
import productState from './product_reducer';
// import counter_reducer from './counter_reducer';
export default combineReducers({counter, auth, registerState, loginState, productState
    //  counter_reducer
    });