<?php

require "Connection.php";

class Comment {
    public $id;
    public $nome;
    public $msg;
    public $data;

    public static function getAll() {
        $connection = Connection::getDB();
        $stmt = $connection->query("SELECT * FROM `comentarios`");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function registerComment() {
        $connection = Connection::getDB();
        $stmt = $connection->query("INSERT INTO comentarios (nome,msg) VALUES ('$this->nome','$this->msg')");

        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }
}