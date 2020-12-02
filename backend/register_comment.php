<?php

require "./model/Comment.php";

header("Access-Control-Allow-Origin:*");    // Permite que outras aplicações acessem a API
header("Content-type: application/json");   //Indicação de arquivo JSON 


$comment = new Comment;
$comment->nome = $_POST['nome'];
$comment->msg = $_POST['msg'];


if ($comment->nome != "" and $comment->msg != "") {
    $validate = $comment->registerComment();
} else {
    $validate = false;
}

if ($validate == true) {
    echo json_encode(true);
} else {
    echo json_encode(false);
}