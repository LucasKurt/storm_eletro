const comentario = require('../models/Comentario');

class ComentariosController {
    async indexAction(req, res) {
        const resposta = await comentario.find().sort({_id: -1})
        res.json(resposta)
    }

    async registrarComentarioAction(req, res) {
        const { nome, msg } = req.body;

        let resposta = await comentario.create({nome,msg});
        res.json(resposta)
    }
}

module.exports = new ComentariosController;