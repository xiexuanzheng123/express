var express = require('express');
var app = express();

// app.get('/',function(req, res) {
//     res.send('Hello World!');
// });
app.all('/secret', function(req, res, next) {
    console.log('Accessing the secret section...');
    next(); //对于一个路径上的所有请求加载中间件
});

app.use(express.static(__dirname));

app.use(function(req, res, next) {
    res.status(404).send('Sorry can not find that !');
});

var server = app.listen(3000,function() {
    console.log('Server is Ok ~')
});