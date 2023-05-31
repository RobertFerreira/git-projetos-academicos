/*
GRUPO:
Robert Welis Ferreira da Silva
R.A. 33537

João Vitor Pires dos Santos
R.A. 26728

Derisvaldo Ferreira da Costa
R.A. 34146
*/

/*ELEMENTO DIV CARDS*/
const cards = document.getElementById('cards');
/*ELEMENTOS DE PESQUISA*/
const botaoPesquisa = document.getElementById('botao-pesquisa');
const inputNome = document.getElementById('nome');

var maximoCarregado = false;

/*FUNÇÃO DE CARREGAR TODOS OS DADOS*/
const carregarDados = async function () {
    let cont = 0;

    while (maximoCarregado == false) {
        cont++;

        let link = await fetch(`https://rickandmortyapi.com/api/character/${cont}`);
        let element = await link.json();

        if (element.error == 'Character not found') {
            maximoCarregado = true;
            inputNome.removeAttribute('disabled');
            botaoPesquisa.removeAttribute('disabled');
            inputNome.setAttribute('placeholder', 'Busque aqui o personagem');
            break;
        }

        /*-----CRIANDO ELEMENTOS DO CARD-----*/
        /*CARD*/
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        /*CARD IMG*/
        let cardImg = document.createElement('div');
        cardImg.setAttribute('class', 'card-img');
        let img = document.createElement('img');
        img.setAttribute('src', element.image);
        /*CARD STATISTICS*/
        let cardStatistics = document.createElement('div');
        cardStatistics.setAttribute('class', 'card-statistics');
        /*TABELA STATISTICS*/
        let table = document.createElement('table');
        /*TABELA ID*/
        let trId = document.createElement('tr');
        let tdId1 = document.createElement('td');
        let tdId2 = document.createElement('td');
        /*TABELA NOME*/
        let trNome = document.createElement('tr');
        let tdNome1 = document.createElement('td');
        let tdNome2 = document.createElement('td');
        /*TABELA ESPECIE*/
        let trEspecie = document.createElement('tr');
        let tdEspecie1 = document.createElement('td');
        let tdEspecie2 = document.createElement('td');
        /*TABELA GENERO*/
        let trGenero = document.createElement('tr');
        let tdGenero1 = document.createElement('td');
        let tdGenero2 = document.createElement('td');
        /*TABELA ORIGEM*/
        let trOrigem = document.createElement('tr');
        let tdOrigem1 = document.createElement('td');
        let tdOrigem2 = document.createElement('td');
        /*---------------------------------------------*/

        /*INFORMAÇÕES TD 1 (LEGENDA)*/
        tdId1.innerText = 'ID:';
        tdNome1.innerText = 'Nome:';
        tdEspecie1.innerText = 'Espécie:';
        tdGenero1.innerText = 'Genero:';
        tdOrigem1.innerText = 'Origem:';

        /*INFORMAÇÕES TD 2 (DADOS)*/
        tdId2.innerText = element.id;
        tdNome2.innerText = element.name;
        tdEspecie2.innerText = element.species;
        tdGenero2.innerText = element.gender;
        tdOrigem2.innerText = element.origin.name;

        if (element.gender == 'unknown') {
            tdGenero2.innerText = 'Desconhecido';
        }
        if (element.species == 'unknown') {
            tdEspecie2.innerText = 'Desconhecida';
        }
        if (element.origin.name == 'unknown') {
            tdOrigem2.innerText = 'Desconhecida';
        }

        /*INSERINDO ELEMENTOS*/
        /*CARD*/
        cards.appendChild(card);
        card.append(cardImg, cardStatistics);
        /*IMG*/
        cardImg.append(img);
        /*STATISTICS*/
        cardStatistics.append(table);
        /*TABELA*/
        table.append(trId, trNome, trEspecie, trGenero, trOrigem);
        trId.append(tdId1, tdId2);
        trNome.append(tdNome1, tdNome2);
        trEspecie.append(tdEspecie1, tdEspecie2);
        trGenero.append(tdGenero1, tdGenero2);
        trOrigem.append(tdOrigem1, tdOrigem2);
    }
}
carregarDados();

