var express = require('express');
var fs = require('fs');
var sqlService = require('../utils/sqlHelper')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.send('Connect is already');
});

router.get('/swiperImages/v1001',function(req,res,next){
    var content = fs.readFileSync('/nodeExpressService/nodeService/images/swiperImages/v1001.jpg','binary');
    res.write(content,'binary');
    res.end();
});


router.get('/swiperImages/v1002',function(req,res,next){
    var content = fs.readFileSync('/nodeExpressService/nodeService/images/swiperImages/v1002.jpg','binary');
    res.write(content,'binary');
    res.end();
});


router.get('/swiperImages/v1003',function(req,res,next){
    var content = fs.readFileSync('/nodeExpressService/nodeService/images/swiperImages/v1003.jpg','binary');
    res.write(content,'binary');
    res.end();
});

//收样送检数据
router.get('/receiveSample/getList',function(req,res,next){
    sqlService.getReceiveSampleList('',function(result){
        res.send(result);
    })
})

module.exports = router;
