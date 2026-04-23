import { createFood } from "../game/food/create.js";
import { createSnake } from "../game/snake/move.js";
import { closeAllModals } from "./modals.js";

export function resetGame(state, count,currentScore) {
  state.snake = createSnake()
  state.pos = { x: 1, y: 0 };
  state.nextPos = { x: 1, y: 0 };
  state.score = 0;
  state.food = createFood(count);
  currentScore.textContent = state.score
}

export function restartGame(state,gameLoop,startGame,count,modals,currentScore){
    clearInterval(gameLoop);
    resetGame(state,count,currentScore)
    closeAllModals()
    startGame();
}