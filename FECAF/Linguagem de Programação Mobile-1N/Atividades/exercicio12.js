// Exercicio 12

/* Faça um programa que solicite ao usuário para informar o valor da humidade atual do ambiente, correspondente a porcentagem de humidade no ar. E este programa deverá mostrar apenas uma das seguintes frases:
O ar está húmido quando a humidade for maior que 70
O ar está seco quando a humidade for maior igual a 30 e menor igual a 70
O ar está muito seco quando a humidade for menor que 30
Utilize o if encadeado para resolver esta questão, veja o fluxograma em anexo*/

const readLine = require('readline-sync');

        var humidadeAtual = readLine.question("Qual o valor da humidade atual do ambiente? ");

if ( humidadeAtual > 70){
    console.log("O ar está húmido");
}
else{ 
    if ( humidadeAtual >= 30 && humidadeAtual <= 70){
        console.log("O ar está seco");
       
    } 
    else {
        console.log("O ar está muito seco");
    }
}