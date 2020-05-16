import React from 'react';

const Cell = ({ alive }) => (
  <div className={alive ? 'cell cell-alive' : 'cell'} />
);

export default Cell;
