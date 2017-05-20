module.exports = function(app) {
    app.get('/products', function(req, res) {
        var connection = app.infra.connectionFactory();
        var productDAO = new app.infra.ProductDAO(connection);
        
        productDAO.loadAll(function(err, result){
            if(err != null && err != undefined)
                res.send(err);
            
            res.render('product/list', {products: result});
        });
        
        connection.end();
    });
    
    app.get('/products/new', function(req, res) {
       res.render('product/new');
    });
    
    app.post('/products', function(req, res) {
        var connection = app.infra.connectionFactory();
        var productDAO = new app.infra.ProductDAO(connection);
        
        var product = req.body;
        
        productDAO.save(product, function(err, result) {
            if(err != null && err != undefined)
                res.send(err);
            
            res.redirect('/products');
        });
        
        connection.end();
    });
}