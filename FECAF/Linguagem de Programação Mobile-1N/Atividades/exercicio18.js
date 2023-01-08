// Exercicio 18

/*Faça um programa que liste do numero 1 ao 200 e também mostre o quadrado do numero na mesma linha.
Lembre-se que o quadrado = ( numero * numero )
Ex.
    Numero    -    Quadrado
    1        -             1
    2        -             4
    3        -             9
    4        -           16
    ...
    200    -         40000*/

    let contador = 1;
    console.log("Numero - Quadrado");

    while (contador <= 200){
    console.log(contador, "-", Math.pow(contador,2));
    contador += 1
    };