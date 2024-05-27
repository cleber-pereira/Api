const CurtidaService = require('../services/CurtidaService');

module.exports = {
     buscarTodos: async(req, res)=> {
        let json = {error:'', result:[]};

        let USUARIO = req.params.USUARIO;
        let curtidas = await CurtidaService.buscarTodos(USUARIO);

        for (let i in curtidas) {
            json.result.push({
                ID: curtidas[i].ID,
                USUARIO: curtidas[i].USUARIO,
                CURTIDO_POR: curtidas[i].CURTIDO_POR,
                CURTIDO_EM: curtidas[i].CURTIDO_EM,
            });
        }
        res.json(json);
    },

    buscarCurtida: async(req, res)=> {
        let json = {error:'', result:{}};
        let USUARIO = req.params.USUARIO;
        let curtida = await CurtidaService.buscarCurtida(USUARIO);

        if(curtida){
            json.result = curtida;
        }
        res.json(json);
    }
}