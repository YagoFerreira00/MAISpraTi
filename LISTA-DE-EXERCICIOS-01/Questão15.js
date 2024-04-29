const prompt = require('prompt-sync')();

let somaDosProdutos = 0;
let somaDosPesos = 0;
let numero = parseFloat(prompt("Digite um número decimal (ou 0 para sair):"));

while (numero !== 0) {
    const peso = parseFloat(prompt("Digite o peso do número:"));
    somaDosProdutos += numero * peso;
    somaDosPesos += peso;
    numero = parseFloat(prompt("Digite um número decimal (ou 0 para sair):"));
}

const mediaPonderada = somaDosProdutos / somaDosPesos;
console.log(`A média ponderada é: ${mediaPonderada}`);