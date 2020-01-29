import { checkSurrounds } from "./App";

test("checkSurrounds should return number of 'live' cells (if there are 2)", () => {
  const x = 1;
  const y = 1;
  const len = 3;
  const grid = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
  ];
  const res = checkSurrounds(x, y, grid, len);
  expect(res).toBe(2);
});

test("checkSurrounds should return number of 'live' cells even if the cell is not fully surrounded", () => {
  const x = 0;
  const y = 0;
  const len = 3;
  const grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 1, 1]
  ];
  const res = checkSurrounds(x, y, grid, len);
  expect(res).toBe(0);
});
