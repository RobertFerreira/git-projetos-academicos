// Exercicio 23

/*Faça um programa que solicite ao usuário para digitar um número e exiba todos os números desde o informado pelo usuário até o número 1 de maneira decrescente*/

const readLine = require('readline-sync');

let contador = parseInt(readLine.question("Digite um numero: "));

    while (contador >= 1){
    console.log(contador);
    contador -= 1;
    };