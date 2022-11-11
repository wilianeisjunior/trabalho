<?php
header('Access-Control-Allow-Origin: *');
require_once('Conection.php');
$sql = "SELECT * FROM endereco ORDER BY id DESC";
$resultado = $pdo->query($sql);

foreach($resultado as $row){
        echo"<tr>";
            echo"<td>".$row["id_cliente"]."</td>";
            echo"<td>".$row["logradouro"]."</td>";
            echo"<td>".$row["bairro"]."</td>";
            echo"<td>".$row["numero"]."</td>";
            echo"<td>".$row["cidade"]."</td>";
            echo"<td>".$row["uf"]."</td>";
            echo "<td>
                <button  type=`button` class='btn btn-danger' onclick=remove('".$row['id']."') >Excluir</button>
            </td>";
        echo"</tr>";
}
?>