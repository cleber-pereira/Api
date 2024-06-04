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
            console.log('SELECT *,cidades.NOME FROM usuarios,cidades WHERE usuarios.CIDADE=cidades.ID AND usuarios.ID != \'' + ID + '\' AND usuarios.PROCURANDO=\'' + PROCURANDO + '\' AND usuarios.GENERO=\'' + PELO_SEXO + '\' ' + QRY_PESS + QRY_ONDE);

            db.query('SELECT *,cidades.NOME FROM usuarios,cidades WHERE usuarios.CIDADE=cidades.ID AND usuarios.ID != \'' + ID + '\' AND usuarios.PROCURANDO=\'' + PROCURANDO + '\' AND usuarios.GENERO=\'' + PELO_SEXO + '\' ' + QRY_PESS + QRY_ONDE, (error, results)=>{
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