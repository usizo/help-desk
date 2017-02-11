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
            userName: 'miketyson001',
            questions: {
                '0': {
                    id: '0',
                    userName: 'miketyson001',
                    question: 'what is even this?',
                    created_at: '5:30pm',
                    chatMessages: [
                        {
                            userName: 'XMENROX',
                            message: 'hello there buddy',
                            created_at: '5:31pm'
                        },
                        {
                            userName: 'miketyson001',
                            message: 'help me, pls',
                            created_at: '5:32pm'
                        }
                    ]
                },
                '1': {
                    id: '1',
                    userName: 'XMENROX',
                    question: 'how to start computer?',
                    created_at: '6:30pm',
                    chatMessages: [
                        {
                            userName: 'miketyson001',
                            message: 'lolol scrub',
                            created_at: '6:31pm'
                        },
                        {
                            userName: 'XMENROX',
                            message: 'FUCK UUUUU',
                            created_at: '6:32pm'
                        },
                        {
                            userName: 'XxEmperorxxKingxxDictatorxX',
                            message: 'hey guys chill'
                        }
                    ]
                },
                '2': {
                    id:'2',
                    userName: 'XxEmperorxxKingxxDictatorxX',
                    question: 'i ordered food 10 minutes ago and its still not here',
                    created_at: '7:30pm',
                    chatMessages: [
                        {
                            userName: 'miketyson001',
                            message: 'i ate it HAHA',
                            created_at: '7:31pm'
                        },
                        {
                            userName: 'XxEmperorxxKingxxDictatorxX',
                            message: 'You asshole.',
                            created_at: '7:32pm'
                        },
                        {
                            userName: 'XMENROX',
                            message: 'ha ha ha',
                            created_at: '7:33pm'
                        }
                    ]
                }
            },
            selectedQuestionId: '0',
            selectedQuestionChat:[
                        {
                            userName: 'miketyson001',
                            message: 'i ate it HAHA',
                            created_at: '7:31pm'
                        },
                        {
                            userName: 'XxEmperorxxKingxxDictatorxX',
                            message: 'You asshole.',
                            created_at: '7:32pm'
                        },
                        {
                            userName: 'XMENROX',
                            message: 'ha ha ha',
                            created_at: '7:33pm'
                        }
                    ],
        }
        // this.chooseQuestion('0');
        this.gitHubLogin = this.gitHubLogin.bind(this);
        this.getData = this.getData.bind(this);
    }
    // componentDidMount(id) {
    //     console.log(this.state.questions[id].chatMessages);
    //     this.setState({ selectedQuestionChat: this.state.questions[id].chatMessages });
    //     console.log(this.state.selectedQuestionChat);
    // }
    gitHubLogin() {
        $.get('/auth/github', (response) => {
            console.log(response);
            browserHistory.push('/main_page');
        })   
    }
    getData() {
        $.get('/questions', (response) => {
            //response should have a questions property which is an array of all questions in DB
            //each questions element should be an object with a question property and username property
            //this way we can check if the question is mine, and put the resolved functionality ('x button') into the question 
            
            // this.setState({ questions: response.questions });
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
                    getQuestions={this.getData}
                    userName={this.state.userName}
                    chatMessages={this.state.selectedQuestionChat}
                />}/>
            </Router>
        )
    }
}