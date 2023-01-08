<?php 
    require_once "../objetos/conexao.php";

    $conexao = conecta_banco();

    if  (!isset($_REQUEST["login_adm"]) &&
         !isset($_REQUEST["senha_adm"])){
            return;
    }

    $login = $_REQUEST["login_adm"];
    $senha = $_REQUEST["senha_adm"];
    // $login = "fabio@gmail.com";
    // $senha = "123";

    $senha_criptografada = md5($senha);
    // echo $senha, " - ", $senha_criptografada;
    // echo $login, " - ", $senha;

    
    $sql = "SELECT login_adm, senha_adm FROM tb_adm
                    where login_adm = '$login'
                    and senha_adm = '$senha_criptografada'";

    $resultado = $conexao->query($sql);

    if($resultado->num_rows > 0){
        echo 
        "<script> window.location.href = '../views/admin.php'</script>";
        // header("location: ../views/admin.php");
    }else {
            echo    '<div class="alert alert-danger" role="alert">
                        Email e/ou senha inválidos!  
                    </div>';
    }
?>