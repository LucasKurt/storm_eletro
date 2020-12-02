<?php

require "./model/Comment.php";

header("Access-Control-Allow-Origin:*");    // Permite que outras aplicações acessem a API
header("Content-type: application/json");   //Indicação de arquivo JSON 

$comment = Comment::getAll();

echo json_encode($comment);