import React from 'react';
import React from 'react-dom';
import App from './view/app.jsx';
import { Router, Route, Link, IndexRoute } from 'react-router'

ReactDOM.render((
    <Router>
        <Route path='/' component={App}>
            <IndexRoute component={Login}>
            <Route path='signup' component={Signup}>
            <Route path='main_page' component={MainPage}>
        </Route>
    </Router>    
), document.getElementById('root'));

