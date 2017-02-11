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
    // this.chooseQuestion('0');
    this.gitHubLogin = this.gitHubLogin.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }
    // componentDidMount(id) {
    //     console.log(this.state.questions[id].chatMessages);
    //     this.setState({ selectedQuestionChat: this.state.questions[id].chatMessages });
    //     console.log(this.state.selectedQuestionChat);
    // }
  getQuestions() {
    $.get('/questions', (response) => {
        const newState = {questions: {}};
        response.forEach((question) => {
            newState.questions[question.id] = {
                id: question.id,
                userName: question.asker,
                question: question.question,
                created_at: question.createdAt
            }
        })
        this.setState(newState);
    });    
  }
  getMessages() {
      console.log('MESSAGES');
    $.get('/messages', (res) => {
        const temp = this.state.questions;
        // console.log(temp);
        res.forEach((message) => {
            if (temp.hasOwnProperty(message.questionid)) {
                temp[message.questionid].chatMessages = [];
                temp[message.questionid].chatMessages.push({
                    userName: message.username,
                    message: message.message,
                    created_at: message.createdAt
                })
            }
        });
        this.setState({ questions: temp, selectedQuestionChat: temp[3].chatMessages }, () => {
            console.log('AAAA', this.state.questions[3]);
        });
        console.log('BBBB', this.state.questions[3]);
    });
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
        />} />
      </Router>
    );
  }
}