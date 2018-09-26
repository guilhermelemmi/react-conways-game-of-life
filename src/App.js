import React, { Component } from 'react';
import './App.css';

import Game from './components/Game';

function getRandomBoard(rows, cols) {
  const rtn = [];
  for (let i = 0; i < rows; i++) {
    rtn.push(Array.from({length: cols}, () => Math.round(Math.random())));
  }
  return rtn;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game
          board={getRandomBoard(200, 200)}
        />
      </div>
    );
  }
}

export default App;
