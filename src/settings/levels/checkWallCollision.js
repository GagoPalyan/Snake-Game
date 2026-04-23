export function checkWallCollision(head, count, level) {
  if (level !== "hard") return;
  if (head.x < 0 || head.x >= count || head.y < 0 || head.y >= count) {
    return true;
  }
  return false;
}
