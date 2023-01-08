<?php
    require_once "../objetos/conexao.php";

    $conexao = conecta_banco();

    // if (!isset($_POST["nome_excluir"]) || empty($_POST["nome_excluir"])) 
    // {
    //         // echo "Nome obrigatorio" ;
    //     return;
    // }

    // if (!isset($_get["id_excluir"]) || empty($_get["id_excluir"])) 
    // {
    //         // echo "Nome obrigatorio" ;
    //     return;
    // }

    // $id_excluir = $_POST["id_excluir"];
    // $nome_excluir = "Crunch";
    // $id_excluir = $_get["id_excluir"];
    // $nome = $_POST [ "nome_excluir" ];
    // $descricao = $_POST [ "descricao" ];
    // $nota = $_POST [ "nota" ];
    // $ingredientes = $_POST [ "ingredientes" ];
    // $marca = $_POST [ "marca" ];

    // $sql = "SELECT  id_prod as $id_excluir,
    //                 nome_prod as '$nome',
    //                 desc_prod as '$descricao',
    //                 nota_prod as '$nota',
    //                 marca_prod as '$marca',
    //                 ingred_prod as '$ingredientes' FROM tb_produtos";
    
    // $nome_excluir = 34;
    // if (!isset($_get['id_prod'])) 
    // {
    //         // echo "Nome obrigatorio" ;
    //     return;
    // }
    // $id = $linha['id'];
    
    
    if (isset($_POST["id_busca"])) {
    // return;
    // }
    // $sql =  "DELETE FROM tb_produtos where id_prod = '$id_excluir'";
    $sql =  "DELETE FROM tb_produtos where id_prod = " .$_POST["id_busca"]; 
    // $sql = "SELECT * from tb_produtos Where id_prod=";   
        // if(isset($_POST["sorvete"])){

        // $codigo = $_POST["id_prod"];
    
    // $sql = "DELETE FROM tb_produtos WHERE id_prod = " .$_POST["id_busca"];
    

    $resultado = $conexao->query($sql);

    if ($conexao->query($sql) == true) {
      // echo 
      echo    '<div class="alert alert-dark alert-dismissible fade show" role="alert">
                  Sorvete excluido com sucesso!
                  <br>
                  '.$conexao->error.'
                  <br>
                  
                  
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true"> &times; </span>
                </button>
              </div> ';

  }
  else 
      {
          echo  "" ;
      }}
    // $sql =  "DELETE FROM tb_produtos where nome_prod = $nome_excluir";
    // if ($conexao->query($sql) == true) {
    //     echo "Excluído o registro com o id $nome_excluir.";

    //     // pegar pelo ultimo id = $conexao->insert_id;
    // }   
    // else {
    //     echo "Ops! Algo deu errado, não foi excluido: <br>" . $sql . "<br>" .$conexao->error; 
    // }


     // query(pois eh apenas inserido um valor no bd)
     // caso fosse mais de uma info iguias n banco seria 
     // multiquery
                 // multiquery
    // if ($conexao->query($sql) == true) {
    //         echo "Excluído o registro com o id $excluirProd_id.";

    //         // pegar pelo ultimo id = $conexao->insert_id;
    // }
    // else {
    //     echo "Ops! Algo deu errado, não foi excluido: <br>" . $sql . "<br>" .$conexao->error; 
    // }

    $conexao->close();
?>