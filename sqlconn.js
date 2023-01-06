const mysql = require('mysql');

exports.mysqlConnection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'Owais247',
database: 'learners',
multipleStatements: true
});

