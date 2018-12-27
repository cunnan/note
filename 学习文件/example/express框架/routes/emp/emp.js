//引入express框架
const express=require('express');

//引入数据库连接池
var pool=require('../../pool/pool.js');

//创建emp路由器
var emp=express.Router();

//中间件
emp.use('/add',(req,res,next)=>{
	  //获取表单数据
	  var data=req.body;
	  //判断表单项是否有空
	  var i=401;
	  for(var key in data){
		 if(data[key]==''){
			 res.send({
				 code:`${i}`,
				 msg:`${key} required`
			 });
			 return;
		 }
		 i++;
		
	  }
	  next();
});
//添加路由
emp.post('/add',(req,res)=>{
	query=`insert into emp set ?`;
	pool.query(query,[req.body],(err,result)=>{
		 if(err) throw err;
		 if(result.affectedRows>0){
			 res.send('插入成功');
		 }
	});
});

//开放emp路由器
module.exports=emp;

