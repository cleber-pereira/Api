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

    buscarCidadePorUf: (UF) => {
        return new Promise((aceito, rejeitado)=> {
            db.query('SELECT ID, NOME, UF FROM cidades WHERE UF = \'' + UF + '\' ORDER BY UF', (error, results)=>{
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        })
    }
};