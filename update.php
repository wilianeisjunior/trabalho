<?php
header('Access-Control-Allow-Origin: *');
require_once 'Conection.php';

$id = $_POST['id'];
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$cpf = $_POST['cpf'];

$sql="UPDATE clientes SET nome='".$nome."', sobrenome='".$sobrenome."', cpf='".$cpf."' WHERE id='$id'";

$response = $connection->query($sql);

if($response===TRUE){
    echo json_encode(["message"=>"Usuário atualizado com sucesso"]);

}else{
   echo json_encode(["message"=>"Erro ao atualizar usuário"]);
}

?>