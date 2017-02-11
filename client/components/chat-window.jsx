import React from 'react';
import ChatBox from './chat-box.jsx';

export default class ChatWindow extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="chat-window">
              <div>
                <center><h1>CHAT</h1></center>
              </div>
                <ChatBox userName={this.props.userName} chatMessages={this.props.chatMessages}/>
                <form>
                    <input type='text'></input>
                </form>
            </div>
        )
    }
}
