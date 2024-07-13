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

    buscarCidadesUf: async(req, res)=> {
        let json = {error:'', result:{}};
        let UF = req.params.UF;
        let cidades = await CidadeService.buscarCidadesUf(UF);

        for (let i in cidades) {
            json.result.push({
                ID: cidades[i].ID,
                NOME: cidades[i].NOME,
                UF: cidades[i].UF
            });
        }

        res.json(json);
    }
}