import React, { Component } from 'react';

import Cell from './Cell.jsx';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = { cells: this.props.cells };
  };

  getAliveNeighboursCount = (cells, rowIndex, colIndex) => {
    const prevRow = cells[rowIndex - 1];
    const nextRow = cells[rowIndex + 1];
    return [
      prevRow && prevRow[colIndex - 1],
      prevRow && prevRow[colIndex],
      prevRow && prevRow[colIndex + 1],
      cells[rowIndex][colIndex - 1],
      cells[rowIndex][colIndex + 1],
      nextRow && nextRow[colIndex - 1],
      nextRow && nextRow[colIndex],
      nextRow && nextRow[colIndex + 1],
    ].filter((c) => c).length;
  }

  updateBoard = () => {
    const newCells = this.state.cells.map((row, rIx, cells) => row.map((cell, cIx) => {
      const aliveNeighborsCount = this.getAliveNeighboursCount(cells, rIx, cIx);
      if ( !cell ) {
        return aliveNeighborsCount === 3 ? 1 : 0;
      }
      return aliveNeighborsCount < 2 || aliveNeighborsCount > 3 ? 0 : 1;
    }));
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
      <ul className="board">
        {
          this.state.cells.map((row, i) => (
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
