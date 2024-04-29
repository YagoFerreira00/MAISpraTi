const prompt = require('prompt-sync')();

// Função para ler valores inteiros e indicar se são pares ou ímpares
function verificarParidade() {
    let numero;
    do {
        // Ler um valor inteiro
        numero = parseInt(prompt("Digite um número inteiro (ou um número negativo para sair):"));

        // Verificar se o número é par ou ímpar
        if (numero > 0) {
            if (numero % 2 === 0) {
                console.log(`O número ${numero} é PAR.`);
            } else {
                console.log(`O número ${numero} é ÍMPAR.`);
            }
        }
    } while (numero > 0);
    
    console.log("Algoritmo encerrado.");
}

// Chamar a função para executar o algoritmo
verificarParidade();