import React from 'react';

export default class NewQuestion extends React.Component {
    render() {
        return (
            <div className="new-question">
                <h1>New Question</h1>
                <form onSubmit={this.props.postNewQuestion}>
                    <input type="text" value={this.props.newQuestionInput} onChange={this.props.newQuestionInputHandler} placeholder="Ask a Question..."></input>
                </form>
            </div>
        )
    }
}