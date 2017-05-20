var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
    console.log('Initializing express');
    var app = express();
    
    console.log('Initializing ejs');
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    
    app.use(bodyParser.urlencoded({extended: true}));
    
    console.log('Loading required modules');
    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);
    
    return app;
};