module.exports = function(){
    return function(connection) {
        this.loadAll = function(callback){
            connection.query('select * from products',callback);
        }
        return this;
    }
}