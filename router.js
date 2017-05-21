var express = require('express');
var app = express();
var router = express.Router();

router.use('/user/:id', function(req, res, next) {
    console.log('Time: ' + Date.now());
    next();
},function(req, res, next) {
    console.log('Request Type: ' + req.method);
    res.render('Yes');
});

var server = app.listen(3000,function() {
    console.log('Route MiddleWare');
});