import React, { Component } from 'react';
import { render } from 'react-dom';
import Container from './Container.jsx';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="outer-container">
        <Login />
        {/* <Container /> */}
      </div>
    );
  }
}

export default App;
