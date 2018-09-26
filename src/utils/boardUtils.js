const getAliveNeighboursCount = (board, rowIndex, colIndex) => {
  const prevRow = board[rowIndex - 1];
  const nextRow = board[rowIndex + 1];
  return [
    prevRow && prevRow[colIndex - 1],
    prevRow && prevRow[colIndex],
    prevRow && prevRow[colIndex + 1],
    board[rowIndex][colIndex - 1],
    board[rowIndex][colIndex + 1],
    nextRow && nextRow[colIndex - 1],
    nextRow && nextRow[colIndex],
    nextRow && nextRow[colIndex + 1],
  ].filter((c) => c).length;
};

export const getNewBoard = (board) => board.map((row, rIx, board) => row.map((cell, cIx) => {
  const aliveNeighborsCount = getAliveNeighboursCount(board, rIx, cIx);
  if ( !cell ) {
    return aliveNeighborsCount === 3 ? 1 : 0;
  }
  return aliveNeighborsCount < 2 || aliveNeighborsCount > 3 ? 0 : 1;
}));
