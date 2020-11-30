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
        $stmt = $connection->query("SELECT `id` , produtos.cat_id , categoria ,`descricao` , `img` , `preco_antigo` , `preco` FROM `produtos`  JOIN categorias on produtos.cat_id = categorias.cat_id ORDER by id");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function getCategorias() {
        $connection = Connection::getDb();
        $stmt = $connection->query("SELECT produtos.cat_id, categoria, COUNT(categoria) AS qtd FROM `produtos`  JOIN categorias on produtos.cat_id = categorias.cat_id GROUP by categoria ORDER by id");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}