import React from 'react';

export default class ChatMsg extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
          // <div className="question" onClick={this.props.setSelectedQuestionChat.bind(null, this.props.id)}>
          //   <div className="question-header">
          //     <span className="asker">{this.props.userName}</span>
          //     <span className="question-time">{this.props.created_at}</span>
          //   </div>
          //   <div className="user-question">
          //     <p>{this.props.question}</p>
          //   </div>
          // </div>
            <div className="message">
              <div className="message-header">
                <span className="user">{this.props.userName}</span>
                <span className="message-time">{this.props.created_at}</span>
              </div>
                <div className="user-message">
                    <p>{this.props.message}</p>
                </div>
            </div>
        )
    }
}
