export function createSnake() {
  // const center = Math.floor(count/2)
  return [
    { x: 8, y: 6 },
    { x: 7, y: 6 },
    { x: 6, y: 6 },
  ];
}

export function moveSnake(head, snake, eat) {
  snake.unshift(head);

  if (!eat) {
    snake.pop();
  }
  return head;
}
