// Exercicio 29

/*Crie um programa contendo uma lista chamada filmesDisponiveis com os nomes de 10 filmes ou séries.
No mesmo código crie uma outra lista chamada filmesAssistidos contendo os mesmos 10 filmes da lista filmesDisponiveis
Remova da lista filmesAssistidos o último elemento desta lista.

Mostre ambas listas na tela.
*/

let filmesDisponiveis = ['Filme 1','Filme 2','Filme 3','Filme 4','Filme 5','Filme 6','Filme 7','Filme 8','Filme 9','Filme 10'];

let filmesAssistidos = ['Filme 1','Filme 2','Filme 3','Filme 4','Filme 5','Filme 6','Filme 7','Filme 8','Filme 9','Filme 10'];

filmesAssistidos.pop();

console.log(`Filmes Disponiveis: ${filmesDisponiveis}`);
console.log(`Filmes Assistidos: ${filmesAssistidos}`);
