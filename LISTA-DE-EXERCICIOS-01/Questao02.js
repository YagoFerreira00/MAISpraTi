const prompt = require('prompt-sync')();

// Solicitar ao usuário que insira o número total de eleitores e os votos
const totalEleitores = Number(prompt("Digite o total de eleitores: "));
const votosBrancos = Number(prompt("Digite a quantidade de votos brancos: "));
const votosNulos = Number(prompt("Digite a quantidade de votos nulos: "));
const votosValidos = Number(prompt("Digite a quantidade de votos válidos: "));

// Verificar se a soma dos votos é igual ao total de eleitores
const somaVotos = votosBrancos + votosNulos + votosValidos;
if (somaVotos !== totalEleitores) {
  console.log("A soma dos votos não corresponde ao total de eleitores.");
} else {
  // Calcular o percentual para cada tipo de voto
  const percentualBrancos = (votosBrancos / totalEleitores) * 100;
  const percentualNulos = (votosNulos / totalEleitores) * 100;
  const percentualValidos = (votosValidos / totalEleitores) * 100;

  // Exibir os resultados
  console.log(`Percentual de Votos Brancos: ${percentualBrancos.toFixed(2)}%`);
  console.log(`Percentual de Votos Nulos: ${percentualNulos.toFixed(2)}%`);
  console.log(`Percentual de Votos Válidos: ${percentualValidos.toFixed(2)}%`);
}
