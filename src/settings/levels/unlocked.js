import { levels } from "./data.js";

export function isUnlocked(level, records) {
  if (level === "easy") return true;
  if (level === "medium") {
    return records.easy >= levels.medium.unlockScore;
  }
  if (level === "hard") {
    return records.medium >= levels.hard.unlockScore;
  }
  return false;
}
