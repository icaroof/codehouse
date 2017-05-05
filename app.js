var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/products', function(req, res) {
    console.log("Listing all products...");
    res.render("product/list");
})

app.listen(3000, function(){
    console.log("Server started");
});