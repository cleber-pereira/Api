const TiposDeficienciaService = require('../services/TiposDeficienciaService');

module.exports = {
    buscarTodos: async(req, res)=> {
        let json = {error:'', result:[]};

        let tiposDeficiencia = await TiposDeficienciaService.buscarTodos();

        for (let i in tiposDeficiencia) {
            json.result.push({
                ID: tiposDeficiencia[i].ID,
                NOME: tiposDeficiencia[i].NOME
            });
        }
        res.json(json);
    },

    buscarTiposDeficiencia: async(req, res)=> {
        let json = {error:'', result:[]};
        let ID = req.params.ID;
        let tipoDeficiencia = await TiposDeficienciaService.buscarTipoDeficiencia(ID);

        if(tipoDeficiencia){
            json.result = tipoDeficiencia;
        }
        res.json(json);
    }
}