import React from 'react';
import MyChatMsg from './my-chat-msg.jsx';
import ChatMsg from './chat-msg.jsx';
import $ from 'jquery';

export default class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
    }

  //   componentDidUpdate() {
  //      $('chat-box').scrollTop($('chat-box').height());
  //  }

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
            <div>
                {messages}
            </div>
        )
    }

}
