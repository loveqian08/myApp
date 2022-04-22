// applyMiddleware compose 都是异步请求的中间件
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import reducer from '../reducer/reducers';
// //  const configStore = () => createStore(reducer, compose(applyMiddleware(thunk)));
//  const configStore = createStore(reducer, compose(applyMiddleware(thunk)));
//  export default configStore;




// saga 用法

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer/reducers';
import createSagaMiddleware from 'redux-saga';
import counterSaga from '../counter_saga';
// 创建savaMiddleware
const sagaMiddleware = createSagaMiddleware();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);
const configStore = createStore(reducer, enhancer);
sagaMiddleware.run(counterSaga);

export default configStore;