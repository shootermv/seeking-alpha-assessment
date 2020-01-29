import {prepareLiveCells} from './App';

test('prepareLiveCells method should return array', () => {
    const checkCell = () => {};
    const grid = [
      [0, 0, 0 ,0, 0],
      [0, 0, 0 ,0, 0],
      [0, 0, 0 ,0, 0],
      [0, 0, 0 ,0, 0],
      [0, 0, 0 ,0, 0],
    ]
    const checkSurrounds = () => {};
    const len = 3;
    const res = prepareLiveCells(checkCell, grid, checkSurrounds, len);
    
    expect(Array.isArray(res)).toBe(true);
  });
  
  test('prepareLiveCells method should call "checkCell" for each cell in grid', () => {
    const checkCell = jest.fn();
    const grid = [
      [0, 0]
    ]
    const checkSurrounds = () => {};
    const len = 3;
    prepareLiveCells(checkCell, grid, checkSurrounds, len);
    
    expect(checkCell).toHaveBeenCalledTimes(2);
  });