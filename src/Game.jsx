import React, { Component } from 'react';

import Cell from './Cell.jsx';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = { cells: this.props.cells };
  };

  updateBoard = () => {
    const cols = this.props.cols;
    const c = this.state.cells;
    this.setState({
      cells: c.map((cell, i) => {
        const pRow = i - cols;
        const nRow = i + cols;
        const aNeighbours = [
          c[i - 1], c[i + 1],
          c[pRow - 1], c[pRow], c[pRow + 1],
          c[nRow - 1], c[nRow], c[nRow + 1]
        ].filter((c) => c).length;
        if ( !cell ) {
          return 8 - aNeighbours === 3 ? 1 : 0; 
        }
        return aNeighbours < 2 || aNeighbours > 3 ? 0 : 1;
      })
    });
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
