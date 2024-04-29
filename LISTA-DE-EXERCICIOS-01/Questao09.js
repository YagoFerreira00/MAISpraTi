const prompt = require('prompt-sync')();

const codigoDeOrigem = parseInt(prompt("Digite o código de origem do produto:"));

if (codigoDeOrigem >= 1 && codigoDeOrigem <= 4) {
    console.log("Sul");
} else if (codigoDeOrigem === 5 || codigoDeOrigem === 6) {
    console.log("Nordeste");
} else if (codigoDeOrigem >= 7 && codigoDeOrigem <= 9) {
    console.log("Sudeste");
} else if (codigoDeOrigem >= 10 && codigoDeOrigem <= 20) {
    console.log("Centro-Oeste");
} else if (codigoDeOrigem >= 25 && codigoDeOrigem <= 50) {
    console.log("Nordeste");
} else {
    console.log("Produto Importado");
}

// Exemplo de uso da função:
//identificarRegiao(15); // Deve imprimir "Centro-Oeste"
