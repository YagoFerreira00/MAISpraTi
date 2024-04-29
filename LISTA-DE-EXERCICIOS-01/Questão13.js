const prompt = require('prompt-sync')();

// Função para mostrar a tabuada de 1 até N
function mostrarTabuada() {
    for (let i = 1; i <= 5; i++) {
        let N = parseInt(prompt(`Digite o valor ${i} para N:`));
        console.log(`Tabuada de 1 até ${N}:`);
        for (let j = 1; j <= N; j++) {
            console.log(`${j} x ${N} = ${j * N}`);
        }
    }
}

// Chamar a função para executar o algoritmo
mostrarTabuada();