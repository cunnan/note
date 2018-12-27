var nodejs={
	 name:'nodejs',
	 content:'nodejs基础',
	 //global方法
	 console:function(){
		 //打印消息
		 console.log('log');
		 //打印消息
		 console.info('info');
		 //打印警告消息
		 console.warn('warning');
		 //打印错误消息
		 console.error('error');
		 //程序执行时间长度计时
		 console.time('for循环');
			 for(var i=0;i<10000;i++){
				
			 }
			 console.log(`i:${i}`);
		 console.timeEnd('for循环');
	 },
	 process:function(){
		 //查看当前cpu架构 X64
		 console.log(process.arch); 
		 //查看当前的操作系统 win32
		 console.log(process.platform); 
		 //查看当前计算机的环境变量
		 console.log(process.env); 
		 //查看当前nodejs的版本号
		 console.log(process.version); 
		 //查看当前进程的进程号
		 console.log(process.pid);	
		 //杀死某个编号的进程 注意kill进程时作用域问题
		
		 var timer=setTimeout(()=>{
			 console.log('helloworld');
			 clearTimeout(timer);
			 process.kill(process.pid); 
		 },2000);
		
	 },
	 buffer:function(){
		 //缓冲区：在内存中存储数据的区域，存储网络传输时的资源
		 //创建buffer
		 var buf=Buffer.alloc(5,'abcdef');
		 //将buffer中存储的数据转为普通字符
		 var str=buf.toString();
		 console.log(buf);
		 console.log(str);
	 },
	 fun:function(){
		 //parseInt/parseFloat/encodeURI/decodeURI/isNaN/isFinite/eval
		 console.log(typeof(parseInt('12')));
		 console.log(parseFloat(12.88));
		 console.log(isNaN(parseFloat('a12.88')));
		 console.log(isFinite(Math.PI));
		 console.log(eval('12'*12+5+'12'));

	 },
	 //一次性定时器
	 timeout:function(){
		 var timer=setTimeout(()=>{
			 console.log('helloworld');
		 },3000);
		 clearTimeout(timer);
	 },
	 //周期性定时器
	 interval:function(){
		 var i=1;
		 var timer=setInterval(()=>{ 
			  if(i>=3){
				 clearInterval(timer);
			  }
			  i++;
			  console.log('helloworld');
		 },3000);
		 
	 },
     //立即执行定时器
	 immediate:function(){
		 //在下一个事件循环的开头（2019年年初）执行
		 var timer=setImmediate(()=>{
			  console.log('helloworld');
		 });
		 clearImmediate(timer);
	 },
	 nexttick:function(){
		 //在当前事件循环的结尾（2018年年底）执行
		 process.nextTick(()=>{
			 console.log('helloworld');
		 });
	 },
	 //js与json转换
	 jstojson:function(){
		 var js={name:'lvbo'};
		 var json=JSON.stringify(js);
		 console.log(typeof(json));
		 console.log(json);
	 },
	 jsontojs:function(){
		 var json=`{"name":"lvbo"}`;
		 var js=JSON.parse(json);
		 console.log(typeof(js));
		 console.log(js);
	 },
	 //模块
	 //查询字符串模块querystring
	 querystring:function(){
		 const querystring=require('querystring');
		 //将查询字符串解析为对象
		 var url='lid=5&name=dell';
		 var obj=querystring.parse(url);
		 console.log(obj);
		 //将对象转换为查询字符串
		 obj={lid:'5',name:'dell'};
		 url=querystring.stringify(obj);
		 console.log(url);
	 },
	 //URL模块url
	 url:function(){
		 const url=require('url');
		 //将url解析为对象
		 var url1='http://www.codeboy.com/product_details.html?lid=5&name=dell';
		 var obj=url.parse(url1);
		 //console.log(obj);
		 //将对象转换为url
		 obj={
			 protocol:'http',
			 hostname:'www.codeboy.com',
			 port:'',
			 pathname:'product_details.html',
			 query:{
				 lid:5,
				 name:'dell'
			 },
		 };
		 url1=url.format(obj);
		 console.log(url1);
	 },
	 //文件系统模块File System
	 /*
	 同步和异步
		 同步阻塞，会阻止后续代码的执行，通过返回值获取结果
		 异步非阻塞，不会阻止后续代码的执行，把执行的结果放到整个程序的最后，通过回调函数获取结果
	 */
	 //查看文件状态
	 //异步非阻塞
	 stat:function(){
		 const fs=require('fs');
		 fs.stat('xml.xml',(err,status)=>{
			 //抛出错误，会阻止后续代码的执行
			 if(err) throw err;
			 console.log(status.isDirectory());
			 console.log(status.isFile());
			 console.log(status);
		 });
	 },
	 //同步阻塞
	 statsync:function(){
		 const fs=require('fs');
		 var status=fs.statSync('xml.xml');
		 console.log(status);
		 console.log(status.isFile());
	 },
	 //判断文件是否存在
	 //异步方法已经弃用
	 existssync:function(){
		 const fs=require('fs');
		 var a=fs.existsSync('lvbo.txt');
		 console.log(a);
	 },
	 //目录操作
	 //创建目录
	 mkdir:function(){
		 const fs=require('fs');
		 fs.mkdir('../lvbo',(err)=>{
			 if(err) throw err;
		 });
	 },
	 //删除目录
	 rmdir:function(){
		 const fs=require('fs');
		 fs.rmdir('../lvbo',(err)=>{
			 if(err) throw err;
		 });
	 },
	 //读取目录
	 readdir:function(){
		 const fs=require('fs');
		 fs.readdir('../文件',(err,files)=>{
			 if(err) throw err;
			 console.log(files);
		 });
	 },
	 //文件操作
	 //写入文件
	 //清空写入文件
	 //文件不存在时创建文件再写入，文件存在时直接写入
	 writefile:function(){
		 const fs=require('fs');
		 var data='helloworld\thelloworld';
		 fs.writeFile('lvbo.txt',data,(err)=>{
			 if(err) throw err;
		 });
	 },
	 //追加写入
	 //文件不存在时创建文件再写入，文件存在时直接写入
	 appendfile:function(){
		 const fs=require('fs');
		 var data='helloworld\thelloworld\n';
		 fs.appendFile('lvbo.txt',data,(err)=>{
		     if(err) throw err;
		 });
	 },
	 //删除文件
	 unlink:function(){
		 const fs=require('fs');
		 fs.unlink('lvbo.txt',(err)=>{
			 if(err) throw err;
		 });
	 },
	 //读取文件
	 readfile:function(){
		 const fs=require('fs');
		 fs.readFile('lvbo.txt',(err,buf)=>{
			 if(err) throw err;
			 console.log(buf.toString());
		 });
	 },
	 //http模块http
	 //请求远程网址数据
	 get:function(){
		 const http=require('http');
		 var url='http://www.codeboy.com';
		 http.get(url,(res)=>{
			 var status=res.statusCode;
			 console.log(status);
			 var data='';
			 res.on('data',(buf)=>{
				 data=buf.toString();
				 console.log(data);
			 });
		 });
	 },
	 //创建服务器
	 createserver:function(){
		 const http=require('http');
		 var server=http.createServer();
		 server.listen(3000);
		 server.on('request',(req,res)=>{
			 //请求信息
			 console.log(req.url);
			 //console.log(req.method);
			 //console.log(req.headers);
			 //响应信息
			 //res.write('this http_server:3000');
			 //设置响应状态码和响应头信息
			 res.writeHead(302,{
				 location:'http://www.codeboy.com'
			 });
			 res.end();
		 });
	 },
};
nodejs.get();































