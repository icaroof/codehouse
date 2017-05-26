module.exports = function(app) {
    app.get('/products', function(req, res) {
        var connection = app.infra.connectionFactory();
        var productDAO = new app.infra.ProductDAO(connection);
        
        productDAO.loadAll(function(err, result){
            if(err != null && err != undefined)
                res.send(err);
            
            res.format({
                html: function() {
                    res.render('products/list', {products: result});
                },
                json: function() {
                    res.json(result);
                }
            });
        });
        
        connection.end();
    });
    
    app.post('/products', function(req, res) {
        var connection = app.infra.connectionFactory();
        var productDAO = new app.infra.ProductDAO(connection);
        var product = req.body;
        
        req.assert('title', 'The Title is mandatory').notEmpty();
        req.assert('price', 'The Price format is invalid').isFloat();
        
        if(req.validationErrors()) {
            res.format({
                html: function() {
                    res.status(400).render('products/new',{validationErrors: req.validationErrors(), product: product});
                },
                json: function() {
                    res.status(400).json(req.validationErrors());
                }
            });
            
            return;
        }
        
        productDAO.save(product, function(err, result) {
            if(err != null && err != undefined)
                res.status(500).send(err);
            
            res.redirect('/products');
        });
        
        connection.end();
    });
    
    app.get('/products/new', function(req, res) {
       res.render('products/new', {validationErrors:{}, product:{}});
    });
}