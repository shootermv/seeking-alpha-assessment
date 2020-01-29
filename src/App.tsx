import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from "./Cell";

const grid = [...Array(50)].map(() => [...Array(50)]);
// generates array of 2 random coordinates
const rand = () => {
  return [Math.floor(Math.random() * 49), Math.floor(Math.random() * 49)];
};

const len = grid[0].length - 1;
// generate randomally 1500 live cells
let liveCells = [...Array(1500)].map(() => [...rand()]);

// sets live cells to "1" (so they becomes live)
export const drawLiveCells = (liveCells: number[][], grid: number[][]) => {
  grid.forEach(row => row.fill(0)); //fill all grid with zeros
  liveCells.forEach(([x, y]) => (grid[y][x] = 1));
};
// checks all 8 surrondings cells around the cell and counts the 'live' cells
export const checkSurrounds = (x: number, y: number, grid: number[][], len: number) => {
  let counter = 0;
  if (x > 0) counter += grid[y][x - 1];
  if (x < len) counter += grid[y][x + 1];

  if (y < len && x > 0) counter += grid[y + 1][x - 1];
  if (y < len) counter += grid[y + 1][x];
  if (y < len && x < len) counter += grid[y + 1][x + 1];

  if (y > 0 && x > 0) counter += grid[y - 1][x - 1];
  if (y > 0) counter += grid[y - 1][x];
  if (y > 0 && x < len) counter += grid[y - 1][x + 1];
  return counter;
};
// checks the cell and returns 'true' or 'false' indication whether this cell should consider "live" at next tick
export const checkCell = (x: number, y: number, grid: number[][], checkSurrounds: Function, len: number) => {
  let counter = checkSurrounds(x, y, grid, len);
  return (counter === 2 && grid[y][x]) || counter === 3;
};
// goes through every cell at grid and checks if it should become "live" 
// if it is - the cell coordinates added to array being returned
export const prepareLiveCells = (checkCell: Function, grid: number[][], checkSurrounds: Function, len: number) => {
  const _liveCells: number[][] = [];
  grid.forEach((row, y) =>
    row.forEach((col, x) => checkCell(x, y, grid, checkSurrounds, len) && _liveCells.push([x, y]))
  );
  return _liveCells;
};

const App: React.FC = () => {
  // counter uses to trigger 'rerendering'
  const [counter, setCounter] = useState(0);
  setTimeout(() => {
    drawLiveCells(liveCells, grid);
    liveCells = prepareLiveCells(checkCell, grid, checkSurrounds, len);
    setCounter(counter + 1);
  }, 1000);
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App">
        {grid.flat(1).map((i, idx) => (
          <Cell key={`key-${idx}`} i={i} />
        ))}
      </div>
      
    </div>
  );
}

export default App;
