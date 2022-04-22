import axios from 'axios';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const USER_DATA = 'USER_DATA';
const REGISTER = 'REGISTER';
const ERROR = 'ERROR';
const initState = {
    isAuth: false,
    user: '勒布朗·詹姆斯',
    age: 20,
    pwd: '',
    type: '',
    redirectTo: 'main'
}   
const registerState = (state = initState, action) => {
   
    switch (action.type) {
        case REGISTER:
            return {...state, isAuth: true, ...action.payload};
        case LOGIN:
            return {...state, isAuth: true, ...action.payload};
        case LOGOUT:
            return {...state, isAuth: false};
        case ERROR:
            return {...state,  isAuth: false, msg: action.msg};
            case USER_DATA:
                return {...state, ...action.payload };
        default:
            // console.log('C罗', state)
            return state;
    }
}
export function logoutNew () {
    return {type: LOGOUT}
}
export function login () {
    return {type: LOGIN}
}

export function handleLogin () {
    // console.log('打印参数', arguments)
    return dispatch => {
        axios.get('/login').then(res => {
            // console.log(res)
            if (res.status === 200) {

                dispatch(login(res.data))
            }
        })
    }
}

export function userData (data) {
    return {type: USER_DATA, payload: data}
}

export function registerSuccess (data) {
    return {type: REGISTER, payload: data}
}
function errorMsg (msg) {
    // throw new Error(data)
    return {msg, type: ERROR}
}
export function register ({user, pwd, againPwd,type}) {
    if (!user || !pwd || !type) {
        return errorMsg("用户名密码必须输入");
    }
    if (pwd !== againPwd) {
        return errorMsg("两次密码不一样");
    }
    return dispatch => {
        axios.post('/user/register', {user, pwd, type}).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(registerSuccess({user, pwd, type}))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
   
}
export default registerState;