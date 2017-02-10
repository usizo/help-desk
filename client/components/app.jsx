import React from 'react';
import Login from './login.jsx';
import Signup from './signup.jsx';
import MainPage from './main-page.jsx';
import { Router, Route, IndexRoute } from 'react-router';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            login: 'LOGIN',
            signup: 'SIGNUP',
            mainPage: 'MAINPAGE'
        }
    }
    render() {
        return (
            <Router>
                <Route path="login" component={() => <Login login={this.state.login}/>}/>
                <Route path="signup" component={Signup}/>
                <Route path="main_page" component={MainPage}/>
            </Router>
        )
    }
}