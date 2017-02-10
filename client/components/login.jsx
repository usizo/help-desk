import React from 'react';
import {Link} from 'react-router';

export default class Login extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>LOGIN</h1>
                <button><Link to='/signup'>Sign Up</Link></button>
                <button><Link to='/main_page'>Log In</Link></button>
            </div>
        )
    }
}