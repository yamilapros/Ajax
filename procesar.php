<?php
if(isset($_POST['name']) && isset($_POST['job'])){
    $name = $_POST['name'];
    $job = $_POST['job'];
    
}
$usuario = [$name, $job];

echo json_encode($usuario);