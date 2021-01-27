const comentario = require('../models/Comentario');

class ComentariosController {
    indexAction(req, res) {
        comentario.getAll(req, res)
    }

    registrarComentarioAction(req, res) {
        const { nome, msg } = req.body;

        comentario.nome = nome;
        comentario.msg = msg;
        comentario.registrarComentario(req, res);
    }
}

module.exports = new ComentariosController;