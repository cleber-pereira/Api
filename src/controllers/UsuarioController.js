const UsuarioService = require('../services/UsuarioService');

function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }
    return quantos_anos < 0 ? 0 : quantos_anos;
}

module.exports = {
    buscarTodos: async(req, res)=> {
        let json = {error:'', result:[]};

        let usuarios = await UsuarioService.buscarTodos();

        for (let i in usuarios) {
            let d = usuarios[i].DATA_NASC.getDate();
            let m = usuarios[i].DATA_NASC.getMonth()+1;
            let a = usuarios[i].DATA_NASC.getFullYear();
            json.result.push({
                ID: usuarios[i].ID,
                NOME: usuarios[i].NOME,
                EMAIL: usuarios[i].EMAIL,
                FOTO_PERFIL: usuarios[i].FOTO_PERFIL,
                ESTADO_CIVIL: usuarios[i].ESTADO_CIVIL,
                IDADE: idade(a,m,d),
                NM_CIDADE: usuarios[i].NM_CIDADE,
                UF: usuarios[i].UF
            });
        }
        res.json(json);
    },

    buscarUsuariosPrefer: async(req, res)=> {
        let json = {error:'', result:{}};
        let PROPRIO_ID = req.params.PROPRIO_ID;
        let PROCURANDO = req.params.PROCURANDO;
        let PELO_SEXO = req.params.PELO_SEXO;
        let COM_PESSOAS = req.params.COM_PESSOAS;
        let UF = req.params.UF;
        let CIDADE = req.params.CIDADE;
        let ONDE = req.params.ONDE;
        let usuarios = await UsuarioService.buscarUsuariosPrefer(PROPRIO_ID, PROCURANDO, PELO_SEXO, COM_PESSOAS, ONDE, UF, CIDADE);

        for (let i in usuarios) {
            console.log('i: '+i)
            let d = usuarios[i].DATA_NASC.getDate();
            let m = usuarios[i].DATA_NASC.getMonth()+1;
            let a = usuarios[i].DATA_NASC.getFullYear();
            json.result.push({
                ID: usuarios[i].ID,
                NOME: usuarios[i].NOME,
                EMAIL: usuarios[i].EMAIL,
                FOTO_PERFIL: usuarios[i].FOTO_PERFIL,
                ESTADO_CIVIL: usuarios[i].ESTADO_CIVIL,
                IDADE: idade(a,m,d),
                NM_CIDADE: usuarios[i].NM_CIDADE,
                UF: usuarios[i].UF
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
    },
}