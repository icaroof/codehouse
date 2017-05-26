var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProductsController', function(){
    
    beforeEach(function(done){
        var conn = express.infra.connectionFactory();
        conn.query("delete from products", function(ex, result){
            if(!ex)
                done();
        });
    });
    
    it('#json listing', function(done) {
        request.get('/products')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    
    it('#html listing', function(done) {
        request.get('/products')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(200, done);
    });
    
    it('#creates a new product with invalid data', function(done) {
        request.post('/products')
            .send({title: "", description: "new book"})
            .expect(400, done);
    });
    
    it('#creates a new product with valid data', function(done) {
        request.post('/products')
            .send({title: "test book", description: "new book", price: 9.99})
            .expect(302, done);
    });
});