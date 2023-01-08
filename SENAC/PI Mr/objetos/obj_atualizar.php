<?php
    // require_once "../objetos/conexao.php"; 
    
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

              

    // if  (!isset($_POST["nome"])){
    //     return;
    // }

    $id = $_POST["id"];
    $nome = $_POST['nome'];
    $marca = $_POST['marca'];
    $nota = $_POST['nota'];
    $descricao = $_POST['descricao'];
    $ingredientes = $_POST['ingredientes'];
    

    $sql = "UPDATE tb_produtos 
            SET nome_prod = '$nome',
                marca_prod = '$marca',
                nota_prod = '$nota',
                desc_prod = '$descricao',
                ingred_prod = '$ingredientes' 
            WHERE id_prod = $id";

    // $resultado = $conexao->query($sql);
    if ($conexao->query($sql)){
        echo
        '<div class="alert alert-dark alert-dismissible fade show" role="alert">
                  Sorvete atualizado com sucesso!
                  <br>
                  '.$conexao->error.'
                  <br>
                  
                  
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true"> &times; </span>
                </button>
              </div> ';

        // echo '<script> alert("Atualizado");</script>';
        // header("location: ../views/admin.php");
    }
    // $linha = $resultado-> fetch_assoc();
    // // $id = $linha['id_prod']; 
    // // $nome = $linha['nome_prod'];
    // $marca = $linha['marca_prod'];
    // $nota = $linha['nota_prod'];
    // $descricao =$linha["desc_prod"];
    // $ingred = $linha["ingred_prod"];

    // // mysqli_query($conexao, $query);
    // if ($conexao->query($sql) == true) {
    //     echo "Atualizado o produto";
    // }
    else {
        echo "Ops! Algo de errado: <br>" . $sql . "<br>" . $conexao->error;
    }

    $conexao->close();
    // header('location:index.php?pagina=cursos');  
?>