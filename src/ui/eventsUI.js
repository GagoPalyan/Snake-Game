import { renderSound, toggleSound } from "../settings/sound/toggle.js";
import { handlePauseKey } from "./pause.js";
import { pauseGame } from "./pause.js";
import { resetGame } from "./restartGame.js";
export function eventsUI({
  buttons,
  modals,
  startGame,
  resumeGame,
  restartGame,
  closeAllModals,
  state,
  gameLoop,
  count,
  currentScore,
  setLoop,
  levels,
  game,
}) {
  buttons.startGame.addEventListener("click", () => {
    closeAllModals();
    startGame(game, levels, state.level, setLoop, gameLoop);
  });

  document.addEventListener("keydown", handlePauseKey);

  buttons.pause.addEventListener("click", () => {
    pauseGame();
  });

  buttons.resume.addEventListener("click", () => {
    resumeGame(startGame);
  });

  buttons.restart.addEventListener("click", () => {
    restartGame(state, gameLoop, startGame, count, modals, currentScore);
  });

  buttons.mainMenu.addEventListener("click", () => {
    resetGame(state, count, currentScore);
    closeAllModals();
    modals.start.style.display = "flex";
  });

  buttons.gameOverRestart.addEventListener("click", () => {
    restartGame(state, gameLoop, startGame, count, modals, currentScore);
  });

  buttons.gameOverBtnMainMenu.addEventListener("click", () => {
    resetGame(state, count, currentScore);
    closeAllModals();
    modals.start.style.display = "flex";
  });

  buttons.settings.addEventListener("click", () => {
    modals.settings.style.display = "flex";
  });

  buttons.btnVolume.addEventListener("click", () => {
    toggleSound();
    renderSound();
  });
}
