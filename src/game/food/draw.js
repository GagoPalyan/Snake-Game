export function drawFood(cells, food, count) {
  cells.forEach((cell) => cell.classList.remove("food"));

  const ind = food.y * count + food.x;
  cells[ind].classList.add("food");
}
