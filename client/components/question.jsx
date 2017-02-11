import React from 'react';

export default class Question extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="question" onClick={this.props.setSelectedQuestionChat.bind(null, this.props.id)}>
        <div className="question-header">
          <span className="asker">{this.props.userName}</span>
          <span className="question-time">{this.props.created_at}</span>
        </div>
        <div className="user-question">
          <p>{this.props.question}</p>
        </div>
      </div>
    );
  }
}
