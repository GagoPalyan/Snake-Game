import { getSound } from "./toggle.js";

const sound = new Audio("./sound/eatSound.mp3");
export function playSound() {
  if (getSound()) {
    sound.currentTime = 0;
    sound.play();
  }
}
