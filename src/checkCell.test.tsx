import { checkCell } from "./App";

test("checkCell method should call checkSurrounds", () => {
  const x = 0;
  const y = 0;
  const checkSurrounds = jest.fn();
  const len = 5;
  const grid = [[]];
  checkCell(x, y, grid, checkSurrounds, len);

  expect(checkSurrounds).toHaveBeenCalled();
});

test('checkCell should return "true" if "checkSurrounds" returns 3', () => {
  const checkSurrounds = jest.fn(x => 3);
  const len = 1;
  const grid = [[]];
  const res = checkCell(0, 0, grid, checkSurrounds, len);
  expect(res).toBeTruthy();
});

test('checkCell should return "true" if "checkSurrounds" returns 2 and the cell is "live"', () => {
  const checkSurrounds = jest.fn(x => 2);
  const len = 1;
  const grid = [[1]];
  const res = checkCell(0, 0, grid, checkSurrounds, len);
  expect(res).not.toBeFalsy();
});

test('checkCell should return "false" if "checkSurrounds" returns 4 and the cell is "live" (OVERPOPULATION)', () => {
  const checkSurrounds = jest.fn(x => 4);
  const len = 1;
  const grid = [[1]];
  const res = checkCell(0, 0, grid, checkSurrounds, len);
  expect(res).toBeFalsy();
});

test('checkCell should return "false" if "checkSurrounds" returns 0 and the cell is "live" (UNDERPOPULATION)', () => {
  const checkSurrounds = jest.fn(x => 0);
  const len = 1;
  const grid = [[1]];
  const res = checkCell(0, 0, grid, checkSurrounds, len);
  expect(res).toBeFalsy();
});

test('checkCell should return "true" if "checkSurrounds" returns 3 and the cell is "dead" (REPRODUCTION)', () => {
  const checkSurrounds = jest.fn(x => 3);
  const len = 1;
  const grid = [[0]];
  const res = checkCell(0, 0, grid, checkSurrounds, len);
  expect(res).toBeTruthy();
});
