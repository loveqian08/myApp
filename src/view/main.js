import React from 'react';
import App from '../App'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { login, logout } from '../redux/reducer/auth_reducer';
import { logoutNew, handleLogin } from '../redux/reducer/login_reducer';
import { connect } from 'react-redux';
import axios from 'axios';
function Two () {
    return <h1>俄罗斯</h1>
}
function Three () {
    return <h1>m美国</h1>
}
class Main extends React.Component {
    constructor (props) {
        super(props);
        this.goLogin = this.goLogin.bind(this)
    }
    componentDidMount () {
          axios.get('user/info').then(res => {
            console.log(res)
            if (res.status === 200) {
                if (res.data.code === 0) {

                } else {
                    // this.props.history.push('/login')
                }
            }
        })
    }
    goLogin () {
        this.props.history.push('/login')
        
        console.log('gologin',this.props)
    }
    render () {
        const toLogin = <Redirect to="/login"></Redirect>
        const app = (
            <div>
                <p>我是main组件 独立团</p>
                { this.props.registerReducer.isAuth ? <button onClick={ this.props.logoutNew }>注销</button> : null }
                <ul>
                    <li>
                        <Link to="/main/china">中国</Link>
                    </li>
                    <li>
                    <   Link to="/main/two">俄罗斯</Link>
                    </li>
                    <li>
                        <Link to="/main/three">美国</Link>
                    </li>
                    <Switch>
                        <Route path="/main/china" exact component={App}></Route>
                        <Route path="/main/two" component={Two}></Route>
                        <Route path="/main/three" component={Three}></Route>
                    </Switch>
                </ul>
            </div>
        )
        console.log(this.props.registerReducer.isAuth)
        return (
            <div>
                { this.props.registerReducer.isAuth ? app : toLogin }
                {/* {app} */}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {...state}
}
const actionCreators = { login, logout, logoutNew, handleLogin };
Main = connect(mapStatetoProps, actionCreators)(Main);


// const mapStatetoProp = (state) => {
//     return {...state}
// }
// const actionCreators = {logout};
// Main = connect(mapStatetoProp, actionCreators)(Main)
export default Main;