// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import PropTypes from 'prop-types';
// react-redux
import { connect } from 'react-redux';
// import { connect } from './redux/woniuRedux';
import { addGun, removeGun, addGunAsync } from './redux/action/index.js';

// @connect(
//   state => ({num: state}),
//   {addGun, removeGun, addGunAsync}
// )


class App extends React.Component{
  componentWillMount() {
    // const { store } = this.context;
    
    // console.log('arrrrrr', this.context);
    // console.log('medededed', this.props.store)
  }
  render () {
    return ( 
      
      <div className="App">
        {/* <h1>{ this.props.num }</h1>
        <div>劳资一拳把你打成傻逼</div> */}
          {  this.props.children }
      </div>
    );
  }
}
// 老版本的写法 react-redux
const mapStatetoProps = (state) => {
  // console.log('打印state', state)
  return {num: state.counter}
}
const actionCreators = { addGun, removeGun, addGunAsync }
App = connect(mapStatetoProps, actionCreators)(App);
export default App;
