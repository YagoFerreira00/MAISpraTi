const prompt = require('prompt-sync')();

// Função para converter Celsius para Fahrenheit
function converterCelsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Solicitar ao usuário que insira a temperatura em Celsius
let celsius = prompt("Digite a temperatura em Celsius:");

// Converter e exibir o resultado
let fahrenheit = converterCelsiusParaFahrenheit(celsius);
console.log("A temperatura em Fahrenheit é " + fahrenheit + "°F");
