import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router'
import {Link} from 'react-router';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            <div style = {styles.container} className="signup">
                <h3>Sign up</h3>
                <form name = 'signUp' onSubmit={this.props.handleSignUp}>
                    <div style = {{margin: '10px'}}>
                    <label>
                    Pick Username:&nbsp; &nbsp;
                    <input type="text" name = 'username'  />
                    </label>
                    </div>
                    <div style = {{margin: '10px'}}>
                    <label>
                    Pick Password: &nbsp; &nbsp;
                    <input type ="password" name = 'password'/>
                    </label>
                    </div>
                    <input style = {styles.submit} type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
const styles = {
    container: {
        border: '1px #465381 solid',
        borderRadius: '10px',
        fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',  
        padding: '20px',
        color: '#465381',
        paddingTop: '10px',
        left: '50%',
        top: '50%',
        width: '400px',
        position: 'absolute',
        WebkitTransform: 'translate3d(-50%, -50%, 0)',
        MozTransform: 'translate3d(-50%, -50%, 0)',
        transform: 'translate3d(-50%, -50%, 0)'       
    },
    submit: {
        float: 'right',
        backgroundColor: '#920f0f',
        borderRadius:'6px',
        border: '1px solid black',
        display: 'inline-block',
        cursor: 'pointer',
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '15px',
        padding: '6px 24px',
        textDecoration: 'none',
    },
    account: {
        fontFamily: 'Arial',
        fontSize: '15px',
        border: '1px solid #268a16',
        cursor: 'pointer',
        padding: '6px 24px',
        textDecoration: 'none'
    },
    label: {
        display: 'inline-block',
        width:'100px',
        textAlign: 'right'
    }
}