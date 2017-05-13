var mysql = require('mysql');

function createDBConnection() {
    console.log('Connecting to database.');
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'codehouse'
    });
}

module.exports = function() {
    return createDBConnection;
}