<?php
    // existe tres formas de conexao ao bd
    // pdo(recomendado, pois pode ser usado msql, postgree e etc)
    // moo(apenas msq)

    function conecta_banco(){
        // $servidor = "localhost";
        // $usuario = "root";
        // $senha = "";
        // $banco_dados = "bd_proj_sorv";

        // $conected = mysqli_connect($servidor, $usuario, $senha, $banco_dados);

        // if(!$conected){
        //     die("Ops! Conexão perdida: ". mysqli_connect_error());
        // }
        // echo "Conexão feita com sucesso! <br>";
        // echo "Conexão Procedural --- Fim <br>";

        // // ----------------------------------------
        // echo "-------------------------------------- <br>";
        // echo "Conexão OO - Orientada a Objeto <br>";
        // echo "-------------------------------------- <br>";
        $servidor = "localhost";
        $usuario = "root";
        $senha = "";
        $banco_dados = "bd_proj_sorv";

        // esta estanceando
        $conexao = new mysqli($servidor, $usuario, $senha, $banco_dados);

        if($conexao->connect_error){
            die("Ops! Conexão perdida:". $conexao->connect_error);
        }
        return $conexao;
        // echo "Conexão feita com sucesso! <br>";
    }
    // $onexao = conecta_banco();
    // echo $conectada;
?>