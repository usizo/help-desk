import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router'
import {Link} from 'react-router';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        //this.githubTest = this.githubTest.bind(this);
    }

    /*githubTest() {
        $.get('auth/github', (response) => {
            $.get(response, (data) => {
                console.log(data);
            })
        })
    }*/

    render() {
        return (

            <div style = {styles.container} className="login">
                <img width = '400px' src = 'usizo2.png'/>
                <div style = {styles.border}>
                <h3 style = {{textAlign: 'center'}}>Login</h3>
                <form style = {{textAlign: 'center'}} name = 'logIn' onSubmit={this.props.handleLogIn}>
                    <div style = {{margin: '10px'}}><label>
                    Enter Username:&nbsp; &nbsp;
                    <input type="text" name = 'username' />
                    </label></div>
                    <div style = {{margin: '10px'}}><label>
                    Enter Password: &nbsp; &nbsp;
                    <input type ="password" name = 'password'/>
                    </label></div>
                    <br></br>
                    <input style = {styles.submit} type="submit" value="Submit" />
                </form>
                <Link to = '/signup'>Need an account? Sign up</Link>
                </div>
            </div>
        )
    }
}
const styles = {
    border: {
        border: '1px black solid',
        borderRadius: '10px',
        paddingBottom: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
    },
    container: {
        fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
        padding: '20px',
        paddingTop: '10px',
        left: '50%',
        top: '50%',
        width: '400px',
        position: 'absolute',
        WebkitTransform: 'translate3d(-50%, -50%, 0)',
        MozTransform: 'translate3d(-50%, -50%, 0)',
        transform: 'translate3d(-50%, -50%, 0)',
        color: 'black'
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
