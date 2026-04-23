export function drawSnake(cells, snake, count) {
  cells.forEach((cell) => {
    cell.classList.remove("snake", "snakeHead");
  });

  snake.forEach((item, index) => {
    const ind = item.y * count + item.x;
    cells[ind].classList.add("snake");

    if (index === 0) {
      cells[ind].classList.add("snakeHead");
    }
  });
}
