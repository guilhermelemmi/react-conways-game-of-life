import React, { Component } from 'react';
import './App.css';

import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game rows={100} columns={100} maxGeneration={5}/>
      </div>
    );
  }
}

export default App;
