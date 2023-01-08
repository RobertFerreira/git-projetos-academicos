/* Exercicio 2 - Robert Welis Ferreira da Silva - RA:33537 */

/* Crie e inicie variáveis para guardar as informações abaixo usando const, let, var de acordo com a forma que achar correto. */
var quebra_linha = "  ";


/*a) Nome da empresa, que será acessível por toda a aplicação.*/
var nome_empresa = "Microsoft";
console.log("A) Nome da Empresa:", nome_empresa);
console.log(quebra_linha);

/*b) Variável usada apenas no módulo de pagamento para guardar o total de salários pagos no mês.*/
let salarios_pagos_mes = 50;
console.log("B) Salários pagos no mês:" , salarios_pagos_mes);
console.log(quebra_linha);

/*c) Quantidade de dias de faturamento, normalmente esta informação será fixa e nunca mais alterada*/
const dias_faturamento = 5;
console.log("C) Dias de Faturamento" , dias_faturamento);
console.log(quebra_linha);

/*d) Todas as notas de um aluno de uma disciplina*/
var notas_alunos = [10,7,9,6];
console.log("D) Notas do Aluno:");
console.log(notas_alunos[0]);
console.log(notas_alunos[1]);
console.log(notas_alunos[2]);
console.log(notas_alunos[3]);
console.log(quebra_linha);

/*e) Todos os dados de um carro (placa, chassi, modelo, ano, cor, nome do dono) que foi multado.*/
var dados_carro = ["ABC-1234" ,"9BG116GW04C400001", "Chevrolet", 2019, "Prata", "Robert"];
console.log("E) Dados do Carro:")
console.log("Placa:", dados_carro[0]);
console.log("Chassi:", dados_carro[1]);
console.log("Modelo:", dados_carro[2]);
console.log("Ano:", dados_carro[3]);
console.log("Cor:", dados_carro[4]);
console.log("Nome do Dono:", dados_carro[5]);
console.log(quebra_linha);

/*f) O número de ouro da matemática valor 1.61803...*/
const numero_de_ouro = 1.61803399;
console.log("F) Número de Ouro:", numero_de_ouro);
console.log(quebra_linha);

/*g) Os nomes dos alunos de uma turma com 10 alunos*/
var alunos = ["Robert", "Rodrigo", "Rogério", "Renata", "Rubens", "Richard", "Richarlison", "Ronald", "Reinaldo", "Roberto"];
console.log("G) Alunos de uma turma:")
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);
console.log(alunos[4]);
console.log(alunos[5]);
console.log(alunos[6]);
console.log(alunos[7]);
console.log(alunos[8]);
console.log(alunos[9]);
console.log(quebra_linha);

/*h) Quantidade de pares de tênis de um armário*/
var quantidade_tenis = 4;
console.log("H) Quantidade de Pares de Tênis:" , quantidade_tenis);
