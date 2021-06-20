
import React from 'react';
import { connect } from 'react-redux';
import { login, getUserData } from '../redux/reducer/auth_reducer';
import { Redirect, withRouter } from 'react-router-dom';
// import { InputItem, WhiteSpace } from 'antd-mobile';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
// import axios  from 'axios';
class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: {}
        }
        this.goNewpage = this.goNewpage.bind(this)
    }
    componentDidMount () {
        this.props.getUserData()
        // axios.get('/data').then(res => {
        //     // console.log(res)
        //     if (res.status === 200) {
        //         this.setState({data: res.data})
        //     }
        // })
    }
    goNewpage () {
        // 通过路由push方式进行跳转
        this.props.history.push('/main')
    }
    render () {
        return (
            <div>
            { this.props.auth.isAuth ? <Redirect to="/main" /> : null }
            
        {/* <h1>大家好我是{ this.state.data.user }</h1> */}
        <InputItem>用户名</InputItem>
        <WhiteSpace />
        <InputItem>用户名</InputItem>

        <h1>大家好我是{ this.props.auth.user }, 年龄 { this.props.auth.age }</h1>
                {/* <button onClick={this.props.login}>登录</button> */}
                <button onClick={ this.goNewpage }>登录</button>
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {...state}
}
const actionCreaters = { login, getUserData };
Login = connect(mapStatetoProps, actionCreaters)(Login);
export default withRouter(Login);