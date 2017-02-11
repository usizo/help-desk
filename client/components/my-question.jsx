import React from 'react';

export default class MyQuestion extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="my-question">
                <div className="who-when">
                    <h1>{this.props.userName}</h1>
                    <h2>{this.props.created_at}</h2>
                </div>
                <div className="user-question">
                    <p>{this.props.question}</p>
                    <div className='resolve'>Resolved!</div>
                </div>
            </div>
        )
    }
}