const mysql = require('mysql');

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

conn.connect((error)=>{
    if (error) throw error;
    console.log(`Conectado ao banco de dados: ${process.env.DB_NAME}`)
});

module.exports = conn;