const getAliveNeighboursCount = (board, rowIndex, colIndex) => {
  const start = Date.now();
  const prevRow = board[rowIndex - 1];
  const nextRow = board[rowIndex + 1];
  let count = 0;
  if (prevRow) {
     count += [prevRow[colIndex - 1], prevRow[colIndex], prevRow[colIndex + 1]].filter((c) => c).length;
  }
  count += [board[rowIndex][colIndex - 1], board[rowIndex][colIndex + 1]].filter((c) => c).length;
  if (nextRow) {
     count += [nextRow[colIndex - 1], nextRow[colIndex], nextRow[colIndex + 1]].filter((c) => c).length;
  }
  console.log(`getAliveNeighboursCount: ${Date.now() - start} ms`);
  return count;
};

export const getNextGeneration = (board) => {
  const start = Date.now();
  const nextGeneration = board.map((row, rIx, board) => row.map((cell, cIx) => {
    const aliveNeighborsCount = getAliveNeighboursCount(board, rIx, cIx);
    if (!cell) {
      return aliveNeighborsCount === 3 ? 1 : 0;
    }
    return aliveNeighborsCount < 2 || aliveNeighborsCount > 3 ? 0 : 1;
  }));
  console.log(`getNextGeneration: ${Date.now() - start} ms`);
  return nextGeneration;
}

export const getRandomBoard = (rows, cols) => {
  const start = Date.now();
  const board = (
    Array.from({length: rows}, () => (
      Array.from({length: cols}, () => Math.round(Math.random()))
    ))
  );
  console.log(`getRandomBoard: ${Date.now() - start} ms`);
  return board;
}
