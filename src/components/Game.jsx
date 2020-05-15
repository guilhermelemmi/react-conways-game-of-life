import React, { Component } from 'react';
import { getNextGeneration, getRandomBoard } from '../utils/boardUtils';

import Cell from './Cell';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState(props.rows, props.columns);
  };

  updateBoard = () => {
    const nextGeneration = this.state.generation + 1;
    this.setState({
      board: getNextGeneration(this.state.board),
      generation: nextGeneration,
    });
  }

  play = () => {
    this.timer = setInterval(this.updateBoard, 0);
    this.setState({
      board: getRandomBoard(this.state.rows, this.state.columns),
      playing: true,
      generation: 0,
      startTime: Date.now(),
      endTime: 0,
    });
  };

  stop = () => {
    this.cleanUp();
    this.setState({
      playing: false,
      endTime: Date.now(),
    });
  };

  cleanUp = () => {
    clearInterval(this.timer);
  }

  handlePlayChange = () => {
    if (this.state.playing) {
      this.stop();
    } else {
      this.play();
    }
  };

  handleRowsChange = (e) => {
    this.setState({ rows: e.target.value });
  }

  handleColumnsChange = (e) => {
    this.setState({ columns: e.target.value });
  }

  handleReset = () => {
    this.cleanUp();
    this.setState(this.getInitialState(this.state.rows, this.state.columns));
  };

  getInitialState = (rows, columns) => ({
    board: getRandomBoard(rows, columns),
    playing: false,
    generation: 0,
    startTime: 0,
    endTime: 0,
    rows,
    columns
  });

  componentWillUnmount() {
    this.onStop();
  }

  render() {
    return (
      <div className="game-wrapper">
        <ul className="board">
          {
            this.state.board.map((row, i) => (
              <li key={`row-${i}`}>
                <ul className="board-row">
                  { row.map((cell, j) => <Cell key={`cell-${j}`} alive={cell} />) }
                </ul>
              </li>
            ))
          }
        </ul>
        <div className="control-panel">
          <div className="controls">
            Rows: <input type="text" name="rows" value={this.state.rows} onChange={this.handleRowsChange} /> <br />
            Columns: <input type="text" name="columns" value={this.state.columns} onChange={this.handleColumnsChange} /> <br />
            <input type="button" value={this.state.playing ? 'Stop' : 'Play'} onClick={this.handlePlayChange} />
            <input type="button" value='Reset' onClick={this.handleReset} />
          </div>
          <div className="statistics">
            Generation: {this.state.generation} <br />
            Ellapsed time: {this.state.endTime && this.state.endTime - this.state.startTime} ms
          </div>
        </div>
      </div>
    );
  }
};

export default Game;
