const DeficienciaService = require('../services/DeficienciaService');

module.exports = {
    buscarTodos: async(req, res)=> {
        let json = {error:'', result:[]};

        let deficiencias = await DeficienciaService.buscarTodos();

        for (let i in deficiencias) {
            json.result.push({
                ID: deficiencias[i].ID,
                NOME: deficiencias[i].NOME,
                TIPO: deficiencias[i].TIPO
            });
        }
        res.json(json);
    },

    buscarDeficienciaPorTipo: async(req, res)=> {
        let json = {error:'', result:[]};
        let TIPO = req.params.TIPO;
        let deficiencias = await DeficienciaService.buscarDeficienciaPorTipo(TIPO);

        for (let i in deficiencias) {
            json.result.push({
                ID: deficiencias[i].ID,
                NOME: deficiencias[i].NOME,
                TIPO: deficiencias[i].TIPO
            });
        }
        res.json(json);
    },

    buscarDeficiencia: async(req, res)=> {
        let json = {error:'', result:{}};
        let ID = req.params.ID;
        let deficiencia = await DeficienciaService.buscarDeficiencia(ID);

        if(deficiencia){
            json.result = deficiencia;
        }
        res.json(json);
    }
}