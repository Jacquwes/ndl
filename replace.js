function enableMissclick(duration) {
  document
    .getElementById("impossibleInput")
    .addEventListener("keydown", addPing);
  setTimeout(() => {
    document
      .getElementById("impossibleInput")
      .removeEventListener("keydown", addPing);
  }, duration);
}

let previousValue = "";

function replaceChar() {
  // Remplace le char dans un cas sur 10
  if (Math.floor(Math.random() * 10) !== 0) {
    previousValue = document.getElementById("impossibleInput").value;
    return;
  }
  let initialValue = document.getElementById("impossibleInput").value;
  let cursorPosition =
    document.getElementById("impossibleInput").selectionStart;
  if (initialValue.length === 0 || initialValue.length < previousValue.length) {
    return;
  }
  console.log("pass");
  let newChar = "";
  let indice = 0;
  for (let i = 0; i < initialValue.length; i++) {
    if (initialValue[i] !== previousValue[i]) {
      newChar = initialValue[i];
      indice = i;
      break;
    }
  }
  if (newChar === "") {
    return;
  }
  // On définit une transformation qui transforme un caractère en caractère voisin
  let transformation = {
    a: ["z", "q"],
    z: ["a", "e", "s"],
    e: ["z", "r", "s", "d"],
    r: ["e", "t", "f", "d"],
    t: ["r", "y", "g", "f"],
    y: ["t", "u", "h", "g"],
    u: ["y", "i", "j", "h"],
    i: ["u", "o", "k", "j"],
    o: ["i", "p", "l", "k"],
    p: ["o", "m", "l"],
    q: ["a", "s"],
    s: ["q", "z", "e", "d"],
    d: ["s", "e", "r", "f"],
    f: ["d", "r", "t", "g"],
    g: ["f", "t", "y", "h"],
    h: ["g", "y", "u", "j"],
    j: ["h", "u", "i", "k"],
    k: ["j", "i", "o", "l"],
    l: ["k", "o", "p"],
    m: ["p", "o"],
    w: ["q", "a", "s", "x"],
    x: ["w", "s", "d", "c"],
    c: ["x", "d", "f", "v"],
    v: ["c", "f", "g", "b"],
    b: ["v", "g", "h", "n"],
    n: ["b", "h", "j", "m"],
  };
  let nextCharArray = transformation[newChar];
  if (nextCharArray === undefined) {
    previousValue = initialValue;
    return;
  }
  let nextChar =
    nextCharArray[Math.floor(Math.random() * nextCharArray.length)];

  initialValue =
    initialValue.substring(0, indice) +
    nextChar +
    initialValue.substring(indice + 1);
  previousValue = initialValue;

  document.getElementById("impossibleInput").value = initialValue;
  document
    .getElementById("impossibleInput")
    .setSelectionRange(cursorPosition, cursorPosition);
}
