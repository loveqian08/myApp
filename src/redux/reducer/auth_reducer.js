import axios from 'axios';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const USER_DATA = 'USER_DATA';


const initState = {
    isAuth: false,
    user: '勒布朗·詹姆斯',
    age: 20
}   
const auth = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth: true};
        case LOGOUT:
            return {...state, isAuth: false};
        case USER_DATA:
            return {...state, ...action.payload }    
        default:
            return state;
    }
}
export function login () {
    return {type: LOGIN}
}
export function logout () {
    return {type: LOGOUT}
}

export function getUserData () {
    // console.log('打印参数', arguments)
    return dispatch => {
        axios.get('/data').then(res => {
            // console.log(res)
            if (res.status === 200) {

                dispatch(userData(res.data))
            }
        })
    }
}

export function userData (data) {
    return {type: USER_DATA, payload: data}
}
export default auth;