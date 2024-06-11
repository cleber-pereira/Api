const db = require('../db');

module.exports = {
    buscarTodos: ()=> {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM deficiencias', (error, results)=>{
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    buscarDeficiencia: (TIPO) => {
        return new Promise((aceito, rejeitado)=> {
            db.query('SELECT * FROM deficiencias WHERE TIPO = ?', [TIPO], (error, results)=>{
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