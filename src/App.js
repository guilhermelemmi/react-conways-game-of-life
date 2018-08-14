import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './Game.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game running cols={10} cells={[]} />
      </div>
    );
  }
}

export default App;
