import React, { Component } from 'react';
import ContainerSmall from './curt-ContainerSmall.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    // function bindings
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      user: '',
    };
  }

  // functions
  handleChange(event) {
    event.target.id === 'username' ?
    this.setState({ username: event.target.value }) :
    this.setState({ password: event.target.value });
  }

  handleSubmit() {
    console.log('username', this.state.username);
    console.log('password', this.state.password);

    // post to server
    $.post('/update', () => {

    }).then(() => {
      this.setState({user: 'JoeBob'})
    })
  }

  // displayed on page
  render() {
    return (
      <div className="container-small">
        <ContainerSmall handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
