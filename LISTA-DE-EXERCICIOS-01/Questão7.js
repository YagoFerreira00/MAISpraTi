const prompt = require('prompt-sync')();

// Função para calcular o valor total da compra de maçãs
function calcularValorTotalMacas() {
    // Ler o número de maçãs compradas
    let numeroDeMacas = parseInt(prompt("Digite o número de maçãs compradas:"));
    let valorTotal;

    // Calcular o valor total da compra
    if (numeroDeMacas < 12) {
        valorTotal = numeroDeMacas * 0.30; // Preço por maçã é R$ 0,30 se menos de uma dúzia
    } else {
        valorTotal = numeroDeMacas * 0.25; // Preço por maçã é R$ 0,25 se pelo menos uma dúzia
    }

    // Escrever o valor total da compra
    console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`);
}

// Chamar a função para executar o algoritmo
calcularValorTotalMacas();