const express=require('express');

const bodyParser=require('body-parser');

//导入路由器
const userRouter=require('./routes/user/user.js');
const productRouter=require('./routes/product/product.js');

//创建服务器server
var server=express();
server.listen(3000,()=>{
	 console.log('app_xz监听中...');
});

//将静态资源托管到public
server.use(express.static('public/html/user'));
server.use(express.static('public/html/product'));

//使用body-parser中间件
//写在路由前面
server.use(bodyParser.urlencoded({
	 extended:false
}));

//将路由器挂载到服务器
server.use('/user',userRouter);
server.use('/product',productRouter);
