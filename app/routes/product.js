var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app) {
    app.get('/products', function(req, res) {
        var connection = connectionFactory();
        connection.query('select * from products', function(err, result){
            if(err != null && err != undefined)
                res.send(err);
            
            res.render('product/list', {products: result});
        });
        
        connection.end();
    });
}