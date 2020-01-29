import { drawLiveCells } from "./App";

test("drawLiveCells method should place '1' value at x,y location inside grid array", () => {
  const liveCells = [[0, 0]];
  const grid = [[0]];
  drawLiveCells(liveCells, grid);

  expect(grid[0][0]).toBe(1);
});
