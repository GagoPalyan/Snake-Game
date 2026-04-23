import { recordScores } from "../settings/levels/recordScore.js";
import { updateRecord } from "../settings/levels/updateRecord.js";

const gameOverScore = document.querySelector(".gameOverScore");

export function gameOver(snake) {
  const head = snake[0];
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

export function handleGameOver(
  state,
  gameLoop,
  modals,
  records,
  updateLevelButtons,
  recordScore,
) {
  if (!gameOver(state.snake)) return;

  clearInterval(gameLoop);
  gameOverScore.textContent = "Final Score : " + state.score;
  updateRecord(records, state.level, state.score);
  recordScores(records, state.level, recordScore);
  updateLevelButtons();
  modals.gameOver.style.display = "flex";
}

export function forceGameOver(
  state,
  gameLoop,
  modals,
  records,
  updateLevelButtons,
  recordScore,
) {
  clearInterval(gameLoop);
  gameOverScore.textContent = "Final Score : " + state.score;
  updateRecord(records, state.level, state.score);
  recordScores(records, state.level, recordScore);
  updateLevelButtons();
  modals.gameOver.style.display = "flex";
}
