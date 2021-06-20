// applyMiddleware compose 都是异步请求的中间件
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducers';

const configStore = () => createStore(reducer, compose(applyMiddleware(thunk)));
export default configStore;
