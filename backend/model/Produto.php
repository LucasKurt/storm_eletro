<?php

require "Connection.php";

class Produto {
    public $id;
    public $categoria;
    public $img;
    public $descricao;
    public $preco_antigo;
    public $preco;

    public static function getAll() {
        $connection = Connection::getDb();
        $stmt = $connection->query("SELECT * FROM produtos");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}