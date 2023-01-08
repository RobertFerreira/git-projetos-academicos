// Exercicio 28

/*Faça uma função para calcular o volume de uma caixa, esta função deverá receber 3 valores (base, altura, largura) e deverá retornar o valor do volume  programa que calcule o volume de uma caixa volume = base * largura * altura*/

function calcular_volume (base, largura, altura){
return base * largura * altura;
};

let volume = calcular_volume(5, 5, 5);

console.log(`O volume da caixa é: ${volume}`);