/*FUNÇÃO DE FILTRAR OS DADOS POR NOME*/
const filtrarNomeDados = async function () {

    const inputNomeValue = document.getElementById('nome').value;

    cards.innerHTML = "";

    let cont = 0;
    let maximo = false;

    while (maximo == false) {
        cont++;

        let link = await fetch(`https://rickandmortyapi.com/api/character/${cont}`);
        let element = await link.json();

        if (element.error == 'Character not found') {
            maximo = true;
            break;
        }

        /*FILTRANDO DADOS POR NOME*/
        if (element.name.toUpperCase().includes(inputNomeValue.toUpperCase())) {
            /*-----CRIANDO ELEMENTOS DO CARD-----*/
            /*CARD*/
            let card = document.createElement('div');
            card.setAttribute('class', 'card');
            /*CARD IMG*/
            let cardImg = document.createElement('div');
            cardImg.setAttribute('class', 'card-img');
            let img = document.createElement('img');
            img.setAttribute('src', element.image);
            /*CARD STATISTICS*/
            let cardStatistics = document.createElement('div');
            cardStatistics.setAttribute('class', 'card-statistics');
            /*TABELA STATISTICS*/
            let table = document.createElement('table');
            /*TABELA ID*/
            let trId = document.createElement('tr');
            let tdId1 = document.createElement('td');
            let tdId2 = document.createElement('td');
            /*TABELA NOME*/
            let trNome = document.createElement('tr');
            let tdNome1 = document.createElement('td');
            let tdNome2 = document.createElement('td');
            /*TABELA ESPECIE*/
            let trEspecie = document.createElement('tr');
            let tdEspecie1 = document.createElement('td');
            let tdEspecie2 = document.createElement('td');
            /*TABELA GENERO*/
            let trGenero = document.createElement('tr');
            let tdGenero1 = document.createElement('td');
            let tdGenero2 = document.createElement('td');
            /*TABELA ORIGEM*/
            let trOrigem = document.createElement('tr');
            let tdOrigem1 = document.createElement('td');
            let tdOrigem2 = document.createElement('td');
            /*---------------------------------------------*/

            /*INFORMAÇÕES TD 1 (LEGENDA)*/
            tdId1.innerText = 'ID:';
            tdNome1.innerText = 'Nome:';
            tdEspecie1.innerText = 'Espécie:';
            tdGenero1.innerText = 'Genero:';
            tdOrigem1.innerText = 'Origem:';

            /*INFORMAÇÕES TD 2 (DADOS)*/
            tdId2.innerText = element.id;
            tdNome2.innerText = element.name;
            tdEspecie2.innerText = element.species;
            tdGenero2.innerText = element.gender;
            tdOrigem2.innerText = element.origin.name;

            if (element.gender == 'unknown') {
                tdGenero2.innerText = 'Desconhecido';
            }
            if (element.species == 'unknown') {
                tdEspecie2.innerText = 'Desconhecida';
            }
            if (element.origin.name == 'unknown') {
                tdOrigem2.innerText = 'Desconhecida';
            }

            /*INSERINDO ELEMENTOS*/
            /*CARD*/
            cards.appendChild(card);
            card.append(cardImg, cardStatistics);
            /*IMG*/
            cardImg.append(img);
            /*STATISTICS*/
            cardStatistics.append(table);
            /*TABELA*/
            table.append(trId, trNome, trEspecie, trGenero, trOrigem);
            trId.append(tdId1, tdId2);
            trNome.append(tdNome1, tdNome2);
            trEspecie.append(tdEspecie1, tdEspecie2);
            trGenero.append(tdGenero1, tdGenero2);
            trOrigem.append(tdOrigem1, tdOrigem2);
        }
    }

    /*NENHUM PERSONAGEM ENCONTRADO*/
    if(cards.innerHTML == ""){
        cards.innerHTML = '<h3> Nenhum personagem encontrado <h3/>';
    }
}
botaoPesquisa.addEventListener('click', () => { filtrarNomeDados()});