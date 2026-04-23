const board = document.querySelector(".board");

export function snakeBoard(count, cells, grid) {
  grid.classList.add("grid");

  grid.style.gridTemplateColumns = `repeat(${count}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${count}, 1fr)`;

  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      const cell = document.createElement("div");

      cell.classList.add("cell");
      cells.push(cell);

      if ((i + j) % 2 === 0) {
        cell.classList.add("cell-dark");
      }
      grid.append(cell);
    }
  }
  board.append(grid);

  return grid;
}
