<?php
header('Access-Control-Allow-Origin: *');
require_once('Conection.php');
$id=$_POST['id'];

if(empty($id)){
    echo json_encode(["message"=>"Não foi passado nenhum id"]);
}else{
    $sql="DELETE FROM endereco WHERE id='$id'";

    $response = $pdo->query($sql);

    if($response === TRUE){
        echo json_encode(["message" => "Error ao excluir o endereço"]);
    }else{
        echo json_encode(["message"=>"Endereço deletado com sucesso"]);
    }
}

?>