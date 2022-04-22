
import React from 'react';
// import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, getUserData } from '../redux/reducer/auth_reducer';
// import { counterActions, increment, decrement } from '../redux/action/count_actions';
import { 
    // Redirect, 
    withRouter } from 'react-router-dom';
// import { InputItem, WhiteSpace } from 'antd-mobile';
import { 
    // InputItem, WhiteSpace, Button, 
    List } from 'antd-mobile';
import { handleLogin } from '../redux/reducer/login_reducer';
import { addGun, removeGun, addGunAsync } from '../redux/action/index.js';
import FormikTest from './formik';
// import highComp from '../component/highComp';
// import * as counterActions from '../redux/action/count_actions';
import * as counterActions from '../redux/action/productActions';

// 高阶组件 属性代理
function HellNew(Comp) {
    // class High extends React.Component {
    //     render () {
    //         return (
    //             <div>
    //                 <p>这是高阶组件</p>
    //                 <Comp {...this.props}></Comp>
    //             </div>
    //         )
    //     }
    // }
    class High extends Comp {
        componentDidMount () {
            console.log('高阶组件新增的生命周期，加载完成')
        }
        render () {
            return (
                <div>
                    <p>这是高阶组件</p>
                    <Comp {...this.props}></Comp>
                </div>
            )
        }
    }
    return High;
}

class Hello extends React.Component {
    render () {
        return <h1>Hello imooc I love React Rduc</h1>
    }
}
 
Hello = HellNew(Hello);

class Login extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            // data: {}
            user: '',
            pwd: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.goRegister = this.goRegister.bind(this);

       
    }
    componentDidMount () {
        console.log( this.props, 'login')
        // this.props.increment_async();

        this.props.loadProducts();
        
        setTimeout(()=> {
            console.log( this.props, 'login')
        }, 3000)
        // this.props.getUserData();
        // axios.get('/data').then(res => {
        //     // console.log(res)
        //     if (res.status === 200) {
        //         this.setState({data: res.data})
        //     }
        // })
    }
    // goNewpage () {
    //     // 通过路由push方式进行跳转
    //     this.props.history.push('/main')
    //     this.props.handleLogin(this.state);

    // }
    goRegister () {
        this.props.history.push('/register')
    }

    // 使用了高阶组件
    handleChange (key, val) {
         this.setState({
            [key]: val
        })
    }
    handleLogin () {
        console.log(this.props.auth, '登录传参')
        this.props.handleLogin(this.state.user, this.state.pwd);
        // this.props.addGun(this.props.state);
        setTimeout(() => {
            // console.log(this.props.registerReducer.redirectTo)
            // console.log(this.props)
        }, 500)
        
    }

   

    render () {
        
        return (
            <div>
                {/* { this.props.registerReducer.redirectTo ? <Redirect to={this.props.registerReducer.redirectTo}/> : null } */}
                
                <Hello/>


                <List>
                    {/* { this.props.registerReducer.msg ? <p className='error-msg'>{this.props.registerReducer.msg}</p> : null }

                    <InputItem onChange={v => this.handleChange('user', v)}>用户名</InputItem>
                    <WhiteSpace />
                    <InputItem  type="password" onChange={v => this.handleChange('pwd', v)}>密码</InputItem>

                    <h1>大家好我是{ this.props.auth.user }, 年龄 { this.props.auth.age }</h1>
                    <Button type='primary' onClick={ this.handleLogin }>登录</Button>
                    <WhiteSpace />
                    <WhiteSpace />
                    <Button type='primary' onClick={this.goRegister}>注册</Button> */}
                    <FormikTest/>
                    {this.props.user}
                </List>
            </div>
        )
    }
}
// Login = highComp(Login)
// const mapStatetoProps = (state) => ({
//     user: state.auth.user,
//     num: state.loginState.num
// })
const mapStatetoProps = (state) => {
    console.log(state, 'messi')
    return {
        user: state.auth.user,
        num: state.loginState.num,
        product: state.productState
    }
}
const mapDispatchtoProps = dispatch => ({
    // ...bindActionCreators({
    //     increment () {
    //         return { type: 'increment'}
    //     },
    //     decrement () {
    //         return { type: 'increment'}
    //     }
    // }, dispatch)
     ...bindActionCreators(
        counterActions, dispatch
    )
})
const mapDispatchtoProps2 = dispatch => bindActionCreators(counterActions, dispatch)
// console.error("打印", mapDispatchtoProps2, mapDispatchtoProps)
const actionCreaters = { handleLogin, login, getUserData, addGun, removeGun, addGunAsync };
Login = connect( mapStatetoProps, mapDispatchtoProps)(Login);
export default withRouter(Login);