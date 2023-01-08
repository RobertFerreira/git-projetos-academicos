// Exercicio 13

/* Faça um programa que solicite ao usuário para informar a temperatura atual do ambiente em graus Celsius. E este programa deverá mostrar apenas uma das seguintes frases:
Está congelando, quando a temperatura for menor que -10
Está muito frio, quando a temperatura for maior igual a -10 e menor que 0
Está frio, quando a temperatura for maior igual a 0 e menor que 10
Está agradável, quando a temperatura for maior igual a 10 e menor que 20
Está calor, quando a temperatura for maior igual a 20 e menor que 25
Está muito calor, quando a temperatura for maior igual a 25 e menor que 35
Está insuportavelmente quente, quando a temperatura for maior igual a 35*/

const readLine = require('readline-sync');

        var temperaturaAtual = readLine.question("Qual a temperatura atual ? (em graus Celsius) ");


        if ( temperaturaAtual < -10){
            console.log("Está congelando");
        }
        else{ 
            if ( temperaturaAtual >= -10 && temperaturaAtual < 0){
                console.log("Está muito frio");
            }
            if ( temperaturaAtual >= 0 && temperaturaAtual < 10){
                console.log("Está frio");
            }
            if ( temperaturaAtual >= 10 && temperaturaAtual < 20){
                console.log("Está agradável");
            }
            if ( temperaturaAtual >= 20 && temperaturaAtual < 25){
                console.log("Está calor");
            }
            if ( temperaturaAtual >= 25 && temperaturaAtual < 35){
                console.log("Está muito calor");
            }
            if ( temperaturaAtual >= 35){
                console.log("Está insuportavelmente quente");
            }
        }
