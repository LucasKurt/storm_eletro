<?php

require "./model/Produto.php";

header("Access-Control-Allow-Origin:*");    // Permite que outras aplicações acessem a API
header("Content-type: application/json");   //Indicação de arquivo JSON 

$categorias = Produto::getCategorias();

echo json_encode($categorias);