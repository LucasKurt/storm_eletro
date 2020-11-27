<?php

class Connection {
    public static function getDB() {
        $conn = new PDO(
            "mysql:host=localhost;dbname=storm_eletro;charset=utf8",
            "root",
            ""
        );

        if ($conn) {
            return $conn;
        } else {
            echo "<h1>Erro ao realizar a conexão</h1>";
        }
    }
}