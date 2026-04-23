const KEY = "snakeRecords";
export function loadRecords() {
  return (
    JSON.parse(localStorage.getItem(KEY)) || {
      easy: 0,
      medium: 0,
      hard: 0,
    }
  );
}

export function saveRecords(records) {
  localStorage.setItem(KEY, JSON.stringify(records));
}
