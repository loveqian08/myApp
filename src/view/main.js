import React from 'react';
import App from '../App'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { login, logout } from '../redux/reducer/auth_reducer';
import { connect } from 'react-redux';
function Two () {
    return <h1>俄罗斯</h1>
}
function Three () {
    return <h1>m美国</h1>
}
class Main extends React.Component {
    // constructor (props) {
    //     super(props)
    // }

    render () {
        const toLogin = <Redirect to="/login"></Redirect>
        const app = (
            <div>
                <p>我是main组件 独立团</p>
                { this.props.auth.isAuth ? <button onClick={ this.props.logout }>注销</button> : null }
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
        return (
            <div>
                { this.props.auth.isAuth ? app : toLogin }
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {...state}
}
const actionCreators = { login, logout };
Main = connect(mapStatetoProps, actionCreators)(Main);


// const mapStatetoProp = (state) => {
//     return {...state}
// }
// const actionCreators = {logout};
// Main = connect(mapStatetoProp, actionCreators)(Main)
export default Main;