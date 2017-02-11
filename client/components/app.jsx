import React from 'react';
import Login from './login.jsx';
import Signup from './signup.jsx';
import MainPage from './main-page.jsx';
import $ from 'jquery';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: 'miketyson001',
      questions: {},
      selectedQuestionId: '0',
      selectedQuestionChat: []
    };
    this.gitHubLogin = this.gitHubLogin.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.setSelectedQuestionChat = this.setSelectedQuestionChat.bind(this);
  }

  getQuestions() {
    $.get('/questions', (response) => {
      // console.log('questions:', response);
        const newState = {questions: {}};
        response.forEach((question) => {
            newState.questions[question.id] = {
                id: question.id,
                userName: question.asker,
                question: question.question,
                created_at: question.createdAt,
                chatMessages: []
            }
        })
        this.setState(newState);
    });    
  }
  getMessages() {
    $.get('/messages', (res) => {
      // console.log('messages:', res);
        const temp = this.state.questions;
        res.forEach((message) => {
            if (temp.hasOwnProperty(message.questionid)) {
                temp[message.questionid].chatMessages.push({
                    userName: message.username,
                    message: message.message,
                    created_at: message.createdAt
                })
            }
        });
        this.setState({ questions: temp });
        console.log(this.state);
    });
  }
  setSelectedQuestionChat(id) {
    this.setState({ selectedQuestionChat: this.state.questions[id].chatMessages });
  }
  gitHubLogin() {
    $.get('/auth/github', (response) => {
      console.log(response);
      browserHistory.push('/main_page');
    });
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={() => <Login github={this.gitHubLogin} />} />
        <Route path="/signup" component={() => <Signup />} />
        <Route path="/main_page" component={() => <MainPage
          questions={this.state.questions}
          getQuestions={this.getQuestions}
          getMessages={this.getMessages}
          userName={this.state.userName}
          chatMessages={this.state.selectedQuestionChat}
          setSelectedQuestionChat={this.setSelectedQuestionChat}
        />} />
      </Router>
    );
  }
}