const express = require('express');
const router = express.Router();

const CidadeController = require('./controllers/CidadeController');
const UsuarioController = require('./controllers/UsuarioController');
const DeficienciaController = require('./controllers/DeficienciaController');
const TiposDeficienciaController = require('./controllers/TiposDeficienciaController');
const CurtidaController = require('./controllers/CurtidaController');
const OpcoesController = require('./controllers/OpcoesController');

router.get('/cidades', CidadeController.buscarTodos);
router.get('/cidades/:UF', CidadeController.buscarCidadesUf);

router.get('/curtidas/:USUARIO', CurtidaController.buscarTodos);
router.get('/countCurtidas/:USUARIO', CurtidaController.buscarCurtida);

router.get('/deficiencias', DeficienciaController.buscarTodos);
router.get('/deficiencia/:TIPO', DeficienciaController.buscarDeficiencia);

router.get('/tiposDeficiencia', TiposDeficienciaController.buscarTodos);
router.get('/tipoDeficiencia/:ID', TiposDeficienciaController.buscarTiposDeficiencia);

router.get('/usuariosParam/:ID/:PROCURANDO/:PELO_SEXO/:COM_PESSOAS/:ONDE/:CIDADE/:UF', UsuarioController.buscarTodos);
router.get('/usuario/:ID', UsuarioController.buscarUsuario);

module.exports = router;