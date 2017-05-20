function ProductDAO(connection) {
    this._connection = connection;
}

ProductDAO.prototype.loadAll = function(callback){
    this._connection.query('select * from products', callback);
}

ProductDAO.prototype.save = function(product, callback){
    this._connection.query('insert into products set ?', product, callback);
}

module.exports = function(){
    return ProductDAO;
}