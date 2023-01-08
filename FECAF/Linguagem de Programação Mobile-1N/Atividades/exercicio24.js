// Exercicio 24

/*Faça um pequeno programa que liste todos os números de 5 a 75 juntamente com a soma. Conforme exemplo:
    5    -    5
    6    -    11
    7    -    18
    8    -    26
    9    -    35
    ...
    75    -    ?*/

    let contador1 = 5;
    let contador2 = 5;

    while (contador1 <= 75){
    console.log(contador1, "-", contador2);
    contador1 += 1
    contador2 = contador1 + contador2;
    };