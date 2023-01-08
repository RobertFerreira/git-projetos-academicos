// Exercicio 19

/*Faça um programa que liste do numero 1 ao 200 e também mostre a raiz quadrada do numero na mesma linha. Lembre-se que a raiz quadrada do numero é : Math.sqrt( numero )
Ex.
    Numero    -    Raiz
    1         -    1.0
    2         -    1.4142135623730951
    3         -    1.7320508075688772
    4         -    2.0
    ...    
    200        -*/

    let contador = 1;
    console.log("Numero - Raiz");

    while (contador <= 200){
    console.log(contador, "-", Math.sqrt(contador));
    contador += 1
    };