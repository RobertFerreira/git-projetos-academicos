<?php
    require_once  "../objetos/conexao.php" ;

    $conexao = conecta_banco();

    if (!isset($_POST["nome"]) || empty($_POST["nome"])) 
    {
            // echo "Nome obrigatorio" ;
        return;
    }

    if (!isset($_POST["descricao"]) || empty($_POST["descricao"])) 
    {
            // echo "Nome obrigatorio" ;
        return;
    }

    if (!isset($_POST["nota"]) || empty($_POST["nota"])) 
    {
            // echo "Nome obrigatorio" ;
        return;
    }

    if (!isset($_POST["marca"]) || empty($_POST["marca"])) 
    {
            // echo "Nome obrigatorio" ;
        return;
    }

    if (!isset($_POST["ingredientes"]) || empty($_POST["ingredientes"])) 
    {
            // echo "Nome obrigatorio" ;
        return;
    }




    $imagem = $_FILES [ "imagem" ];
    $nome = $_POST [ "nome" ];
    $descricao = $_POST [ "descricao" ];
    $nota = $_POST [ "nota" ];
    $marca = $_POST [ "marca" ];
    $ingredientes = $_POST [ "ingredientes" ];

    $sql = "INSERT INTO tb_produtos (
                foto_prod,
                nome_prod,
                desc_prod,
                nota_prod,
                marca_prod,
                ingred_prod
            ) values
            (
                '".$imagem['name']. "',
                '$nome',
                '$descricao',
                '$nota',
                '$marca',
                '$ingredientes'
            )" ;
    
    if ($conexao->query($sql)) {
        move_uploaded_file($imagem['tmp_name'],'../PI Mr.Ice Cream/imagens/Sorvetes/'.$imagem['name']);

        echo 
        '<div class="alert alert-dark alert-dismissible fade show" role="alert">
                        Sorvete inserido com sucesso!
                        <br>
                        '.$conexao->error.'
                        <br>
                        
                        
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"> &times; </span>
                      </button>
                    </div> ';
    } else 
        {
            echo    
                '<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong> Ops! </strong> Ocorreu um erro. Entre em contato com o Administrador.

                    <br>
                    '.$conexao->error.'
                    <br>
                    
                    
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true"> &times; </span>
                  </button>  
                </div> ';
        }

    $conexao->close();
?>