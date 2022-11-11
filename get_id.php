<?php
header('Access-Control-Allow-Origin: *');
require_once 'Conection.php';

$id = $_POST['id'];

if(empty($id)){
    echo json_encode(["message" => "Sem id"]);
}else{
    $sql = "SELECT * FROM clientes WHERE id='$id'";

    $response = $pdo->query($sql);
    $rows = array();

    if($response-> rowCount() > 0){
        foreach($response as $r){
            $rows[] = $r;
        }
        echo json_encode($rows);
    }
}
?>