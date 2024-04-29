// Função para calcular a média ponderada
function calcularMediaPonderada() {
    let somaPonderada = 0;
    let somaPesos = 0;
    let numero, peso;

    // Receber números e pesos até que o número 0 seja digitado
    while (true) {
        numero = parseFloat(prompt("Digite um número decimal (ou 0 para encerrar):"));
        if (numero === 0) {
            break;
        }
        peso = parseFloat(prompt("Digite o peso do número:"));
        
        somaPonderada += numero * peso;
        somaPesos += peso;
    }

    // Calcular a média ponderada
    let mediaPonderada = somaPonderada / somaPesos;

    // Exibir a média ponderada
    console.log(`A média ponderada dos números digitados é: ${mediaPonderada.toFixed(2)}`);
}

// Chamar a função para executar o algoritmo
calcularMediaPonderada();