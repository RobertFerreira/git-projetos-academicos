// Exercicio 15

/* Ordenação
Faça um programa que solicite que o usuário digite 2 números e guarde-os nas variáveis a e b 
Depois mostre os números em ordem crescente

Entregar o fluxograma e o código .js*/

const readLine = require('readline-sync');

        var a = readLine.question("Digite o primeiro numero: ");
        var b = readLine.question("Digite o segundo numero: ");


        if ( a < b){
            console.log(`Em ordem crescente: ${a} , ${b}`);
            
        }
        else{
            if ( b < a){
                console.log(`Em ordem crescente: ${b} , ${a}`);
            }

            if  ( a == b) {
                console.log("Os números são iguais");
            }

        }