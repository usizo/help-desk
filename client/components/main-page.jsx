import React from 'react';
import {router} from 'react-router';

export default class MainPage extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>MAIN PAGE</h1> 
                <button onClick={this.props.redirect}>helloooo</button>
            </div>
        )
    }
}