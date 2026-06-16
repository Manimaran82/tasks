import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  render() {
    console.log("Render called");

    return (
      <div className='bg-blue-600 text-3xl text-white'>
        <h1>Hello, React Class Component!</h1>
      </div>
    );
  }
}

export default App;