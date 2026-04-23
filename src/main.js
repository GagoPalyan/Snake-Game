import { snakeBoard } from "./controls/snakeBoard.js";
import { drawSnake } from "./game/snake/draw.js";
import { drawFood } from "./game/food/draw.js";
import { createSnake, moveSnake } from "./game/snake/move.js";
import { createFood } from "./game/food/create.js";
import { setupKeyboard } from "./controls/keyboard.js";
import { state } from "./state/state.js";
import { modals,closeAllModals } from "./ui/modals.js";
import { buttons } from "./ui/buttons.js";

import { setLoop,resumeGame } from "./ui/pause.js";
import { levels } from "./settings/levels/data.js";
import { teleportSnake } from "./controls/teleport.js";
import { handleGameOver,forceGameOver } from "./ui/gameOver.js";
import { eatFood } from "./game/snake/eat.js";
import { restartGame } from "./ui/restartGame.js";
import { eventsUI } from "./ui/eventsUI.js";
import { settingsUI } from "./settings/settingsUI.js";
import { isUnlocked } from "./settings/levels/unlocked.js";
import { loadRecords } from "./settings/levels/records.js";
import { checkWallCollision } from "./settings/levels/checkWallCollision.js";
import { themeMode } from "./settings/theme/mode.js";
import { mobileControl } from "./controls/mobile.js";
import { isEat } from "./game/snake/isEat.js";
import { setLevelColor } from "./settings/levels/color.js";

const grid = document.createElement("div");
const currentScore = document.querySelector(".score");
const recordScore = document.querySelector(".recordScoreNum");
const cells = [];
const count = 17;

snakeBoard(count, cells,grid);
setLevelColor(state.level,grid);
state.snake = createSnake();
state.food = createFood(count);

setupKeyboard(state);

let gameLoop = null;
function startGame() {
  clearInterval(gameLoop);
  gameLoop = setInterval(game, levels[state.level].speed);
  setLoop(gameLoop);
}

function game() {
  state.pos = state.nextPos;
  const nextHead = {
    x: state.snake[0].x + state.pos.x,
    y: state.snake[0].y + state.pos.y,
  };

  if (state.level === "hard" && checkWallCollision(nextHead, count, state.level)) {
    forceGameOver(state, gameLoop, modals, records, updateLevelButtons, recordScore);
    return;
  }

  teleportSnake(nextHead, count, state.level);
  
  const eat = isEat(nextHead, state);
  moveSnake(nextHead, state.snake,eat);
  handleGameOver(state, gameLoop, modals, records, updateLevelButtons, recordScore);
  eatFood(state, count, eat, currentScore);

  drawSnake(cells, state.snake, count);
  drawFood(cells, state.food, count);
}


eventsUI({
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
});

const records = loadRecords()
const {updateLevelButtons} = settingsUI({
  buttons,
  modals,
  state,
  records,
  isUnlocked,
  recordScore,
  grid
});

themeMode()
mobileControl(state)
