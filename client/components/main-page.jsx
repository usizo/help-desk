import React from 'react';
import ChatWindow from './chat-window.jsx';
import ImageWindow from './image-window.jsx'
import QuestionsWindow from './questions-window.jsx';
import {router} from 'react-router';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.getQuestions();
    }
    render() {
        return (
            <div>
                <QuestionsWindow questions={this.props.questions} userName={this.props.userName}/>
                <ImageWindow />
                <ChatWindow userName={this.props.userName} chatMessages={this.props.chatMessages}/>
            </div>
        )
    }
}