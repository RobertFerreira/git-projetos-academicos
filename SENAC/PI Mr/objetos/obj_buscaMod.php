<?php
    require_once  "../objetos/conexao.php" ;

    $conexao = conecta_banco();

    if(empty ( $_POST [ "id_busca" ]))
    {
        return;        
    }
    // if (isset($_POST["id_busca"]) || empty ( $_POST [ "id_busca" ])) {
        // echo $_POST["id_busca"];
        $sql =  "SELECT * FROM tb_produtos WHERE id_prod = ".$_POST["id_busca"];
        $resultado = $conexao->query($sql);

        if ($resultado->num_rows > 0) {
            while ($linha = $resultado-> fetch_assoc()) 
            {
                $id = $linha['id_prod'];
                $img_src = $linha['foto_prod']; 
                // $img_src = $_files['foto_prod'];
                $nome = $linha['nome_prod'];
                $marca = $linha['marca_prod'];
                $nota = $linha['nota_prod'];
                $descricao =$linha["desc_prod"];
                $ingredientes = $linha["ingred_prod"];
            }
        }
        else 
        {
            echo  "Nenhum Id foi localizado." ;
        }
        
        $conexao->close();    
    
    // $id_busca = $_get["id_busca"];
    // $id_prod = $_POST["id_prod"];
    // // $imagem = $_POST [ "imagem" ];
    // $nome = $_POST [ "nome_prod" ];
    // $marca = $_POST [ "marca_prod" ];
    // $nota = $_POST [ "nota_prod" ];
    // $descricao = $_POST [ "desc_prod" ];
    // $ingrediente = $_POST [ "ingred_prod" ];

    


/*
    if ($resultado->num_rows > 0) {
        // echo  "Busca realizada com sucesso" ;
        while ($linha = $resultado -> fetch_assoc()){
            // return;
            // $id_busca
            echo    '<div class="alert alert-dark alert-dismissible fade show" role="alert">
                    Cadastro inserido com sucesso!
                </div> ';
        }
        
    } else {
        echo    '<div class = "alerta alert-perigo alert-dispensável fade show" role = "alert">
                    <strong> Ops! </strong> Ocorreu um erro. Entre em contato com o Administrador.
                
                    <br>
                
                    ' . $conexao ->error . '
                    <br>
                
                </div> ' ;
    }

    $conexao->close();
    */
?>