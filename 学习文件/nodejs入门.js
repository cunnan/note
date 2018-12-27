nodejs概述
	 运行环境
		 基于goole的V8引擎，运行在服务器端的语言，基于js。
	 对比js和nodejs
		 js运行在浏览器端，存在多种浏览器，容易产生兼容性问题
		 nodejs在服务器端，只有一种运行环境，不存在兼容性问题

		 两者都有内置对象（ES对象），自定义对象和宿主对象

		 js用于网页交互效果
		 nodejs用于服务器端的数据库操作，文件操作...
	 nodejs执行方式
		 脚本模式
			 node 路径/1.js
		 交互模式
			 node 回车 进入交互模式
			 ctrl+c 两次，退出交互模式
全局对象
	 nodejs:global
		在交互模式下，声明的变量或者创建的函数都属于全局对象下的，可以使用global访问，例如：var a=1;global.a
		在文件中声明的变量或者创建的函数都属于是局部作用域下的，不能使用global来访问
			 global对象下的console对象
				 global.console.log() 打印消息
				 global.console.info() 打印消息
				 global.console.warn() 打印警告消息
				 global.console.error() 打印错误消息
				 global.console.time('自定义字符串') 开始计时
				 global.console.timeEnd('自定义字符串') 结束计时 自定义字符串前后要一致
			 global对象下的process对象
				 查看当前计算机的进程
				 process.arch 查看当前cpu架构 X64
				 process.platform 查看当前的操作系统 win32
				 process.env 查看当前计算机的环境变量
				 process.version 查看当前nodejs的版本号
				 process.pid	查看当前进程的进程号
				 process.kill() 杀死某个编号的进程
			 global对象下的Buffer对象
				 缓冲区：在内存中存储数据的区域，存储网络传输时的资源
				 创建buffer
					 var buf=Buffer.alloc(5,'abcdef');
				 将buffer中存储的数据转为普通字符
					 buf.toString()
			 global对象下的全局函数
				 parseInt/parseFloat/encodeURI/decodeURI/isNaN/isFinite/eval
			 global对象下的定时器
				 一次性定时器
					 开启
						 var timer=setTimeout(回调函数,间隔时间);
						 当间隔的时间到了，执行回调函数；单位是毫秒
					 清除
						 clearTimeout(timer);
				 周期性定时器
					 开启
						 var timer=setInterval(回调函数,间隔时间);
						 当间隔的时间到了，执行回调函数
					 清除
						 clearInterval(timer);
				 立即执行定时器
					 一、
						 process.nextTick(回调函数)
						 在当前事件循环的结尾（2018年年底）执行
					 二、
						 开启
							 var timer=setImmediate(回调函数);
							 在下一个事件循环的开头（2019年年初）执行
						 清除
							 clearImmediate(timer);
			 
	 js:window
		 在浏览器下，文件中声明的变量或者创建的函数都属于全局作用域下的，可以使用全局对象访问；例如：var a=1;window.a
