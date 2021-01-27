const produto = require('../models/Produto');

class ProdutosController {
    indexAction(req, res) {
        produto.getAll(req, res)
    }
}

module.exports = new ProdutosController;