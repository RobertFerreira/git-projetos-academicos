// Exercicio 10

/* Faça um programa que solicite ao usuário o preço atual da gasolina e informe a mensagem "A gasolina está cara" se o valor informado for maior do que 2.5 */

const readLine = require('readline-sync');

var valorGasolina = readLine.question("\n Qual o preco atual da gasolina? ");

if ( valorGasolina > 2.50){
console.log("A gasolina está cara");
}
else{ console.log("A gasolina não está cara"); 
}