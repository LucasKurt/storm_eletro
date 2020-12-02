<?php

require "Connection.php";

class Product {
    public $id;
    public $cat_id;
    public $categoria;
    public $img;
    public $descricao;
    public $preco_antigo;
    public $preco;

    public static function getAll() {
        $connection = Connection::getDb();
        $stmt = $connection->query("SELECT `id` , produtos.cat_id , categoria ,`descricao` , `img` , `preco_antigo` , `preco` FROM `produtos`  JOIN categorias on produtos.cat_id = categorias.cat_id ORDER by id");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}