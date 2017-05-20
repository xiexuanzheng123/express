/**
 *  express.Router类创建模块化、可挂载的路由句柄
 *  
 *  Router实例是一个完整的中间件和路由系统
 * 
 **/

var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ' + Date.now());
    next();
});
router.get('/', function(req, res) {
    res.send('Birds home page');
});
module.exports = router;

