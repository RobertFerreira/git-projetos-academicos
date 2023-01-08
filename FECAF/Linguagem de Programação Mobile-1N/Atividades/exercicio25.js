// Exercicio 25

/*Faça um programa que imprima na console do numero 1 ao 200, utilizando uma variável chamada contador para controlar o numero de voltas do laço, o programa deve imprimir os caracteres "###" no lugar dos números divisíveis por 20*/

    let contador = 1;
    console.log(contador);

    while (contador < 200){
    contador += 1;

    if (contador % 20 == 0){
    console.log("###");
    }

    else{
    console.log(contador);
    }

    };