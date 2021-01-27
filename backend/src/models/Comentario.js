const connection = require('../config/connection');

class Comentario {
    constructor() {
        this.id;
        this.nome;
        this.msg;
        this.data;
    }

    getAll(req, res) {
        connection.query("SELECT *,date_format(data,'%d/%m/%Y as %H:%ihs') AS databr FROM comentarios ORDER BY databr DESC", (error, result) => {
            if (error) {
                res.send(error);
            } else {
                res.json(result);
            }
        });
    }

    registrarComentario(req, res) {
        connection.query(
            `INSERT INTO comentarios (nome, msg) values ('${this.nome}', '${this.msg}')`,
            (error, result) => { 
                if (error) {
                    res.send(error)
                } else {
                    res.status(201).json(result)
                }
            }
        );
    }
}

module.exports = new Comentario;