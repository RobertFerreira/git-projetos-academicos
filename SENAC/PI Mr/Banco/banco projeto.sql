create database bd_proj_sorv
default character set utf8
default collate utf8_general_ci;

drop database bd_proj_sorv;
use bd_proj_sorv;


UPDATE tb_produtos
              SET nome_prod='$nome',
                    marca_prod='$marca',
                    nota_prod='$nota',
                    desc_prod='$descricao',
                    ingred='$ingred' 
              WHERE id_prod = '$id';
              
-- tabela produtos
create table tb_produtos(
id_prod int primary key not null auto_increment,
foto_prod varchar(100),
nome_prod varchar(50) not null,
desc_prod varchar(150) not null,
nota_prod varchar(12) not null,
marca_prod varchar(30) not null,
ingred_prod varchar(200) not null
);

-- tabela adm
create table tb_adm(
id_adm int primary key not null auto_increment,
login_adm varchar(100) not null,
senha_adm varchar(200) not null
);

-- insert tb_produto
insert into tb_produtos(id_prod, foto_prod, nome_prod, desc_prod, nota_prod, marca_prod, ingred_prod)
values(1, 'Brigadeiro.png', 'Brigadeiro', 'O doce preferido dos brasileiros, brigadeiro no palito!', '4 Estrelas', 'Kibon', 'Àgua, confeite granulado sabor chocolate, óleo vegetal, açúcar, gordura vegetal, leite em pó desnatado, doce de leite, xarope de glicose...'),
	  (2, 'Chicabon.png', 'Chicabon', 'Chicabon faz parte da sua vida, é um sabor clássico!', '4 Estrelas', 'Kibon', 'Àgua, açúcar, xarope de glicose, leite em pó desnatado, gordura vegetal, maltodextrina, soro de leite, pasta de cacau...'),
	  (3, 'Eskibon Clássico.png', 'Eskibon Clássico', 'A deliciosa barra de sorvete de baunilha coberta por uma casquinha irresistível de chocolate.', '4 Estrelas', 'Kibon', 'Àgua, cobertura sabor chocolate (óleo vegetal, açúcar, leite em pó integral, manteiga de cacau, massa de cacau...), açúcar, gordura vegetal, xarope de glicose, leite em pó desnatado...'),
      (4, 'Frutilly.png', 'Frutilly', 'Frutilly traz um delicioso e refrescante sorvete com sabor de morango recheado de sorvete sabor creme!', '3 Estrelas', 'Kibon', 'Àgua, gordura vegetal, xarope de glicose de milho, maltodextrina, leite desnatado em pó...'),
      (5, 'Fruttare.png', 'Fruttare Morango', 'Fruttare Muita Fruta Morango, a suculência desde a primeira mordida.', '4 Estrelas', 'Kibon', 'Sua fórmula contém 6 morangos, água, açúcar e pectina, que é extraída da casca de frutas cítricas e deixa o picolé com uma textura ainda mais macia.'),
      (6, 'Kibonbon Coco.png', 'Kibonbon Coco', 'Sorvete de coco cremoso com uma deliciosa cobertura sabor chocolate. ', '5 Estrelas', 'Kibon', 'Àgua, açúcar, óleo vegetal, xarope de glicose, gordura vegetal, leite em pó desnatado, leite de coco, coco em flocos...'),
      (7, 'Kibonbon Morango.png', 'Kibonbon Morango', 'Sorvete de morango com uma deliciosa cobertura com granulado sabor chocolate.', '3 Estrelas', 'Kibon', 'Àgua, confeito sabor chocolate, óleo vegetal, açúcar, xarope de glicose, gordura vegetal, leite em pó desnatado, cacau em pó...'),
      (8, 'Kolorix.png', 'Kolorix', 'Para a alegria das crianças, o sorvete Kolorix além de saboroso é divertido', '2 Estrelas', 'Kibon', 'Àgua, açúcar, xarope de glicose, aromatizante, estabilizantes goma guar e goma jataí, acidulante ácido cítrico e corante Azul Brilhante FCF.'),
      (9, 'La Frutta Açaí+Banana+Morango.png', 'La Frutta Açaí + Banana + Morango', 'Para a alegria das crianças, La Frutta com Açaí + Banana + Morango.', '4 Estrelas', 'Nestlé', 'Àgua, açúcar, açaí, banana, morango...'),
      (10, 'La Frutta Coco.png', 'La Frutta Coco', 'Para a alegria das crianças, La Frutta com Coco.', '4 Estrelas', 'Nestlé', 'Àgua, açúcar, coco...'),
      (11, 'La Frutta Limão.png', 'La Frutta Limão', 'Para a alegria das crianças, La Frutta com Limão.', '4 Estrelas', 'Nestlé', 'Àgua, açúcar, limão...'),
      (12, 'La Frutta Morango.png', 'La Frutta Morango', 'Para a alegria das crianças, La Frutta com Morango.', '4 Estrelas', 'Nestlé', 'Àgua, açúcar, morango...'),
      (13, 'La Frutta Uva.png', 'La Frutta Uva', 'Para a alegria das crianças, La Frutta com Uva.', '4 Estrelas', 'Nestlé', 'Àgua, açúcar, uva...'),
      (14, 'Magnum Branco.png', 'Magnum Branco', 'Magnum White é um delicioso sorvete de baunilha com cobertura de chocolate belga branco.', '5 Estrelas', 'Kibon', 'Àgua, cobertura de chocolate branco (açúcar, manteiga de cacau, leite em pó integral, gordura de leite...), açúcar, óleo vegetal...'),
      (15, 'Magnum Clássico.png', 'Magnum Clássico', 'Magnum Clássico é um delicioso sorvete de baunilha com cobertura de chocolate belga. Imperdível!', '5 Estrelas', 'Kibon', 'Àgua, cobertura de chocolate (açúcar, manteiga de cacau, massa de cacau, leite em pó integral, gordura de leite...), açúcar, óleo vegetal, leite em pó desnatado...'),
      (16, 'Magnum Red Velvet.png', 'Magnum Red Velvet', 'Delicioso sorvete de morango e chantilly com cobertura crocante de chocolate belga branco.', '5 Estrelas', 'Kibon', 'Àgua, cobertura de chocolate branco (açúcar, manteiga de cacau, leite em pó integral, gordura de leite...), açúcar, óleo vegetal, leite em pó desnatado...'),
      (17, 'Magnum Vegano Amêndoas.png', 'Magnum Vegano Amêndoas', '100% delicioso: combinação perfeita de cobertura crocante de chocolate e amêndoas e um cremoso sorvete sabor baunilha.', '4 Estrelas', 'Kibon', 'Àgua, chocolate (açúcar, manteiga de cacau, pasta de cacau, gordura vegetal, emulsificante lecitina de soja e aromatizante), xarope de glicose, açúcar...'),
      (18, 'Mega Amêndoas.png', 'Mega Amêndoas', 'Sorvete MEGA Amêndoas proporciona uma experiência inconfundível com pedaços crocantes de amêndoas misturados à casca do picolé.', '5 Estrelas', 'Nestlé', 'Água, cobertura de chocolate ao leite (cacau, açúcar, leite, leite em pó integral, gordura vegetal...)...'),
      (19, 'Mega Chocolate Branco.png', 'Mega Chocolate Branco', 'Sorvete MEGA Chocolate Branco proporciona uma experiência inconfundível com pedaços crocantes de chocolate branco misturados à casca do picolé.', '5 Estrelas', 'Nestlé', 'Água, cobertura de chocolate branco (chocolate branco, açúcar, leite, leite em pó integral, gordura vegetal...)...'),
	  (20, 'Mega Clássico.png', 'Mega Clássico', 'Sorvete MEGA Clássico proporciona uma experiência inconfundível com pedaços crocantes de chocolate misturados à casca do picolé.', '4 Estrelas', 'Nestlé', 'Água, cobertura de chocolate ao leite (chocolate, açúcar, leite, leite em pó integral, gordura vegetal...)...'),
      (21, 'Mega Doce de Leite.png', 'Mega Doce de Leite', 'Sorvete MEGA Doce de Leite proporciona uma experiência inconfundível com pedaços crocantes de doce de leite misturados à casca do picolé.', '4 Estrelas', 'Nestlé', 'Água, cobertura de chocolate ao leite (chocolate, açúcar, leite, leite em pó integral, gordura vegetal...)...'),
      (22, 'Mega Trufa Branco.png', 'Mega Trufa Branco', 'Sorvete MEGA Trufa Branco proporciona uma experiência inconfundível com pedaços crocantes de chocolate ao leite misturados à casca do picolé.', '5 Estrelas', 'Nestlé', 'Água, cobertura de chocolate branco e chocolate ao leite (chocolate branco, açúcar, leite, leite em pó integral, gordura vegetal...)...'),
      (23, 'Nestle Alpino.png', 'Nestlé Alpino', 'ALPINO é o mais puro e cremoso chocolate NESTLÉ com um sabor inconfundível dos Alpes Suíços.', '5 Estrelas', 'Nestlé', 'Água, cobertura de chocolate ao leite (chocolate branco, açúcar, leite, leite em pó integral, gordura vegetal...)...'),
      (24, 'Nestlé Classic.png', 'Nestlé Classic', 'NESTLÉ CLASSIC é o clássico e cremoso chocolate NESTLÉ com um sabor inconfundível.', '4 Estrelas', 'Nestlé', 'Água, cobertura de chocolate ao leite (chocolate branco, açúcar, leite, leite em pó integral, gordura vegetal...)...'),
      (25, 'Nestlé Gelato Fragola.png', 'Nestlé Gelato Fragola', 'NESTLÉ GELATO FRAGOLA é o mais novo picolé e cremoso sorvete NESTLÉ com um sabor inconfundível.', '4 Estrelas', 'Nestlé', 'Água, cobertura de chocolate branco (chocolate branco, morango, açúcar, leite, leite em pó integral, gordura vegetal...)...'),
      (26, 'Nestlé Gelato Pistacchio.png', 'Nestlé Gelato Pistacchio', 'NESTLÉ GELATO PISTACCHIO é o mais novo picolé e cremoso sorvete NESTLÉ com um sabor inconfundível.', '5 Estrelas', 'Nestlé', 'Água, cobertura de chocolate ao leite (chocolate, pistaches, açúcar, leite, leite em pó integral, gordura vegetal...)...'),
      (27, 'Nestlé Moça Brigadeiro.png', 'Nestlé Moça Brigadeiro', 'NESTLÉ MOÇA BRIGADEIRO o sabor que voce ama.', '4 Estrelas', 'Nestlé', 'Água, cobertura de chocolate ao leite (chocolate, brigadeiro, açúcar, leite, leite em pó integral, gordura vegetal...)...'),
      (28, 'Nestlé Prestígio Picolé.png', 'Nestlé Prestígio', 'NESTLÉ PRESTÍGIO o sabor que voce ama.', '4 Estrelas', 'Nestlé', 'Água, cobertura de chocolate ao leite (chocolate, Coco, açúcar, leite, leite em pó integral, gordura vegetal...)...'),
      (29, 'Nestlé Tuttiblue.png', 'Nestlé Tuttiblue', 'Para a alegria das crianças, Sorvetes Nestlé apresenta o picolé Tuttiblue, com aparência divertida e sabor delicioso de tutti frutti com recheio de marshmallow..', '4 Estrelas', 'Nestlé', 'Água, cobertura de tutti frutti (tutti frutti, marshmallow, açúcar, leite, leite em pó integral, gordura vegetal...)...'),
      (30, 'Tablito.png', 'Tablito', 'Tablito é um chocolate ao leite envolvido por sorvete de creme e coberto com uma casquinha de chocolate branco crocante.', '4 Estrelas', 'Kibon', 'Àgua, chocolate ao leite, óleo vegetal, açúcar, leite em pó desnatado, gordura vegetal...'),
      (31, 'Nickelodeon Slime.png', 'Nickelodeon Slime', 'Picolé Nickelodeon Slime se inspira na febre das gelecas coloridas e traz sabores sortidos surpresa para divertir as crianças com recheio de uva, limão ou morango.', '4 Estrelas', 'Kibon', 'Àgua, açúcar, xarope de glicose, frutose, maltodextrina, suco de limão concentrado, acidulante ácido cítrico...'),
      (32, 'Toddynho.png', 'Toddynho', 'Toddynho traz a junção do delicioso e refrescante sorvete Kibon com a marca do tradicional achocolatado amado por todos.', '4 Estrelas', 'Kibon', 'Àgua, açúcar, leite em pó desnatado, xarope de glicose, gordura vegetal, maltodextrina, extrato de malte concentrado, soro de leite, pasta de cacau, cacau em pó...')
