// Exercicio 27

/*Modificar os códigos da tabuada.js (feita em exercícios anteriores) para executarem a função cabecalho logo no inicio do programa.
Nesta atividade submeta apenas o arquivo tabuada.js com a chamada para a função cabecalho()*/

let [cabecalho] = require ('./exercicio26');

    var i = 1;
    while ( i <= 10 ) {
       console.log(`7 x ${i} =`, i * 7);
       i++;
    }