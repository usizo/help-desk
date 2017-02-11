import React from 'react';
import ChatWindow from './chat-window.jsx';
import ImageWindow from './image-window.jsx'
import QuestionsWindow from './questions-window.jsx';
import {router} from 'react-router';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.getQuestions();
        this.props.getMessages();
    }
    render() {
        return (
            <div>
                <QuestionsWindow 
                    questions={this.props.questions} 
                    userName={this.props.userName}
                    postNewQuestion={this.props.postNewQuestion}
                    setSelectedQuestionChat={this.props.setSelectedQuestionChat}
                />
                <ImageWindow />
                <ChatWindow 
                    userName={this.props.userName} 
                    chatMessages={this.props.chatMessages}
                    id={this.props.selectedQuestionId}
                    chatInputHandler={this.props.chatInputHandler}
                    chatInput={this.props.chatInput}
                    postMessage={this.props.postMessage}
                />
            </div>
        )
    }
}