// import logo from './logo.svg';
import './App.css';
import React from 'react';

// react-redux
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './redux/action/index.js';

// @connect(
//   state => ({num: state}),
//   {addGun, removeGun, addGunAsync}
// )


class App extends React.Component{
 
  render () {
    // console.error(this.props)
    return ( 
      
      <div className="App">
        <h1>{ this.props.num }</h1>
        <div>劳资一拳把你打成傻逼</div>
          {  this.props.children }
      </div>
    );
  }
}
// 老版本的写法 react-redux
const mapStatetoProps = (state) => {
  return {num: state.counter}
}
const actionCreators = { addGun, removeGun, addGunAsync }
App = connect(mapStatetoProps, actionCreators)(App);
export default App;
