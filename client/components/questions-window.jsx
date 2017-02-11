import React from 'react';
import Question from './question.jsx';
import MyQuestion from './my-question.jsx';

export default class QuestionWindow extends React.Component {
    render() {
        const questions = [];
        for (var key in this.props.questions) {
            if (this.props.userName === this.props.questions[key].userName) {
                questions.push(<MyQuestion
                setSelectedQuestionChat={this.props.setSelectedQuestionChat}
                id={this.props.questions[key].id}
                userName={this.props.questions[key].userName}
                created_at={this.props.questions[key].created_at}
                question={this.props.questions[key].question}
            />)
            } else {
                questions.push(<Question
                    setSelectedQuestionChat={this.props.setSelectedQuestionChat}
                    id={this.props.questions[key].id}
                    userName={this.props.questions[key].userName}
                    created_at={this.props.questions[key].created_at}
                    question={this.props.questions[key].question}
                />)
            }
        }
        return (
            <div className="questions-window">
              <div>
                <center><h1>QUESTIONS</h1></center>
              </div>
              <div className="questions-body">
                {questions}
              </div>
            </div>
        )
    }
}
