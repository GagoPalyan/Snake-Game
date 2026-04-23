import { buttons } from "../../ui/buttons.js";
export function clearActive() {
  buttons.easy.classList.remove("active");
  buttons.medium.classList.remove("active");
  buttons.hard.classList.remove("active");
}

// export function setActiveLevel(level){
//     clearActive();
//     buttons[level].classList.add('active')
// }
