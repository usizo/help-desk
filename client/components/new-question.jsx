import React from 'react';

export default class NewQuestion extends React.Component {
    render() {
        return (
            <div className="new-question">
                <form onSubmit={this.props.postNewQuestion}>
                    <input type="text" value={this.props.newQuestionInput} onChange={this.props.newQuestionInputHandler} placeholder="Ask a Question..."></input>
                </form>
            </div>
        )
    }
}
