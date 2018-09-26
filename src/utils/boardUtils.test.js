import { getNewBoard } from './boardUtils';

describe('Next step board', () =>{
  it('should calculate the next step', () => {
    const board = [
      [0, 0, 0, 1, 1, 0, 0],
      [1, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 1, 1]
    ];
    expect(getNewBoard(board)).toEqual([
      [0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ]);
  });
});