// Exercicio 31

/*Faça um programa que peça 5 números ao usuário e mostre os números em ordem crescente na tela.
*Obs.: Não utilize nenhuma função pronta, crie seu próprio código para fazer a ordenação.
Ver dica de algoritmo no link em anexo*/

const readLine = require('readline-sync');

let n1 = parseInt(readLine.question("Digite o numero 1: "));
let n2 = parseInt(readLine.question("Digite o numero 2: "));
let n3 = parseInt(readLine.question("Digite o numero 3: "));
let n4 = parseInt(readLine.question("Digite o numero 4: "));
let n5 = parseInt(readLine.question("Digite o numero 5: "));

let numeros = [n1, n2, n3 , n4, n5];

let ordemCrescente = numeros.sort((a, b) => a - b);

console.log(`\nOs números em ordem crescente: ${ordemCrescente}`);