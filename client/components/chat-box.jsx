import React from 'react';
import MyChatMsg from './my-chat-msg.jsx';
import ChatMsg from './chat-msg.jsx';

export default class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        console.log('ChatWindow:', this.props);
    }
    render() {
        let messages = [];
        this.props.chatMessages.forEach((message) => {
            if (this.props.userName === message.userName) {
                messages.push(<MyChatMsg 
                    userName={message.userName}
                    message={message.message}
                    created_at={message.created_at}/>);
            } else {
                messages.push(<ChatMsg 
                    userName={message.userName}
                    message={message.message}
                    created_at={message.created_at}/>);
            }
        })
        return (
            <div className="chat-box">
                {messages}
            </div>
        )
    }

}