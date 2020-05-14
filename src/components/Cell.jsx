import React from 'react';

const Cell = ({ alive }) => (
  <li className={alive ? 'cell-alive' : ''} />
);

export default Cell;
