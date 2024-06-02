const db = require('../db');

module.exports = {
    buscarTodos: ()=> {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT *,cidades.NOME AS NM_CIDADE FROM cidades, usuarios WHERE cidades.ID=usuarios.CIDADE', (error, results)=>{
                if (error) {
                    rejeitado(error);
                    return;
                }
                console.log('buscarTodos');
                aceito(results);
            });
        });
    },

    buscarUsuariosPrefer: (PROPRIO_ID, PROCURANDO, PELO_SEXO, COM_PESSOAS, ONDE, UF, CIDADE) => {
         // PROCURANDO: 1-Relacionamento sério  2-Amizade  3-Encontros casuais  4-Parceria para atividades  5- Sem compromisso
         // PELO_SEXO: M F Q
         // COM_PESSOAS: 1-Sem deficiência  2-Com deficiência  3-Tanto faz
         // ONDE: 1-No seu estado  2-Na sua cidade  3-Tanto faz

        QRY_PES = '';
        if(COM_PESSOAS == '1'){ // 1-Sem deficiencia  2-Com deficiencia  3-Tanto faz 
            QRY_PES = ' AND usuarios.DEFICIENTE = \'0\' ';
        } else if (COM_PESSOAS == '2') {
            QRY_PES = ' AND usuarios.DEFICIENTE = \'1\' ';
        }
        QRY_ONDE = '';
        if(ONDE == '1'){  
            QRY_ONDE = ' AND usuarios.UF = \''+UF+'\' ';
        } else if(ONDE == '2'){
            QRY_ONDE = ' AND usuarios.CIDADE = \''+CIDADE+'\' ';
        }
        return new Promise((aceito, rejeitado)=> {
            console.clear();
            // console.log('SELECT *,cidades.NOME AS NM_CIDADE FROM cidades, usuarios WHERE usuarios.ID != \'' + PROPRIO_ID + '\' AND usuarios.PROCURANDO = \'' + PROCURANDO + '\' AND usuarios.GENERO = \'' + PELO_SEXO + '\' ' + QRY_PES + QRY_ONDE + ' AND cidades.ID=usuarios.CIDADE');
            db.query('SELECT *,cidades.NOME AS NM_CIDADE FROM cidades, usuarios WHERE usuarios.ID != \'' + PROPRIO_ID + '\' AND usuarios.PROCURANDO = \'' + PROCURANDO + '\' AND usuarios.GENERO = \'' + PELO_SEXO + '\' ' + QRY_PES + QRY_ONDE + ' AND cidades.ID=usuarios.CIDADE',  (error, results)=>{
                if (error) {
                    rejeitado(error);
                    return;
                }
                // console.log('buscarUsuariosPrefer');
                
                if (results.length > 0) {
                    aceito(results);
                } else {
                    aceito(false);
                }
            });
        })
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