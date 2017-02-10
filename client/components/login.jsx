import React from 'react';
import {Link} from 'react-router';

export default class Login extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="login">
                <h1>LOGIN</h1>
                <button><Link to='/signup'>{this.props.login}</Link></button>
                <button onClick={this.props.github}>GitHub Login</button>
            </div>
        )
    }
}