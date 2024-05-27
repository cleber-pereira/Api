const express = require('express');
const router = express.Router();

const CidadeController = require('./controllers/CidadeController');
const UsuarioController = require('./controllers/UsuarioController');
const DeficienciaController = require('./controllers/DeficienciaController');
const TiposDeficienciaController = require('./controllers/TiposDeficienciaController');
const CurtidaController = require('./controllers/CurtidaController');

router.get('/cidades', CidadeController.buscarTodos);
router.get('/cidade/:ID', CidadeController.buscarCidade);

router.get('/curtidas/:USUARIO', CurtidaController.buscarTodos);
router.get('/countCurtidas/:USUARIO', CurtidaController.buscarCurtida);

router.get('/deficiencias', DeficienciaController.buscarTodos);
router.get('/deficiencia/:ID', DeficienciaController.buscarDeficiencia);

router.get('/tiposDeficiencia', TiposDeficienciaController.buscarTodos);
router.get('/tipoDeficiencia/:ID', TiposDeficienciaController.buscarTiposDeficiencia);

router.get('/usuarios', UsuarioController.buscarTodos);
router.get('/usuario/:ID', UsuarioController.buscarUsuario);

module.exports = router;