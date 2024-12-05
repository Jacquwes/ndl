function enableBrokenKeyboard(duration) {
  document.getElementById("impossibleInput").addEventListener("keydown", brokenKeyboard);
  setTimeout(() => {
    document.getElementById("impossibleInput").removeEventListener("keydown", brokenKeyboard);
  }, duration);
}

function brokenKeyboard(e) {
  if (e.key == "e") e.preventDefault();
}
