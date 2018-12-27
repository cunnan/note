express框架
	 基于nodejs，用于构建web服务器的框架
	 官网：www.expressjs.com.cn
	 安装：npm install express
搭建服务器
	 const express=require('express');
	 var server=express();
	 server.listen(3000,()=>{console.log('监听中...')});
	路由
		 浏览器向web服务器发来请求，web服务器要根据请求的方法和请求的url来做出响应
		 server.get(url,(request,response)=>{});
		 路由三要素
			 请求方法
			 请求url
			 响应内容
				 响应的对象response
					 response.send() 响应文本，只能响应一次，若是数字，认为是状态码
					 response.sendFile() 响应文件，必须使用绝对路径（__dirname）
					 res.redirect() 响应的重定向
				 请求对象req
					 req.method 获取请求的方法
					 req.url 获取请求的url
					 req.headers 获取请求的头信息
					 req.query 获取请求时以查询字符串形式传递的数据，返回格式为对象//get方式
					 或者
					 req.on('data',(buf)=>{buf.toString()});//post方式
	 使用路由传递数据--路由传参
		 传参方式：
			 路由传参，req.params
			 get，req.query
			 post req.body
		 设置路由中接收的名称
			 server.get('/detail/:lid/:name',(req,res)={
				 req.params //获取路由传递的数据，格式为对象
			 });
		 浏览器请求方式
			 http://127.0.0.1/detail/5
			 5就是传递的数据，使用lid来接收
	 路由器
		 路由在使用过程中，不同的模块可能出现相同的url，把同一个模块下的路由挂载到特定的前缀。
			 路由器就是一个js文件，将同一模块下的路由放在一起
			 例如：
				 商品模块下的路由挂载到/product，访问形式/product/list
				 用户模块下的路由挂载到/user，访问形式/user/list
			 //创建路由文件
			 const express=require('express');
			 var router=express.Router();//创建空的路由器
			 router.get('/list',(req,res)=>{});//往路由器中添加路由
			 module.exports=router;
			 const userRouter=require('./user.js');//引用路由器模块
			 server.use('/user',userRouter);//把路由器挂载到/user下，访问形式/user/list;
	 中间件
		 作用
			 为主要的业务逻辑服务
		 分类
			 应用级中间件
				 每一个中间件就是一个函数，需要配合其他的中间件或者路由使用
					 server.use(回调函数) 拦截所有路由
					 server.use('/detail',回调函数) 拦截特定的路由
			 路由级中间件
				 路由器，在服务器中将路由器挂在到特定的url
			 内置中间件
				 托管静态资源到某一个目录，如果浏览器端要请求静态资源，则自动到这个目录下查找
				 （html,css,客户端js,图像,视频,...）
				 express4.*中只有一个
				 server.use(express.static('要托管的目录'))
			 第三方中间件
				 body-parser
					 将post请求的数据解析为对象
					 使用中间件
						server.use(bodyParser.urlencoded({ectended:false}));
						urlencoded 可以将post请求的数据解析为对象
						extended:false 不使用第三方中的qs模块，而是使用核心模块querystring将数据解析为对象
					 在路由中获取数据
						 req.body 返回一个数据的对象格式
			 错误级中间件
			 
mysql模块
	 增 insert into emp values(null,'tom'...);
	 删 delete from emp where uid=5;
	 改 update emp set uname='jerry',sex=1 where uid=5;
	 查 select * from emp;
		 普通连接
			 var con=mysql.createConnection({host:'',port:'',user:'',password:'',database:''}); 创建数据库对象
			 con.connect();连接数据库
			 con.query();执行sql语句
			 con.end();断开数据库
			 con.query(query,(err,result)=>{
				 if(err) throw err;
				 console.log(res);
			 });
		 使用连接池
			 var pool=mysql.createPool({host:'',port:'',user:'',password:'',database:'',connectionLimit:20});
			 pool.query(sql,callback);
			 pool.query(query,[data],(err,result)=>{
				 if(err) throw err;
				 console.log(res);
			 });
