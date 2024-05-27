const UsuarioService = require('../services/UsuarioService');

module.exports = {
    buscarTodos: async(req, res)=> {
        let json = {error:'', result:[]};

        let usuarios = await DatingService.buscarTodos();

        for (let i in usuarios) {
            json.result.push({
                ID: usuarios[i].ID,
                NOME: usuarios[i].NOME,
                EMAIL: usuarios[i].EMAIL,
            });
        }
        res.json(json);
    },

    buscarUsuario: async(req, res)=> {
        let json = {error:'', result:{}};
        let ID = req.params.ID;
        let usuario = await UsuarioService.buscarUsuario(ID);

        if(usuario){
            json.result = usuario;
        }
        res.json(json);
    }
}