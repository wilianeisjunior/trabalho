<?php
header('Access-Control-Allow-Origin: *');
require_once 'Conection.php';
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$cpf = $_POST['cpf'];

if (empty($nome) || empty($sobrenome) || empty($cpf)) {
    echo json_encode(["message" => "Todos os campos precisam ser preenchidos!"]);
} else {
    $str = "SELECT COUNT(cpf) as QTD FROM clientes WHERE cpf='$cpf';";
    $response = $pdo->query($str)->fetchAll();
    if ($response[0]['qtd'] > 0) {
        echo json_encode(["message" => "CPF já  cadastrado"]);
    } else {

        $sql = "INSERT INTO clientes (nome, sobrenome, cpf) VALUES ('" . $nome . "', '" . $sobrenome . "', '" . $cpf . "')";

        $result =  $pdo->query($sql);

        if (!$result) {
            http_response_code(500);
            echo json_encode(["message" => "Error ao inserir no banco de Dados"]);
        } else {
            http_response_code(200);
            echo json_encode(["message" => "Salvo com sucesso"]);
        }
    }
}
