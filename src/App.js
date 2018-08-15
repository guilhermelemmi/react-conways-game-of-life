import React, { Component } from 'react';
import './App.css';

import Game from './Game.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game
          cells={[
            [0, 0, 0, 1, 0, 0, 0],
            [0, 1, 1, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 0, 0]
          ]}
        />
      </div>
    );
  }
}

export default App;
