import { playSound } from "../../settings/sound/play.js";
import { createFood } from "../food/create.js";

export function eatFood(state, count, eat, currentScore) {
  if (!eat) return;
  state.food = createFood(count);
  state.score++;
  currentScore.textContent = state.score;
  playSound();
}
