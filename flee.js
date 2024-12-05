// L'objectif est de déplacer de manière aléatoire un input quand on détecte que la souris de l'utilisateur est proche de l'input.
let counter = 10;

const input = document.getElementById("mainButton");
const bodyWidth = window.innerWidth;
const bodyHeight = window.innerHeight;

document.addEventListener("mousemove", flee);

function getRandomPosition() {
  const maxX = bodyWidth - input.offsetWidth;
  const maxY = bodyHeight - input.offsetHeight;

  return {
    x: Math.floor(Math.random() * maxX),
    y: Math.floor(Math.random() * maxY),
  };
}

function flee(event) {
  const inputRect = input.getBoundingClientRect();
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // vérifie si la souris est sur l'inputes
  if (
    mouseX >= inputRect.left &&
    mouseX <= inputRect.right &&
    mouseY >= inputRect.top &&
    mouseY <= inputRect.bottom &&
    counter > 0
  ) {
    input.style.position = "absolute";
    if (counter === 5) input.textContent += " XD";
    const newPosition = getRandomPosition();
    input.style.left = `${newPosition.x}px`;
    input.style.top = `${newPosition.y}px`;
    counter--;
  }
}
