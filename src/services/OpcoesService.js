const db = require('../db');

module.exports = {
    buscarOpcoes: (ID,PROCURANDO,GENERO,DEFICIENCIA,SEXO,PELO_SEXO,COM_PESSOAS,ONDE,CIDADE,UF)=> 
    {
        return new Promise((aceito, rejeitado)=>{
            QUERY = 'SELECT usuarios.ID AS ID';
            QUERY = QUERY + ',usuarios.PROCURANDO AS PROCURANDO';
            QUERY = QUERY + ',usuarios.GENERO AS GENERO';
            QUERY = QUERY + ',usuarios.DEFICIENCIA AS DEFICIENCIA';
            QUERY = QUERY + ',usuarios.SEXO AS SEXO';
            QUERY = QUERY + ',usuarios.PELO_SEXO AS PELO_SEXO';
            QUERY = QUERY + ',usuarios.COM_PESSOAS AS COM_PESSOAS';
            QUERY = QUERY + ',usuarios.ONDE AS ONDE';
            QUERY = QUERY + ',usuarios.CIDADE AS CIDADE';
            QUERY = QUERY + ',usuarios.UF AS UF';
            QUERY = QUERY + ',usuarios.FOTO_PERFIL AS FOTO_PERFIL';
            QUERY = QUERY + ',cidades.NOME AS CID_NM';
            QUERY = QUERY + ' FROM usuarios,cidades';
            QUERY = QUERY + ' WHERE usuarios.CIDADE=cidades.ID';
            QUERY = QUERY + ' AND usuarios.ID=\'' + ID + '\'';

            // console.log(QUERY);
            db.query(QUERY, (error, results)=>{
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    buscarUsuario: (ID) => {
        return new Promise((aceito, rejeitado)=> {
            db.query('SELECT * FROM usuarios WHERE ID = ?', [ID], (error, results)=>{
                if (error) {
                    rejeitado(error);
                    return;
                }
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        })
    }
};