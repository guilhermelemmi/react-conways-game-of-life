import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './Game.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game
          cols={7}
          cells={[0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1]}
        />
      </div>
    );
  }
}

export default App;