nodejs下的模块
				 模块可理解为一个功能体(积木块) 
					 文件模块 
						 require('./circle.js'); 常用于用户自定义的模块，如果后缀名是.js的话，可以省略后缀名
						 require('querystring');常用于引入官方提供的核心模块

					 目录模块
						 require('./test');在目录下自动引入文件index.js;或者使用package.json文件声明main属性，来指定要引入的文件名称
							 package.json文件中内容格式 { "main":"test.js"}
						 require('04_2');要求引入的目录放在当前目录的node_modules目录中，若查找不到，则到上一级目录查找，直到顶层目录。常用于第三方模块
				 js与json
					 json字符串转换成对象
						 var obj=JSON.parse(json字符串);
					 js对象转换成json字符串
						 var json=JSON.stringify(js对象);

				 自定义模块
					 在nodejs下，任意一个文件都是一个模块，文件中的代码默认被一个构造函数包含，下面的代码是nodejs自动添加的
					 (function(exports,require,module,__dirname,__filename){
						 //程序员编写的代码
					 })
					 __dirname 当前模块/文件的完整路径
					 __filename 当前模块/文件的完整路径和文件名称
					 require() 引入一个模块
					 module 指代当前的模块
					 module.exports 当前模块的导出对象（公开），可以供其它模块使用的属性和方法
						 module.exports.getArea=getArea;
						 module.exports.getArea=function(){};
						 module.exports={getArea:function(){}};
				 核心模块（）
					 nodejs官方提供的模块，可以直接引入，不需要创建
					 查询字符串模块--querystring
						 浏览器向服务器发送请求，传递数据的一种方式
							 http://www.codeboy.com/product_details.html?lid=5&name=dell
						 parse() 将查询字符串解析为对象
						 stringify() 将对象转换为查询字符串
					 URL模块
						 parse() 将url解析为对象
							 protocol 协议 
							 hostname 主机（域名/ip地址）
							 port 端口
							 pathname 文件在服务器上的路径
							 query 查询字符串
						 format() 将对象转换为url
							 query属性对应的是对象
					 文件系统模块File System
						 fs.stat(path,callback)/fs.statSync() 查看文件状态，通过回调函数来获取结果，异步方法，不会阻止后续代码执行
							 path 要查看的文件路径
							 callback 回调函数
								 err 若查看失败的错误信息
								 stats 文件的状态信息
									 isDirectory() 是否为目录
									 isFile() 是否为文件
								 if(err) throw err; 抛出错误，会阻止后续代码的执行
						 同步和异步
							 同步阻塞，同步会阻止后续代码的执行，只有方法执行完，才能继续执行后面的代码，是通过返回值获取结果
							 异步非阻塞，不会阻止后续代码的执行，把执行的结果放到整个程序的最后，通过回调函数获取结果
						 fs.mkdir(path,callback)/fs.mkdirSync(path) 创建目录
							 path 要创建的目录的路径
							 callback 回调函数，只有一个参数
								 err 如果创建失败的错误信息
						 fs.rmdir(path,callback)/fs.rmdirSync(path) 删除目录
							 path 要删除的目录的路径
							 callback 回调函数，获取删除的结果
								 err 如果删除失败的错误信息
						 fs.readdir(path,callback) 读取目录中的文件
							 callback
								 files 读取的文件，返回数组
						 fs.writeFile(path,data,callback)
							 data 要写入的数据，没有文件时创建文件，文件存在时则清空文件内容然后写入
						 fs.unlink(path,callback) 删除文件
						 fs.existsSync(path) 判断文件是否存在,异步方法已经弃用
						 fs.readFile(path,callback)/fs.readFileSync(path) 读取文件
						 fs.appendFile(path,data,callback)/fs.appendFileSync(path,data) 追加写入，文件不存在时创建文件，文件存在时在末尾写入数据
					 http模块
						 模拟浏览器向服务器端发请求，也可以创建web服务器
							 模拟浏览器
								 http.get(url,callback)
								 get 请求的方法
								 url 请求的网址
								 callback 回调函数，用来获取服务器端的响应
									 res 响应的对象
									 res.statusCode 获取响应的状态码
									 res.on('data',(buffer)=>{buffer.toString()}); 
										 使用事件来获取服务器端响应的数据
										 buf是服务器端响应的数据，格式为buffer数据
										 http.get('',(res)=>{res.statusCode;res.on('data',(bufer)=>{buffer.toString()});});
							 创建web服务器
								 var server=http.createServer() 创建web服务器
								 server.listen(3000) 分配端口 监听3000端口的变化
								 server.on('request',(req,res)=>{
									 //接收浏览器的请求，是一个事件，一旦有请求，自动执行
										//req 请求的对象
											 url 请求的路径 显示端口后的部分
											 method 请求的方法，直接通过地址栏默认使用get方法
											 headers 请求的头信息
										//res 响应的对象
											 write() 响应的内容为文本形式，向浏览器中写入文本
											 writeHead(302,{})设置响应的状态码和响应的头信息；如果要跳转需要设置Location属性,location的url值必须写协议，如http://localhost:80/member
											 end() 响应结束
								 });
				 第三方模块
				 包和NPM
					 node package manage
					 包（package）：一个目录模块，里面包含多个文件，其中有一个文件命名为package.json文件，是包说明文件
					 自动下载 http://www.npmjs.com
					 切换到下载的目录
							 cd 完整路径
							 在目标目录下，按住shift键，单击右键，选择在此处打开powershell窗口
					 使用npm安装第三方包
						 npm install 包的名称
http协议
	 是浏览器和web服务器之间的通信协议
	 通用头信息
		 Request URL:请求的URL,要向服务器端请求哪个文件
		 Request Method:请求方法 get/post
		 Status Code:响应状态码
			 2** 服务器成功的响应
			 3** 响应的重定向，跳转到另一个地址
			 4** 客户端错误，请求地址不存在
			 5** 服务器端错误
		 Remote Address: 请求的远程服务器的ip地址和端口
		 Referrer Policy：打开方式
	 响应头信息
		 Connection:keep-alive; 连接的方式：持续连接
		 Content-Type:text/html; 响应的文件类型
		 Content-Encoding:gzip; 响应的文件压缩形式
		 Transfer-Encoding:chunked;响应时的传输方式,分段传输
	     Location:响应时跳转的URL，通常结合着300系列的状态码
	 请求头信息
		 
		 Accept:客户端接受的文件类型有哪些
		 Accept-Encoding:gzip;客户端接受的文件压缩形式
		 Accept-Language:客户端接受的语言类型
		 Connection:客户端和服务器端的连接方式，持续连接
	 请求主体
		 可有可无，客户端向服务器端传递的数据
