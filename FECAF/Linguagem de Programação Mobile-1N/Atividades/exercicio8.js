// Exercicio 8

/* Una as afirmações criadas no exercício anterior usando os operadores && (AND), || (OR) e ^ (OU Exclusivo), para gerar 8 resultados diferentes.
Ex.:
let vontadeFicarEmCasa = ((frio === true) && (tempoSeco === true)); */

let idade1 = 2;
let bebe = (idade1 > 0) && (idade1 < 3);
//true

let idade2 = 30;
let crianca = (idade2 > 4) && (idade2 < 14);
//false

let idade3 = 15;
let adolescente = (idade3 > 12) && (idade3 < 19);
//true

let idade4 = 10;
let adulto = (idade4 > 19) && (idade4 < 50);
//false

let idade5 = 65;
let idoso = (idade5 > 50) && (idade4 < 80);
//true

let bateria = 50;
let bateriaMedia = (bateria > 30) || (bateria < 70)
// true 

let peso = 70;
let pesoMedio = (peso > 60) && (peso < 80)
// true 

let altura = 1.50;
let alturaMedia = (altura > 1.69) && (altura < 1.79)
// false 
