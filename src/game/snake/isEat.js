export function isEat(nextHead, state) {
  return nextHead.x === state.food.x && nextHead.y === state.food.y;
}
