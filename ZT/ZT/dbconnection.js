var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '#Ngorui98',
    database: 'frenchburger_db'
});
module.exports = connection;