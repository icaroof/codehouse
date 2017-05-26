module.exports = function(app) {
    app.get('/', function(req, res) {
        var connection = app.infra.connectionFactory();
        var productDAO = new app.infra.ProductDAO(connection);
        
        productDAO.loadAll(function(err, result){
            if(err)
                return next(err);
            
            res.render('home/index', {books: result});
        });
        
        connection.end();
    });
}