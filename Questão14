// Função para calcular a média aritmética de números decimais
function calcularMediaAritmetica() {
    let soma = 0;
    let contador = 0;
    let numero;

    // Receber números decimais até que o usuário digite 0
    while (true) {
        numero = parseFloat(prompt("Digite um número decimal (ou 0 para sair):"));
        if (numero === 0) {
            break;
        }
        soma += numero;
        contador++;
    }

    // Calcular a média aritmética
    let media = soma / contador;

    // Exibir a média aritmética
    console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}`);
}

// Chamar a função para executar o algoritmo
calcularMediaAritmetica();