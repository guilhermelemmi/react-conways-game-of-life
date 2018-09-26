import React from 'react';

const Cell = ({ alive }) => (
  <li className={`cell ${alive ? 'cell-alive' : ''}`} />
);

export default Cell;
