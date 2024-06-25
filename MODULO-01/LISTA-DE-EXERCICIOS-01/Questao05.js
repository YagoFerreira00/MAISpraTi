const prompt = require('prompt-sync')();

// Função para calcular a média semestral e verificar a aprovação do aluno
function calcularMediaSemestral() {
    // Ler as notas das duas avaliações
    let nota1 = parseFloat(prompt("Digite a nota da primeira avaliação:"));
    let nota2 = parseFloat(prompt("Digite a nota da segunda avaliação:"));

    // Calcular a média semestral
    let media = (nota1 + nota2) / 2;

    // Escrever a média semestral
    console.log(`Média semestral: ${media.toFixed(2)}`);

    // Verificar se o aluno foi aprovado ou reprovado e escrever a mensagem correspondente
    if (media >= 6.0) {
        console.log('PARABÉNS! Você foi aprovado');
    } else {
        console.log('Você foi REPROVADO! Estude mais');
    }
}

// Chamar a função para executar o algoritmo
calcularMediaSemestral();
