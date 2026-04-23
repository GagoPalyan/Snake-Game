import { loadLevel } from "../settings/levels/storage.js";

export const state = {
  snake: [
    { x: 8, y: 6 },
    { x: 7, y: 6 },
    { x: 6, y: 6 },
  ],
  food: { x: 0, y: 0 },
  pos: { x: 1, y: 0 },
  nextPos: { x: 1, y: 0 },
  score: 0,
  paused: false,
  level: loadLevel(),
};
