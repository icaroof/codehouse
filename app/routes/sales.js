module.exports = function(app) {
    app.get("/sales/new", function(req, res) {
        var connection = app.infra.connectionFactory();
        var productDAO = new app.infra.ProductDAO(connection);
        
        productDAO.loadAll(function(err, result){
            if(err)
                return next(err);
            
            res.render('sales/new', {list: result});
        });
        
        connection.end();
    });
    
    app.post("/sales", function(req, res) {
        res.redirect('sales/new');
    });
}