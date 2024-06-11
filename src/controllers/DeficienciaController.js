const DeficienciaService = require('../services/DeficienciaService');

module.exports = {
    buscarTodos: async(req, res)=> {
        let json = {error:'', result:[]};

        let deficiencias = await DeficienciaService.buscarTodos();

        for (let i in deficiencias) {
            json.result.push({
                ID: deficiencias[i].ID,
                NOME: deficiencias[i].NOME
            });
        }
        res.json(json);
    },

    buscarDeficiencia: async(req, res)=> {
        let json = {error:'', result:{}};
        let TIPO = req.params.TIPO;
        let deficiencias = await DeficienciaService.buscarDeficiencia(TIPO);

        for (let i in deficiencias) {
            json.result.push({
                ID: deficiencias[i].ID,
                NOME: deficiencias[i].TIPO,
                NOME: deficiencias[i].NOME
            });
        }
        res.json(json);
    }
}