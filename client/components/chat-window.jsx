import React from 'react';
import ChatBox from './chat-box.jsx';

export default class ChatWindow extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            // <div className="chat-window">
            <div className="chat-window">
              <div>
                <center><h1>CHAT</h1></center>
              </div>
              <div className="messages-body">
                <ChatBox userName={this.props.userName} chatMessages={this.props.chatMessages}/>
              </div>
              <form onSubmit={this.props.postMessage.bind(null, this.props.id)}>
                <input type='text' placeholder="Write something..." value={this.props.chatInput} onChange={this.props.chatInputHandler}></input>
              </form>
            </div>
        )
    }
}
