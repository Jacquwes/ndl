
let buffer = [];
let previousValue = '';

async function packetLossLoop() {
    // Vérification de la présence d'un élément dans le buffer
    if(buffer.length > 0) {
        // Récupération du premier élément du buffer
        let packet = buffer.shift();
        // Attente du temps indiqué dans le packet
        setTimeout(() => {
            let input = document.querySelector('input');
            let value = input.value;
            input.value = value.substring(0, packet.indice) + packet.char + value.substring(packet.indice + 1);
        }, packet.time);
        // Remplacement du caractère à l'indice indiqué
    }
}

function addPing(e) {
    // if (Math.floor(Math.random() * 10) !== 0){
    //     // Récupération du dernier caractère
    //     return;
    // }
    let newchar = e.key;
    // Déduction de l'indice par le curseur
    let indice = e.target.selectionStart;
    console.log("pass");
    if(newChar === '') {
        return;
    }
    // Ajout de l'indice, du caractère et d'un nombre en millisecondes < 1000
    buffer.push({
        indice: indice,
        char: newChar,
        time: 500
    });
    // Retire le caractère lu de l'input
    console.log("initialValue", initialValue);
    document.querySelector('input').value = initialValue;
    e.preventDefault();
    Promise.resolve().then(packetLossLoop);
}
// document.querySelector('input').addEventListener('keypress', replaceChar);