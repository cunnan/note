//引入express框架
const express=require('express');

//引入body-parser模块
//解析post请求数据
const bodyParser=require('body-parser');

//引入路由器
var empRouter=require('./routes/emp/emp.js');

//创建app服务器
var app=express();
app.listen(3000,()=>{
	 console.log('app监听中...');
});

//body-parser模块设置
app.use(bodyParser.urlencoded({
	 extended:false
}));

//静态资源托管
app.use(express.static('public/html/emp'));

//将路由器挂载到服务器
app.use('/emp',empRouter);

//路由跳转
app.get('/',(req,res)=>{
	 console.log(req.url);
	 res.redirect('/emp_add.html');
});