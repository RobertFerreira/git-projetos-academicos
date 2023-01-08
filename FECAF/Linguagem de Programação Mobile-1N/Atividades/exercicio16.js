// Exercicio 16

/* Ordenação

Faça um programa que solicite que o usuário digite 3 números e guarde-os nas variáveis a, b e c 
Depois mostre os números em ordem crescente

Utilize if encadeado para resolver este caso

Entregar o fluxograma e o código .js*/

const readLine = require('readline-sync');

        var a = parseInt(readLine.question("Digite o primeiro numero: "));
        var b = parseInt(readLine.question("Digite o segundo numero: "));
        var c = parseInt(readLine.question("Digite o terceiro numero: "));

    // A em primeiro, B em segundo, C em terceiro
        if (a < b && a < c && b < c) {
            console.log(`Em ordem crescente: ${a} , ${b} , ${c}`); 
        }
        else{
            // A em primeiro, C em segundo, B em terceiro
            if (a < b && a < c && c < b) {
                console.log(`Em ordem crescente: ${a} , ${c} , ${b}`); 
            }

            // B em primeiro, A em segundo, C em terceiro
            if (b < a && b < c && a < c) {
            console.log(`Em ordem crescente: ${b} , ${a} , ${c}`); 
            }

            // B em primeiro, C em segundo, A em terceiro
            if (b < a && b < c && c < a) {
            console.log(`Em ordem crescente: ${b} , ${c} , ${a}`); 
            }

            // C em primeiro, A em segundo, B em terceiro
            if (c < a && c < b && a < b) {
            console.log(`Em ordem crescente: ${c} , ${a} , ${b}`); 
            }

            // C em primeiro, B em segundo, A em terceiro
            if (c < a && c < b && b < a) {
            console.log(`Em ordem crescente: ${c} , ${b} , ${a}`); 
            }

            // Rejeitas números iguais
            if ( a == b || a == c || b == c ) {
                console.log("Não utilize números iguais!"); 
                }
        }