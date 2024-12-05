
let buffer = [];
let previousString = '';
let id = 0;

async function packetLossLoop(id_) {
    if(buffer.length > 0) {
        while(buffer[0].id !== id_) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
        let packet = buffer[0];
        setTimeout(() => {
            let input = document.querySelector('input');
            let value = input.value;
            input.value = value.substring(0, packet.indice) + packet.char + value.substring(packet.indice + 1);
            buffer = buffer.filter(packet => packet.id !== id_);
        }, packet.time);
    }
}

function addPing(e) {
    let newChar = e.key;
    // Vérification que le caractère est un caractère alphanumérique
    if(!newChar.match(/^.$/i)) {
        return; 
    }
    let indice = e.target.selectionStart;
    console.log("indice avant: " + indice);
    for(let i = 0; i < buffer.length; i++) {
        if(buffer[i].indice <= indice) {
            indice++;
        }
    }
    console.log("indice après: " + indice);
    console.log("pass");
    if(newChar === '') {
        return;
    }
    // Ajout de l'indice, du caractère et d'un nombre en millisecondes < 1000
    buffer.push({
        id: id++,
        indice: indice,
        char: newChar,
        time: Math.floor(Math.random() * 300)
    });
    // Retire le caractère lu de l'input
    e.preventDefault();
    Promise.resolve().then(() => packetLossLoop(id-1));
}