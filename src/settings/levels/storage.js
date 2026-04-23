export function loadLevel() {
  return localStorage.getItem("level") || "easy";
}

export function saveLevel(level) {
  localStorage.setItem("level", level);
}
