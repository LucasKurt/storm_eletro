const connection = require('../config/connection');

class Produto {
    constructor() {
        this.id;
        this.cat_id;
        this.categoria;
        this.descricao;
        this.img;
        this.preco_antigo;
        this.preco;
    }

    getAll(req, res) {
        connection.query("SELECT id, produtos.cat_id, categoria, descricao, img, preco_antigo, preco FROM produtos JOIN categorias on produtos.cat_id = categorias.cat_id ORDER by id", (error, result) => {
            if (error) {
                res.send(error);
            } else {
                res.json(result);
            }
        });
    }
}

module.exports = new Produto;