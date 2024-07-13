const db = require('../db');

module.exports = {
    buscarTodos: ()=> {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM cidades', (error, results)=>{
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    buscarCidadesUf: (UF) => {
        return new Promise((aceito, rejeitado)=> {
            db.query('SELECT * FROM cidades WHERE UF = ?', [UF], (error, results)=>{
                if (error) {
                    rejeitado(error);
                    return;
                }
                if (results.length > 0) {
                    aceito(results);
                } else {
                    aceito(false);
                }
            });
        })
    }
};