<?php
    $conn = mysqli_connect("localhost", "root", "", "fullstack_eletro");
 
    if (!$conn){
        die ("Falha na conexão com o BD " . mysqli_connect_errno());
    }
?> 