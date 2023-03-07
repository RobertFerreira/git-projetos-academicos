/*****************************************************************
 *  Objetivo: Realizar o calculo de uma tabuada.
 *  Autor: Marcel
 *  Data: 07/03/2023
 *  Versão: 1.0
 *****************************************************************/

// Gerar a tabuada de um número
const calcularTabuada = function (numeroTabuada) {
    let tabuada = numeroTabuada;
    let status;
    let cont = 0;
    let resultado;

    if (tabuada == '')
        status = false;
    else if (isNaN(tabuada))
        status = false;
    else if (tabuada == 0)
        status = false;
    else if (tabuada == null)
        status = false;
    else {
        while (cont <= 10) {
            resultado = tabuada * cont;
            console.log(`${tabuada} x ${cont} = ${resultado} `)
            cont++
        }
        status = true;
    }
}

calcularTabuada(10);