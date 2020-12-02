<?php

require "./model/Product.php";

header("Access-Control-Allow-Origin:*");    // Permite que outras aplicações acessem a API
header("Content-type: application/json");   //Indicação de arquivo JSON 

$product = Product::getAll();

echo json_encode($product);
