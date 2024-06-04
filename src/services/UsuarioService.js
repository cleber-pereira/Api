const db = require('../db');

module.exports = {
    buscarTodos: (ID,PROCURANDO,PELO_SEXO,COM_PESSOAS,ONDE,CIDADE,UF)=> {
        QRY_PESS = '';
        if (COM_PESSOAS != '3') {
            if (COM_PESSOAS == '1') { 
                QRY_PESS = ' AND usuarios.DEFICIENTE =\'0\' ';
            }
            if (COM_PESSOAS == '2') { 
                QRY_PESS = ' AND usuarios.DEFICIENTE =\'1\' ';
            }
        }
        QRY_ONDE = '';
        if (ONDE != '3') {
            if (ONDE == '1') { 
                QRY_ONDE = ' AND usuarios.CIDADE =\'' + CIDADE + '\' ';
            }
            if (ONDE == '2') { 
                QRY_ONDE = ' AND usuarios.UF =\'' + UF + '\' ';
            }
        }
        return new Promise((aceito, rejeitado)=>{
            QUERY = 'SELECT usuarios.ID AS ID';
            QUERY = QUERY + ',usuarios.NOME AS NOME';
            QUERY = QUERY + ',usuarios.CIDADE AS CIDADE';
            QUERY = QUERY + ',usuarios.PROCURANDO AS PROCURANDO';
            QUERY = QUERY + ',usuarios.GENERO AS GENERO';
            QUERY = QUERY + ',usuarios.UF AS UF';
            QUERY = QUERY + ',cidades.NOME AS CID_NM';
            QUERY = QUERY + ' FROM usuarios,cidades';
            QUERY = QUERY + ' WHERE usuarios.CIDADE=cidades.ID';
            QUERY = QUERY + ' AND usuarios.ID!=\'' + ID + '\'';
            QUERY = QUERY + ' AND usuarios.PROCURANDO=\'' + PROCURANDO + '\'';
            QUERY = QUERY + ' AND usuarios.GENERO=\'' + PELO_SEXO + '\'';
            QUERY = QUERY + QRY_PESS + QRY_ONDE;

                console.log(QUERY);
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