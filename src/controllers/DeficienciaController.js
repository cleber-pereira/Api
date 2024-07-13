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
        
        console.log(json);

        for (let j in deficiencias) {
            json.result.push({
                ID: deficiencias[j].ID,
                TIPO: deficiencias[j].TIPO,
                NOME: deficiencias[j].NOME
            });
        }
        res.json(json);
    }
}