var express = require('express');
var app = express();
var birds = require('./app/birds.js');

app.use('/birds', birds);

var cb0 = function(req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function(req, res, next) {
    console.log('cb1');
    next();
}

app.get('/example',[cb0, cb1], function(req, res, next) {
    console.log('response will be sent by the next function...');
    next();
},function(req, res) {
    res.send('Hello from D');
});

// app.all('/secret', function(req, res, next) {
//     console.log('Accessing the secret section...');
//     next(); //对于一个路径上的所有请求加载中间件
// });

app.use(express.static(__dirname));

app.use(function(req, res, next) {
    res.status(404).send('Sorry can not find that !');
});

var server = app.listen(3000,function() {
    console.log('Server is Ok ~')
});