import React from 'react';
import {Link} from 'react-router';

export default class Signup extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="signup">
                <h1> SIGNUP </h1>
                <button><Link to='/main_page'>Sign Up</Link></button>
            </div>
        )
    }
}