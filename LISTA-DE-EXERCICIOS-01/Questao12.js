const prompt = require('prompt-sync')();

// Função para encontrar e exibir números com resto 5 quando divididos por 11
function numerosComRestoCinco() {
    console.log("Números entre 1000 e 1999 que divididos por 11 dão resto 5:");
    for (let i = 1000; i <= 1999; i++) {
        if (i % 11 === 5) {
            console.log(i);
        }
    }
}

// Chamar a função para executar o algoritmo
numerosComRestoCinco();
