<?php

require "./model/Produto.php";

header("Access-Control-Allow-Origin:*");    // Permite que outras aplicações acessem a API
header("Content-type: application/json");   //Indicação de arquivo JSON 

$produto = Produto::getAll();

echo json_encode($produto);