;

SELECT nome_prod as '$nome',
                    desc_prod as '$descricao',
                    nota_prod as '$nota',
                    marca_prod as '$marca',
                    ingred_prod as '$ingredientes' FROM tb_produtos;
                    
select id_prod as 'id_busca',
                nome_prod as 'nome',
                marca_prod as 'marca',
                nota_prod as 'nota',
                desc_prod as 'descricao',
                ingred_prod as 'ingrediente' from tb_produtos ;
                
delete from tb_produtos where id_prod >= 34;

select id_adm, login_adm, senha_adm from tb_adm;

update tb_adm  set senha_adm = '123' where id_adm >= 33;

-- insert adm
insert into tb_adm(login_adm, senha_adm)
values('FabioPereira@gmail.com', md5('123')),
	('RobertFerreira@gmail.com', md5('123')),
    ('ViniciusPalermi@gmail.com', md5('123')),
    ('GuilhermeRamos@gmail.com', md5('123')),
    ('GuilhermeChaves@gmail.com', md5('123'))
;

select * from tb_adm;

select * from tb_produtos; 

UPDATE tb_produtos 
            SET nome_prod = '$nome',
                marca_prod = '$marca',
                nota_prod = '$nota',
                desc_prod = '$descricao',
                ingred_prod = '$ingred' 
            WHERE id_prod = '$id';