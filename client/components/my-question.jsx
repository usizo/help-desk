import React from 'react';

export default class MyQuestion extends React.Component {
    constructor() {
        super();
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
//     render() {
//         return (
//             <div className="my-question" onClick={this.props.setSelectedQuestionChat.bind(null, this.props.id)}>
//                 <div className="who-when">
//                     <h1>{this.props.userName}</h1>
//                     <h2>{this.props.created_at}</h2>
//                 </div>
//                 <div className="user-question">
//                     <p>{this.props.question}</p>
//                     <div className='resolve'>Resolved!</div>
//                 </div>
//             </div>
//         )
//     }
// }
