var app = require('./config/express')();
var productRoutes = require('./app/routes/product')(app);

app.listen(3000, function(){
    console.log("Server started");
});