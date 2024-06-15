const CidadeService = require('../services/CidadeService');

module.exports = {
    buscarTodos: async(req, res)=> {
        let json = {error:'', result:[]};

        let cidades = await CidadeService.buscarTodos();

        for (let i in cidades) {
            json.result.push({
                ID: cidades[i].ID,
                NOME: cidades[i].NOME,
                UF: cidades[i].UF
            });
        }
        res.json(json);
    },

    buscarCidadesPorUf: async(req, res)=> {
        let json = {error:'', result:{}};
        let UF = req.params.UF;
        let cidade = await CidadeService.buscarCidadesPorUf(UF);

        if(cidade){
            json.result = cidade;
        }
        res.json(json);
    }
}