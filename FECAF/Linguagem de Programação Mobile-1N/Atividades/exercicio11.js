// Exercicio 11

/* Faça um programa que solicite a temperatura atual para o usuário em graus Celsius. E este programa deverá mostrar apenas uma das seguintes frases:
Está calor quando a temperatura for maior que 25
Está frio quando a temperatura não for maior que 25*/

const readLine = require('readline-sync');

        var temperaturaAtual = readLine.question("Qual a temperatura atual ? (em graus Celsius) ");

if ( temperaturaAtual > 25){
    console.log(temperaturaAtual + "°C," + " está calor");
}
else{ 
    console.log(temperaturaAtual + "°C," + " está frio"); 
}