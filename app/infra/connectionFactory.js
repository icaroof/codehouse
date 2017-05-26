var mysql = require('mysql');

function createDBConnection() {
    console.log('Connecting to ' + process.env.NODE_ENV + ' database.');
    
    if(!process.env.NODE_ENV || process.env.node === 'dev') {
        return connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'codehouse'
        });
    }
    
    if(process.env.NODE_ENV == 'test') {
        return connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'codehouse_test'
        });
    }
}

module.exports = function() {
    return createDBConnection;
}