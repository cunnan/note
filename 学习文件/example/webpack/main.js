const express = require('express');

var food = express();

var port = 3000;
food.listen(port,()=>{
    console.log('food:'+port+'监听中...');
});

//使用Express中间件：express.static()
// 向客户端公开一个静态资源目录
food.use(express.static("./build"));
