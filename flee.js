// L'objectif est de déplacer de manière aléatoire un input quand on détecte que la souris de l'utilisateur est proche de l'input.


const input = document.getElementById('imposibleInput');
const bodyWidth = window.innerWidth;
const bodyHeight = window.innerHeight;

function getRandomPosition() {
    const maxX = bodyWidth - input.offsetWidth;
    const maxY = bodyHeight - input.offsetHeight;
    
    return {
        x: Math.floor(Math.random() * maxX),
        y: Math.floor(Math.random() * maxY)
    };
}

function flee(event) {
    const inputRect = input.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculer la distance entre la souris et l'input
    const distance = Math.sqrt(
        Math.pow(mouseX - (inputRect.left + inputRect.width / 2), 2) +
        Math.pow(mouseY - (inputRect.top + inputRect.height / 2), 2)
    );

    // Définir un seuil de distance (par exemple 100 pixels)
    const threshold = 50;


    // Si la souris est proche, déplacer l'input
    if (distance < threshold) {
        const newPosition = getRandomPosition();
        input.style.left = `${newPosition.x}px`;
        input.style.top = `${newPosition.y}px`;
    }
}

