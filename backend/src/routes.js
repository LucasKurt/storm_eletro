const { Router } = require('express');

const ProdutosController = require('./controllers/ProdutosController');
const ComentariosController = require('./controllers/ComentariosController');

const routes = new Router;

routes.get("/produtos", ProdutosController.indexAction)

routes.get("/comentarios", ComentariosController.indexAction)
routes.post("/comentarios", ComentariosController.registrarComentarioAction)

module.exports = routes;