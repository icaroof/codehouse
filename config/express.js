var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
    console.log('Initializing express');
    var app = express();
    
    console.log('Initializing ejs');
    app.use(express.static('./app/public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());
    
    console.log('Loading required modules');
    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);
    
    return app;
};