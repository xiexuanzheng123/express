var express = require('express');
var app = express();

/**挂载至/user/:id的中间件，任何指向/user/:id的请求都会执行它 */
app.use('/user/:id',function(req, res, next) {
    if(req.params.id == '0') {
        next('route');
    }else{
        next();
    }
}, function(req, res, next) {
    res.send('regular');
});

/**
 * 渲染另一个特殊页面
 */
app.get('/user/:id', function(req, res, next) {
    res.send('special');
})
/**路由和句柄函数，处理指向/user/:id的GET请求 */
// app.get('/', function(req, res) {
//     res.send('USER');
// });

var server = app.listen(3001, function() {
    console.log('挂载服务器');
});

