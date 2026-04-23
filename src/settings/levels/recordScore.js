import { loadRecords } from "./records.js";

export function recordScores(records, level, recordScore) {
  recordScore.textContent = records[level];
}

const records = loadRecords();
const savedLevel = localStorage.getItem("level") || "easy";
const recordScore = document.querySelector(".recordScoreNum");

if (recordScore) {
  recordScores(records, savedLevel, recordScore);
}
