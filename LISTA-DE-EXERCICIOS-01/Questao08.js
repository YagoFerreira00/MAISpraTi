const prompt = require('prompt-sync')();

// Função para ler dois valores e escrevê-los em ordem crescente
function ordenarValores() {
    // Ler dois valores
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));

    // Verificar se os valores são iguais
    if (valor1 === valor2) {
        console.log("Os valores não podem ser iguais. Por favor, digite valores diferentes.");
    } else {
        // Escrever os valores em ordem crescente
        if (valor1 < valor2) {
            console.log(`Os valores em ordem crescente são: ${valor1}, ${valor2}`);
        } else {
            console.log(`Os valores em ordem crescente são: ${valor2}, ${valor1}`);
        }
    }
}

// Chamar a função para executar o algoritmo
ordenarValores();
