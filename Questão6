// Função para verificar se os lados formam um triângulo e determinar seu tipo
function verificarTriangulo() {
    // Ler os valores dos lados do triângulo
    let ladoA = parseFloat(prompt("Digite o valor do lado A:"));
    let ladoB = parseFloat(prompt("Digite o valor do lado B:"));
    let ladoC = parseFloat(prompt("Digite o valor do lado C:"));

    // Verificar se os lados formam um triângulo
    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
        // Verificar o tipo de triângulo
        if (ladoA === ladoB && ladoB === ladoC) {
            console.log("Triângulo equilátero: todos os lados são iguais.");
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            console.log("Triângulo isósceles: dois lados são iguais.");
        } else {
            console.log("Triângulo escaleno: todos os lados são diferentes.");
        }
    } else {
        console.log("Os valores fornecidos não formam um triângulo.");
    }
}

// Chamar a função para executar o algoritmo
verificarTriangulo();