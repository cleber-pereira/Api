const express = require('express');
const router = express.Router();

const CidadeController = require('./controllers/CidadeController');
const UsuarioController = require('./controllers/UsuarioController');
const DeficienciaController = require('./controllers/DeficienciaController');
const TiposDeficienciaController = require('./controllers/TiposDeficienciaController');
const CurtidaController = require('./controllers/CurtidaController');

router.get('/cidades', CidadeController.buscarTodos);
router.get('/cidadesUf/:UF', CidadeController.buscarCidadePorUf);

router.get('/curtidas/:USUARIO', CurtidaController.buscarTodos);
router.get('/countCurtidas/:USUARIO', CurtidaController.buscarCurtida);

router.get('/deficiencias', DeficienciaController.buscarTodos);
router.get('/deficiencia/:ID', DeficienciaController.buscarDeficiencia);

router.get('/tiposDeficiencia', TiposDeficienciaController.buscarTodos);
router.get('/tipoDeficiencia/:ID', TiposDeficienciaController.buscarTiposDeficiencia);

router.get('/usuarios', UsuarioController.buscarTodos);
router.get('/usuarios/:PROPRIO_ID/:PROCURANDO/:PELO_SEXO/:COM_PESSOAS/:ONDE/:UF/:CIDADE', UsuarioController.buscarUsuariosPrefer);
router.get('/usuario/:ID', UsuarioController.buscarUsuario);

module.exports = router;