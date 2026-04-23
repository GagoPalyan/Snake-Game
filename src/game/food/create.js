export function createFood(count) {
  return {
    x: Math.floor(Math.random() * count),
    y: Math.floor(Math.random() * count),
  };
}
