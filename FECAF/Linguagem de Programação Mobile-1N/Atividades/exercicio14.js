// Exercicio 14

/* Faça um pequeno programa para simular um conselheiro para o jogo de 21.

O programa deve solicitar ao usuário para que digite a soma das cartas, e baseado nesta soma o programa informará ao usuário qual a melhor decisão a ser tomada, seguindo a tabela em anexo:

Entregar o fluxograma e o código .js*/

const readLine = require('readline-sync');

        console.log("Você está jogando 21 e tirou uma carta!")
        var jogo21 = readLine.question("Digite a soma da carta que tirou: ");


        if ( jogo21 <= 10){
            console.log("Sem duvida, compre mais uma carta");
            
        }
        else{
            if ( jogo21 >= 10 &&  jogo21 <= 15 ){
                console.log("Ha um risco, mas aconselho a comprar mais uma carta");
            }

            if ( jogo21 > 15 && jogo21 < 20){
                console.log("Aconselho a parar de jogar");
            }
            if ( jogo21 == 21){
                console.log("Voce ganhou, nao compre mais nada");
            }
            if ( jogo21 > 21 ){
                console.log("Você perdeu");
            }
        }