// Função para verificar se um número é primo
function ehPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}

// Função para imprimir os 50 primeiros números primos maiores que 100
function imprimirPrimos() {
    let numero = 101; // Iniciar a partir do primeiro número maior que 100
    let contadorPrimos = 0;

    while (contadorPrimos < 50) {
        if (ehPrimo(numero)) {
            console.log(numero);
            contadorPrimos++;
        }
        numero++;
    }
}

// Chamar a função para executar o algoritmo
imprimirPrimos();