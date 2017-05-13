module.exports = function(app) {
    app.get('/products', function(req, res) {
        var connection = app.infra.connectionFactory();
        var productDAO = new app.infra.productDAO(connection);
        
        productDAO.loadAll(function(err, result){
            if(err != null && err != undefined)
                res.send(err);
            
            res.render('product/list', {products: result});
        });
        
        connection.end();
    });
    
    app.get('/products/remove', function() {
        var connection = app.infra.connectionFactory();
        var productDAO = app.infra.productDAO(connection);
        
        
        
        connection.end();
    });
}