import React from 'react';

const Cell = ({ alive }) => (
  <div
    style={{
      float: 'left',
      width: 10,
      height: 10,
      margin: 0,
      padding: 0,
      background: alive ? 'black' : 'white',
      border: '1px solid black',
      borderTop: 0,
      borderLeft: 0,
      position: 'relative',
      top: -1,
      left: -1
    }} />
);

export default Cell;
