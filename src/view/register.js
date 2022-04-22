import React from 'react';
import { List, Radio, WhiteSpace, InputItem,  Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { register } from '../redux/reducer/login_reducer';
import { Redirect } from 'react-router-dom';

class Register extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            type: 'boss',
            user: '',
            pwd: '',
            repeatPwd: '',
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleRegister () {
        this.props.register(this.state);
    }
    handleChange (key, val) {
        this.setState({
            [key]: val
        })
    }
    render () {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                { this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null }
                <List>
                    { this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null }
                    <InputItem
                      onChange={v => this.handleChange('user', v)}>用户名</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem
                     onChange={v => this.handleChange('pwd', v)} type="password">密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem
                     onChange={v => this.handleChange('repeatPwd', v)} type="password">确认密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <RadioItem checked={this.state.type ==='genius'}
                    onChange={() => this.handleChange('type', 'genius')}>牛人</RadioItem>
                    <WhiteSpace></WhiteSpace>
                    <RadioItem checked={this.state.type ==='boss'}
                     onChange={() => this.handleChange('type', 'genius')}>BOSS</RadioItem>
                    <WhiteSpace></WhiteSpace>
                    <Button type='primary' onClick={this.handleRegister}>注册</Button>
                </List>
            </div>

        )
    }
}

const mapStatetoProps = (state) => {
    console.error(state)
    return state.registerReducer
}
const actionCreaters = { register };
Register = connect(mapStatetoProps, actionCreaters)(Register);
export default Register;