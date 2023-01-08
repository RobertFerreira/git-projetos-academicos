# Robert Welis Ferreira da Silva - RA: 33537

# Atividade 2
'''2- Crie um dicionário vazio filmes = {}. Utilize o nome de um filme como chave. E, como valor, outro dicionário contendo o protagonista e o ano em que o filme foi lançado. Preencha 5 filmes.'''

protagonista_anoLancamento_batman = {"Protagonista": "Christian Bale","Ano de Lançamento":"2008"}
protagonista_anoLancamento_harryPotter = {"Protagonista":"Daniel Radcliffe","Ano de Lançamento":"2001"}
protagonista_anoLancamento_guerraMundialZ = {"Protagonista":"Brad Pitt","Ano de Lançamento":"2013"}
protagonista_anoLancamento_piratasDoCaribe = {"Protagonista":"Johnny Depp","Ano de Lançamento":"2003"}
protagonista_anoLancamento_jogosVorazes = {"Protagonista":"Jennifer Lawrence","Ano de Lançamento":"2012"}

filmes = {}
i = 0
chave = "Batman: O Cavaleiro das Trevas"
valor = protagonista_anoLancamento_batman
filmes [chave] = valor
i = 1
chave = "Harry Potter e a Pedra Filosofal"
valor = protagonista_anoLancamento_harryPotter
filmes [chave] = valor
i = 2
chave = "Guerra Mundial Z"
valor = protagonista_anoLancamento_guerraMundialZ
filmes [chave] = valor
i = 3
chave = "Piratas do Caribe: A Maldição do Pérola Negra"
valor = protagonista_anoLancamento_piratasDoCaribe
filmes [chave] = valor
i = 4
chave = "Jogos Vorazes"
valor = protagonista_anoLancamento_jogosVorazes
filmes [chave] = valor

print(filmes)