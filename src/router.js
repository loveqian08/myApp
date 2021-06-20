import React from 'react';
import {
    // HashRouter,
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import App from './App';
import Login from './view/login';
import Main from './view/main';

export default class ERouter extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/main" component={Main}></Route>
                        <Redirect to="/login"></Redirect>
                    </Switch>
                </App>
                
            </BrowserRouter>
        )
    }
}