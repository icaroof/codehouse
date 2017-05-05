module.exports = function(app) {
    app.get('/products', function(req, res) {
        var mysql = require('mysql');
        
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'codehouse'
        });
        
        connection.query('select * from books', function(err, result){
            res.send(result);
        });
        
        connection.end();
    });
}