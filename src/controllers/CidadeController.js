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

    buscarCidade: async(req, res)=> {
        let json = {error:'', result:{}};
        let ID = req.params.ID;
        let cidade = await CidadeService.buscarCidade(ID);

        if(cidade){
            json.result = cidade;
        }
        res.json(json);
    }
}