import React from 'react';
import ChatBox from './chat-box.jsx';

export default class ChatWindow extends React.Component {
    constructor(props) {
        super(props)
        console.log('ChatWindow :', this.props);
    }
    render() {
        return (
            <div className="chat-window">
                <ChatBox userName={this.props.userName} chatMessages={this.props.chatMessages}/>
                <form>
                    <input type='text'></input>
                </form>
            </div>
        )
    }
}