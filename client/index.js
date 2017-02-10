import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import MainPage from './components/main-page.jsx';
import { Router, Route, IndexRoute } from 'react-router';

ReactDOM.render((
    <Router>
        <Route path="/" component={App}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/main_page" component={MainPage}/>
    </Router>), document.getElementById('app'));
