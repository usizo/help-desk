import React from 'react';

export default class ChatMsg extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="msg">
                <div className="who-when">
                    <h1>{this.props.userName}</h1>
                    <h2>{this.props.created_at}</h2>
                </div>
                <div className="chat-message">
                    <p>{this.props.message}</p>
                </div>
            </div>
        )
    }
}