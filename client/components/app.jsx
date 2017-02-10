import React from 'react';
import Login from './login.jsx';
import Signup from './signup.jsx';
import MainPage from './main-page.jsx';
import $ from 'jquery';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: 'jinihendrix',
            questions: [],
        }
        this.gitHubLogin = this.gitHubLogin.bind(this);
        this.getQuestions = this.getQuestions.bind(this);
    }
    gitHubLogin() {
        $.get('/auth/github', (response) => {
            //if successful login, either with cookies or actual OAuth
            if (response.login) {
                //redirect to main page
                browserHistory.push('/main_page');
            } 
        })   
    }
    getQuestions() {
        $.get('/questions', (response) => {
            //response should have a questions property which is an array of all questions in DB
            //each questions element should be an object with a question property and username property
            //this way we can check if the question is mine, and put the resolved functionality ('x button') into the question 
            this.setState({ questions: response.questions });
        })
    }
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={ () => <Login 
                    github={this.gitHubLogin} 
                />}/>
                <Route path="/signup" component={ () => <Signup/>}/>
                <Route path="/main_page" component={ () => <MainPage 
                    questions={this.state.questions} 
                    getQuestions={this.getQuestions}
                />}/>
            </Router>
        )
    }
}