import React from 'react';
import {
    // HashRouter,
    BrowserRouter,
    Route,
    Switch,
    // Redirect
} from 'react-router-dom';
import App from './App';
import Login from './view/login';
import Main from './view/main';
import AuthRouter from './view/authRouter';
import Rejister from './view/register';
import FormikTest from './view/formik';
import FormikTest2 from './view/formik2';
// import Boss from './view/bossInfo';
// import GeniusInfo from './view/genius';
// import Test from './view/test';

// function Boss () {
//     return <h1>这是boss页面</h1>
// }
export default class ERouter extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <App>
                     <AuthRouter />
                    <Switch>
                        {/* <Route path="/bossinfo" component={Boss}></Route> */}
                        {/* <Route path="/test" component={Test}></Route>
                        <Route path="/geniusInfo" component={GeniusInfo}></Route> */}
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/formikTest" exact component={FormikTest}></Route>
                        <Route path="/formikTest2" exact component={FormikTest2}></Route>
                        <Route path="/main" component={Main}></Route>
                        <Route path="/register" component={Rejister}></Route>
                        {/* <Redirect to="/login"></Redirect> */}
                    </Switch>
                </App>
                
            </BrowserRouter>
        )
    }
}