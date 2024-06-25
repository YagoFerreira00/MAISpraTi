const prompt = require('prompt-sync')();

// Função para realizar as operações com os números inteiros
function operacoesComInteiros() {
    // Ler quatro números inteiros do usuário
    let primeiroInteiro = parseInt(prompt("Digite o primeiro inteiro:"));
    let segundoInteiro = parseInt(prompt("Digite o segundo inteiro:"));
    let terceiroInteiro = parseInt(prompt("Digite o terceiro inteiro:"));
    let quartoInteiro; // Será usado para armazenar a soma dos valores originais

    // Realizar as operações solicitadas
    primeiroInteiro += 25; // Somar 25 ao primeiro inteiro
    segundoInteiro *= 3; // Triplique o valor do segundo inteiro
    terceiroInteiro *= 0.12; // Modifique o valor do terceiro inteiro para 12% do valor original

    // Armazenar no quarto inteiro a soma dos valores originais dos primeiros três inteiros
    quartoInteiro = primeiroInteiro + segundoInteiro + terceiroInteiro;

    // Exibir os resultados
    console.log(`Primeiro inteiro modificado: ${primeiroInteiro}`);
    console.log(`Segundo inteiro triplicado: ${segundoInteiro}`);
    console.log(`Terceiro inteiro como 12% do original: ${terceiroInteiro.toFixed(2)}`);
    console.log(`Quarto inteiro com a soma dos valores originais: ${quartoInteiro}`);
}

// Chamar a função para executar as operações
operacoesComInteiros();
