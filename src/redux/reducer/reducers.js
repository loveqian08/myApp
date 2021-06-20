// 合并所有reducer 并且返回
import { combineReducers } from 'redux';
import counter from  './count';
import auth from './auth_reducer';

export default combineReducers({counter, auth});