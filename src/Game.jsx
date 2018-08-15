import React, { Component } from 'react';

import Cell from './Cell.jsx';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = { cells: this.props.cells };
  };

  getNeighbours = (cells, i) => {
    const cols = this.props.cols;
    const pRow = i - cols;
    const nRow = i + cols;
    return [
      cells[i - 1], cells[i + 1],
      cells[pRow - 1], cells[pRow], cells[pRow + 1],
      cells[nRow - 1], cells[nRow], cells[nRow + 1]
    ];
  }

  updateBoard = () => {
    const newCells = this.state.cells.map((cell, i, cells) => {
      const aliveNeighborsCount = this.getNeighbours(cells, i).filter((c) => c).length;
      if ( !cell ) {
        return aliveNeighborsCount === 3 ? 1 : 0;
      }
      return aliveNeighborsCount < 2 || aliveNeighborsCount > 3 ? 0 : 1;
    });
    this.setState({ cells: newCells });
  }

  componentDidMount() {
    this.timer = setInterval(this.updateBoard, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div
        style={{
          width: this.props.cols * 11,
          padding: 0,
          margin: 0
        }}
      >
      {
        this.state.cells.map((cell, i) => (
          <Cell key={`cell-${i}`} alive={cell} />
        ))
      }
      </div>
    );
  }
};

export default Game;
