import React, { Component } from 'react';
import { getNextGeneration, getRandomBoard } from '../utils/boardUtils';

import Cell from './Cell';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState(props.rows, props.columns, props.maxGeneration);
  };

  updateBoard = () => {
    if (this.state.generation < this.state.maxGeneration) {
      const start = Date.now();
      const nextGeneration = this.state.generation + 1;
      this.setState({
        board: getNextGeneration(this.state.board),
        generation: nextGeneration,
      }, () => {
        console.log(`updateBoard: ${Date.now() - start} ms`);
      });
    } else {
      this.stop();
    }
  }

  play = () => {
    const start = Date.now();
    this.timer = setInterval(this.updateBoard, 0);
    this.setState({
      board: getRandomBoard(this.state.rows, this.state.columns),
      playing: true,
      generation: 0,
      startTime: Date.now(),
      endTime: 0,
    }, () => {
      console.log(`play: ${Date.now() - start} ms`);
    });
  };

  stop = () => {
    const start = Date.now();
    this.cleanUp();
    this.setState({
      playing: false,
      endTime: Date.now(),
    }, () => {
      console.log(`stop: ${Date.now() - start} ms`);
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

  handleMaxGenerationsChange = (e) => {
    this.setState({ maxGeneration: e.target.value });
  }

  handleReset = () => {
    this.cleanUp();
    this.setState(this.getInitialState(this.state.rows, this.state.columns, this.state.maxGeneration));
  };

  getInitialState = (rows, columns, maxGeneration) => ({
    board: getRandomBoard(rows, columns),
    maxGeneration,
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
    const start = Date.now();
    const game = (
      <div className="game-wrapper">
        <div className="board">
          {
            this.state.board.map((row, i) => (
              <div key={`row-${i}`} className="board-row">
                { row.map((cell, j) => <Cell key={`cell-${j}`} alive={cell} />) }
              </div>
            ))
          }
        </div>
        <div className="control-panel">
          <div className="controls">
            Rows: <input type="text" name="rows" value={this.state.rows} onChange={this.handleRowsChange} /> <br />
            Columns: <input type="text" name="columns" value={this.state.columns} onChange={this.handleColumnsChange} /> <br />
            Max Generation: <input type="text" name="maxGeneration" value={this.state.maxGeneration} onChange={this.handleMaxGenerationsChange} /> <br />
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
    console.log(`render: ${Date.now() - start} ms`);
    return game;
  }
};

export default Game;
