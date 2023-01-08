// Exercicio 30

/*Faça um programa que peça 10 números ao usuário, guarde-os em uma lista, e depois mostre as seguintes informações: 
* A soma de todos os números
* A média aritmética
* O maior número
* O menor número*/

const readLine = require('readline-sync');

let n1 = parseInt(readLine.question("Digite o numero 1: "));
let n2 = parseInt(readLine.question("Digite o numero 2: "));
let n3 = parseInt(readLine.question("Digite o numero 3: "));
let n4 = parseInt(readLine.question("Digite o numero 4: "));
let n5 = parseInt(readLine.question("Digite o numero 5: "));
let n6 = parseInt(readLine.question("Digite o numero 6: "));
let n7 = parseInt(readLine.question("Digite o numero 7: "));
let n8 = parseInt(readLine.question("Digite o numero 8: "));
let n9 = parseInt(readLine.question("Digite o numero 9: "));
let n10 = parseInt(readLine.question("Digite o numero 10: "));

let numeros = [n1, n2, n3 , n4, n5, n6 , n7, n8 ,n9, n10];

// SOMA
let soma = 0;
for(var i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
 console.log (`\nA soma de todos os números é: ${soma}`)

// MÉDIA ARITMÉTICA
 let mediaAritmetica = soma / 10;
 console.log (`A média aritmética é: ${mediaAritmetica}`)

 // MAIOR NÚMERO
 let maiorNumero = Math.max(...numeros);
 console.log (`O maior número é: ${maiorNumero}`)

 // MENOR NÚMERO
 let menorNumero = Math.min(...numeros);
 console.log (`O menor número é: ${menorNumero}`)