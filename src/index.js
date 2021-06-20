import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css'; 
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configStore from './redux/store/configStore';
// 路由
// import { BrowserRouter,Route,Switch } from 'react-router-dom';
// import Main from './view/main';
// import Login from './view/login';
import Router from './router'
// redux store 对象管理所有的Redux 状态
const store = configStore();
console.log(store.getState())

// function Two () {
//   return <h1>俄罗斯</h1>
// }
// function Three () {
//   return <h1>m美国</h1>
// }
ReactDOM.render(
  <Provider store={store}>

    <Router />
    {/* <<BrowserRouter>
      ul>
        <li>
          <Link to="/">中国</Link>
        </li>
        <li>
          <Link to="/two">俄罗斯</Link>
        </li>
        <li>
          <Link to="/three">美国</Link>
        </li>
        <Switch>
          <Route path="/" exact component={App}></Route>
          <Route path="/two" component={Two}></Route>
          <Route path="/three" component={Three}></Route>
        </Switch>
      </ul>
        <h1>欢迎来到王者荣耀</h1>
        <Switch>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/main" component={Main}></Route>
        </Switch>
      <React.StrictMode>
        <App  />
      </React.StrictMode>
    </BrowserRouter>  */}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
