<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Mr.Ice Cream - ADMIN </title>
    <link rel="icon" href="../PI Mr.Ice Cream/imagens/Logo/Logo 1 PNG.png">

    <!-- Referências CSS Bootstrap -->
    <link href="../PI Mr.Ice Cream/estilo.css/estilo.css" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

</head>

<body>

    <!-- Header / Barra de Navegação -->
    <div class="barra_navegacao">
        <nav class="container-xl navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="../PI Mr.Ice Cream/index.html" ;>
                <img class="logo" src="../PI Mr.Ice Cream/imagens/Logo/Logo 3 PNG.png" alt="" loading="lazy">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active texto_barra_navegacao" href="../PI Mr.Ice Cream/index.html"
                        style="padding: 20px; padding-inline-start:30px; padding-inline-end: 30px;" ;> Página Inicial
                        <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link texto_barra_navegacao" href="../PI Mr.Ice Cream/todos_sorvetes.html"
                        style="padding: 20px; padding-inline-start:30px; padding-inline-end: 30px;" ;> Todos os Sorvetes
                        <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link texto_barra_navegacao" href="../PI Mr.Ice Cream/marcas.html"
                        style="padding:20px; padding-inline-start:30px; padding-inline-end: 30px;" ;> Marcas
                        <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link texto_barra_navegacao" href="../PI Mr.Ice Cream/conhecanos.html"
                        style="padding:20px; padding-inline-start:30px; padding-inline-end: 30px;" ;> Conheça-nos
                        <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link texto_barra_navegacao" href="../PI Mr.Ice Cream/contato.html"
                        style="padding:20px; padding-inline-start:30px; padding-inline-end: 30px;" ;> Contato e
                        Informações <span class="sr-only">(current)</span></a>
        </nav>
    </div>

    <nav aria-label="breadcrumb" class="barra_navegacao_secundaria">
        <ol class="breadcrumb container-xl barra_navegacao_secundaria">
            <li class="breadcrumb-item"><a href="../PI Mr.Ice Cream/index.html"> Página Inicial </a></li>
            <li class="breadcrumb-item active" aria-current="page"> Página do ADMIN </li>
        </ol>
    </nav>

    <!-- Contéudo da Página Inicial -->

    <div class="container-xl" style="margin: 50px auto;">
        <div class="pag_admin">
            <h1> Inserir Sorvete </h1>
            <h5> Insira qualquer sorvete no site </h5>
            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group mr-2" role="group" aria-label="First group">
                    <a href="buscar_sorvete.php">
                        <button type="button" class="btn btn-secondary pag_admin button"> Buscar Sorvete </button>
                    </a>
                    <a href="inserir_sorvete.php">
                        <button type="button" class="btn btn-secondary pag_admin button"> Inserir Sorvete </button>
                    </a>
                    <a href="atualizar_sorvete.php">
                        <button type="button" class="btn btn-secondary pag_admin button"> Atualizar Sorvete </button>
                    </a>
                    <a href="excluir_sorvete.php">
                        <button type="button" class="btn btn-secondary pag_admin button"> Excluir Sorvete </button>
                    </a>
                    <a href="login_adm.php">
                        <button id="button_sair" type="button" class="btn btn-secondary pag_admin button"> Sair
                        </button>
                    </a>
                </div>
            </div>

            <p><b>ATENÇÃO:</b> Está é uma página reservada para Administradores, tome cuidado com as alterações que
                serão feitas.
            </p>

            <!-- Inserir -->
            <div class="pag_buscar_read_form">
                <form action="<?php echo $_SERVER["PHP_SELF"];?>" method="post" enctype="multipart/form-data">
                    <div class="form-group pag_inserir button">
                        <label for="nome"> Nome </label>
                        <input type="text" name="nome" class="form-control" id="nome" placeholder="Digite o nome do sorvete...">
                        <label for="marca"> Marca </label>  
                        <input type="text" name="marca" class="form-control" id="marca" placeholder="Digite a marca do sorvete...">
                        <label for="nota">Nota </label>
                        <input type="text" name="nota" class="form-control" id="nota" placeholder="Digite uma nota, de 1 a 5 estrelas.">
                        <label for="imagem"> Imagem </label>
                        <input type="file" name="imagem" class="form-control-file" id="imagem">

                    </div>
                <!-- </form> -->
            </div>
            <div class="pag_buscar_read_form">
                <!-- <form method="post"> -->
                    <div class="form-group pag_inserir button">
                        <label for="descricao"> Descrição </label>
                        <textarea type="text" name="descricao" class="form-control" rows="3" id="descricao" value="Digite a " placeholder="Digite a descrição do sorvete..."></textarea>
                        <label for="ingredientes"> Ingredientes </label>
                        <textarea type="text" name="ingredientes" class="form-control" rows="3" id="ingredientes" placeholder="Digite os ingredientes que há no sorvete..."></textarea>
                    </div>
                    <button id="inserir_button" type="submit" class="btn btn-primary"> Inserir </button>
                    <?php
                        require_once "../objetos/obj_inserir.php"; 
                    ?>
                </form>
            </div>
        </div>
    </div>

    <!-- Rodapé -->
    <div class="rodape">
        <footer class="container-lg">
            <!-- Texto 1 Rodapé -->
            <div class="texto_rodape">
                <div>
                    <p> <span> Endereço: </span> <br> Rua Salvador Branco de Andrade, 182 - Jardim Sao Miguel,<br>
                        Taboão da
                        Serra - SP, 06760-100</p>
                </div>
                <!-- Texto 2 Rodapé -->
                <div>
                    <p id="texto_rodape_direitos"> <span>Mr. Ice Cream </span>- Todos os Direitos Reservados &copy 2020
                    </p>
                </div>
            </div>
            <!-- Links Rodapé -->
            <div class="links_rodape">
                <ul type="none">
                    <h1><span> Mr. Ice Cream </span></h1>
                    <li><a href="../PI Mr.Ice Cream/todos_sorvetes.html"> Todos os Sorvetes </a></li>
                    <li><a href="../PI Mr.Ice Cream/marcas.html"> Marcas </a></li>
                    <li><a href="../PI Mr.Ice Cream/conhecanos.html"> Conheça-nos </a></li>
                    <li><a href="../PI Mr.Ice Cream/contato.html"> Contato e Informações </a></li>
                </ul>
            </div>
            <!-- Redes Sociais Rodapé -->
            <div class="redes_sociais_rodape">
                <ul type="none">
                    <h2><span> Redes Sociais </span></h2>
                    <li>
                        <a href="https://pt-br.facebook.com/"><img src="../PI Mr.Ice Cream/imagens/Icones/Facebook.png"></a>
                        <a href="https://www.instagram.com/"><img src="../PI Mr.Ice Cream/imagens/Icones/Instagram.png"></a>
                        <a href="https://twitter.com/"><img src="../PI Mr.Ice Cream/imagens/Icones/Twitter.png"></a>
                    </li>
                    <li> &nbsp </li>
                    <li> &nbsp </li>
                </ul>
            </div>
        </footer>
    </div>

    <!-- Referência JS Bootstrap -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
        crossorigin="anonymous"></script>
    <script src="../objetos/main.js"></script>

</body>

</html>