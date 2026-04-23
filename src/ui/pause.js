import { modals } from "./modals.js";

let loop = null;
let paused = false;

export function setLoop(newLoop) {
  loop = newLoop;
}

export function pauseGame() {
  if (loop === null) return;

  clearInterval(loop);
  modals.pause.style.display = "flex";
  paused = true;
}

export function handlePauseKey(event) {
  if (event.key === "p") {
    pauseGame();
  }
}

export function resumeGame(startGame) {
  if (!paused) return;

  modals.pause.style.display = "none";
  startGame();

  paused = false;
}
