<?php
header('Access-Control-Allow-Origin: *');
require_once 'Conection.php';
$logradouro = $_POST['logradouro'];
$bairro = $_POST['bairro'];
$numero = $_POST['numero'];
$cidade = $_POST['cidade'];
$uf = $_POST['uf'];
$id_cliente = $_POST['id_cliente'];

if (empty($logradouro) || empty($bairro) || empty($numero) || empty($cidade) || empty($uf)|| empty($id_cliente)) {
    echo json_encode(["message" => "Todos os campos precisam ser preenchidos!"]);
} else {

        $sql = "INSERT INTO endereco (logradouro, bairro, numero, cidade, uf, id_cliente ) VALUES ('" . $logradouro . "', '" . $bairro . "', '" . $numero . "', '" . $cidade . "', '" . $uf . "', '" . $id_cliente . "')";

        $result =  $pdo->query($sql);

        if (!$result) {
            http_response_code(500);
            echo json_encode(["message" => "Error ao inserir no banco de Dados"]);
        } else {
            http_response_code(200);
            echo json_encode(["message" => "Salvo com sucesso"]);
        }
}
