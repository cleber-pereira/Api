const UsuarioService = require('../services/UsuarioService');

module.exports = {
    buscarTodos: async(req, res)=> {
        let json = {error:'', result:[]};

        let ID = req.params.ID;
        let PROCURANDO = req.params.ID;
        let PELO_SEXO = req.params.PELO_SEXO;
        let COM_PESSOAS = req.params.COM_PESSOAS;
        let ONDE = req.params.ONDE;
        let CIDADE = req.params.CIDADE;
        let UF = req.params.UF;

        let usuarios = await UsuarioService.buscarTodos(ID,PROCURANDO,PELO_SEXO,COM_PESSOAS,ONDE,CIDADE,UF);

        for (let i in usuarios) {
            json.result.push({
                ID: usuarios[i].ID,
                NOME: usuarios[i].NOME,
                CIDADE: usuarios[i].CIDADE,
                PROCURANDO: usuarios[i].PROCURANDO,
                GENERO: usuarios[i].GENERO,
                CID_NM: usuarios[i].CID_NM,
                UF: usuarios[i].UF,
                EMAIL: usuarios[i].EMAIL,
                FOTO_PERFIL: usuarios[i].FOTO_PERFIL,
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