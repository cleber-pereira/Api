const db = require('../db');

module.exports = {
    buscarTodos: ()=> {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM cidades ORDER BY UF,NOME', (error, results)=>{
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    buscarCidadesPorUf: (UF) => {
        return new Promise((aceito, rejeitado)=> {
            db.query('SELECT ID, NOME, UF FROM cidades WHERE UPPER(UF) = \'' + UF.toUpperCase() + '\' ORDER BY UF', (error, results)=>{
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        })
    }
};