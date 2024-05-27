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
        let ID = req.params.ID;
        let deficiencia = await DeficienciaService.buscarDeficiencia(ID);

        if(deficiencia){
            json.result = deficiencia;
        }
        res.json(json);
    }
}