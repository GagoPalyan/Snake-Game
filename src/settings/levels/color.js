export function setLevelColor(level, grid) {
  grid.classList.remove("level-easy", "level-medium", "level-hard");
  grid.classList.add("level-" + level);
}
