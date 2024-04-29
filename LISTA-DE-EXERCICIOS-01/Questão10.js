// Função para ler um número inteiro e escrevê-lo na tela 10 vezes
function escreverNumeroDezVezes() {
    // Ler um número inteiro
    let numero = parseInt(prompt("Digite um número inteiro:"));

    // Escrever o número na tela 10 vezes
    for (let i = 0; i < 10; i++) {
        console.log(numero);
    }
}

// Chamar a função para executar o algoritmo
escreverNumeroDezVezes();