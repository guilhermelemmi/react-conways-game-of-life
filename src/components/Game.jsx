import React, { Component } from 'react';
import { getNewBoard } from '../utils/boardUtils';

import Cell from './Cell';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = { board: this.props.board };
  };

  updateBoard = () => {
    this.setState({ board: getNewBoard() });
  }

  componentDidMount() {
    this.timer = setInterval(this.updateBoard, 10);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
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
    );
  }
};

export default Game;
