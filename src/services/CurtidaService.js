const { buscarCurtida } = require('../controllers/CurtidaController');
const db = require('../db');

module.exports = {
    buscarTodos: (USUARIO)=> {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM curtidas WHERE USUARIO = ?', [USUARIO], (error, results)=>{
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    buscarCurtida: (USUARIO) => {
        return new Promise((aceito, rejeitado)=> {
            db.query('SELECT COUNT(ID) AS QT FROM curtidas WHERE USUARIO = ?', [USUARIO], (error, results)=>{
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