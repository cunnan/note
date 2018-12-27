ajax基础
    同步
        只能做一件事件，这件事情做完才能做下一件事
    异步
        ajax的异步加载
一、http协议
    1.URL
        网络资源标识符
            结构:协议+主机域名+端口+目录结构+文件名称
                http://www.codeboy.com/adimin/uesr_list.html
     url完整结构
        <scheme>://<user>:<pwd>@<host>:<port>/<path>;<params>?<query>#<frag>
             scheme 方案、协议，以哪种方式获取浏览器的资源，不区分大小写，常见协议，http/https加密协议/ftp/mailto/TELNET
                常见协议        默认端口号         基本作用
                 ftp            21              文件的上传下载
                 ssh            22              安全的远程登录
                 TELNet         23              远程登录
                 SMTP           25              邮件传输协议
                 DNS            53              域名解析
                 http           80              超文本传输
                 POP3           110             邮件接收协议
                 https          443             加密的传输http

                 user 用户名 
                 pwd  密码
                 host 主机名 
                 port 端口
                 path 路径，资源在服务器中存放的位置
                 params 参数，服务器端使用 session cookie 
                 query 查询字符串 
                 frag 锚点 
    2.https协议 
        HTTP HyperText Transfer Protocol 超文本传输协议 
            规范了数据是如何打包以及传递的
        历史 现在用的版本 http/1.1 不需要设置
        http协议规定，客户端与服务器端传递的数据块Message(消息/报文)。必须符合特定的格式，这个Message才能被客户端和服务器彼此理解
        请求消息 
            请求起始行，请求头，请求主体
            浏览器要发送给服务器的数据
        响应消息
            响应起始行，响应头，响应主体
            服务器发送给浏览器的数据

        request 请求消息
            客户端要发送给服务器端的数据
            由三部分组成
                请求起始行 
                    请求方法
                        get
                            客户端向服务器要数据的时候使用
                            靠地址栏传递查询字符串。无请求主体
                        post
                            客户端向服务器提交数据的时候使用
                            隐式发送。有请求主体（form data）
                        delete
                            表示客户端可以删除服务器上的内容（一般禁用）
                        put 
                            表示客户端可以往服务器上放数据（一般禁用）
                        connect 
                            测试连接
                        trace 
                            追踪请求路径
                        option
                            选项
                        head 
                            表示客户端只会取响应的消息头
                    请求url
                        访问的地址链接

                    协议版本 http/1.1
                请求头request headers
                    host:告诉服务器，请求的是哪一个主机
                    connecction:keep-alive 告诉服务器进行持久连接
                    user-agent 告诉服务器浏览器的类型
                    accept-encoding 告诉服务器浏览器能接收的压缩文件类型
                    accept-language 告诉服务器自己能接收的自然语言的类型
                    referer 引用/推荐人，告诉服务器请求来自哪个网页
                请求主体form data
        Response 响应消息
            服务器发送给客户端的数据
            由三部分组成
                响应起始行
                    协议版本
                    响应状态码
                        告诉客户端，服务器的响应状态是什么
                        取值
                            1** 100-199 提示信息
                            2** 成功响应 200 ok 
                            3** 301 永久重定向 www.sun.com
                                302 临时重定向
                                304 请求未被修改，还是原来的请求，命中缓存
                            4** 客户端请求错误
                                404 not found 请求资源不存在
                                403 forbidden 权限不够
                                405 method not allowed 请求方法不被允许
                            5** 服务器运行错误

                                404 检查url是否正确，要访问的资源是不是在url指向的位置（html位置和路由）
                                5** 检查接口中的代码是否正确
                    原因短句，对状态码的解释说明
                响应头
                    date 告诉浏览器，服务器的响应时间
                    connection keep-alive 告诉浏览器已经开启了持久连接
                    content-type 响应主体的类型
                        text/html 响应回来的数据是html文本
                        text/plain 普通文本
                        text/css 样式文件
                        application/javascript js文件
                        image/png image/jpeg image/gif 图片
                        application/json 响应回来的json格式的字符串
                        application/xml 响应回来的xml格式的字符串
                响应主体
                    network中的response,在header的右边第二个
    3.缓存
        缓存的优点
            减少冗余的数据传输，节省客户端的流量
            节省服务器的带宽
            降低了对服务资源的消耗和运行需求
            降低了远距离传输而造成的延迟加载
        缓存的原理
            1.请求->无缓存->访问服务器->存缓存->客户端得到数据
            2.请求->有缓存->够新鲜->命中缓存->客户端得到数据
            3.请求->有缓存->不新鲜->访问服务器，是否过期->没过期->更新缓存的新鲜度->客户端得到数据
            4.请求->有缓存->不新鲜->访问服务器，是否过期->已过期->访问服务器->存缓存->客户端得到数据
        与缓存相关的消息头
            cache-control http1.1的用法
                从服务器将文档传到客户端之时起，此文档处于新鲜的秒数，这个秒数时一个相对时间
            语法
                0 不缓存
                max-age=新鲜的秒数
            expires http1.0的用法
                指定过期的确切时间，是一个具体的时间点
        网页中如何添加缓存
            <meta http-equiv="消息头" content="消息头对应的值">
            <meta http-equiv="Cache-Control" content="max-age=3600">
    http性能优化
        1.http连接过程
            发起请求->建立连接->处理请求->访问资源->构建响应->发送响应->记录日志
        2.http连接性能优化思路
            减少请求次数
            减少连接创建次数，（开启持久连接）
            提高服务器端的运行速度（软硬件）
            尽可能减少响应数据的长度
        3.安全的http协议
            https 安全版本的http
            ssl 为数据通信提供了安全支持
            1.客户端发送请求消息时，在ssl层加密->服务器接收到加密文件，在ssl层解密->得到请求明文，对请求进行处理
            2.服务器端发送响应消息时，在ssl层加密->客户端接收到加密文件，在ssl层解密->得到响应明文，解析相应内容
二、ajax
    dom基础操作            
        1，完整的JavaScript操作的组成
            js核心 ECMA Script 
            DOM Document Object Model 文档对象模型
                让js动态的操作页面上的元素
            BOM Browser Object model 浏览器对象模型
                让js动态的操作浏览器
        2.简单dom操作
			1.要获取的元素一定要有id
				<div id="d1">这是要测试的文本</div>
			2.在js中，用id获取对象
				document.getElementById("d1");
				h5支持简写方式
				d1就是div对象
			3.获取/设置元素的内容innerHTML
				d1.innerHTML=...
				var str=d1.innerHTML;
			 innerHTML指的是，双标签，开关标签之间的所有内容。
			 如果开关标签之间有其他元素，会得到该元素的文本字符串，如果设置innerHTML时，添加了新标签，在语法正确的情况下，新标签也会在页面上渲染
			4.事件
				用户与页面交互行为，调用什么js代码
		3.获取/设置表单控件的数据
			1.使用input控件的id代表控件对象
			2.通过对象的value属性，获取/设置控件的值
			 <input id="uname"type="text">
			 uname.value=100;
		4.html元素的事件
			允许通过用户的行为来激发的操作就是事件
			常用的事件
				用户单击元素，激发某项操作 onclick 
				文本框/密码框失去焦点事件 onblur
				文本框/密码框获得焦点事件 onfocus
				body的事件,当页面加载完成，马上要激发的操作 onload
	AJAX开始
		同步 Synchronous
			在一个任务进行过程中，不能开启其他的任务
			同步访问：浏览器在向服务器发送请求时，浏览器只能等待服务器的响应，不能做其他的事情
			应用场景
				地址栏输入网址并跳转
				a标记跳转
				submit表单的提交
		异步 Asynchronous
			在一个任务开启的同时，可以开启其他任务
			异步的访问：浏览器在向服务器发送请求时，不耽误用户在网页上的其他操作
			应用场景
				用户名的重复验证
				聊天室
				搜索建议（百度，京东，淘宝）等
				股票走势图
		
		什么是ajax
			Asynchronous JavaScript And Xml
			异步的js和xml 现在用json
			本质
				使用js提供的异步对象（XMLHttpRequest----xhr）
					异步的向服务器发送请求，
					并接收响应回来的数据
				ajax中，可以无刷新效果，去更改页面的布局结构和内容
			创建异步对象
				标准创建 
					var xhr=new XMLHttpRequest();
				ie8以下创建
					var xhr=new AcriveXObject('MicrosoftXMLHttp');	
				判断浏览器版本
					使用window.XMLHttpRequest属性
					若是高版本，这个属性有值
					若是不支持标准创建，属性值为null
					if(window.XMLHttpRequest){
					var xhr=new XMLHttpRequest();
					}else{
						var xhr=nw ActiveXObject("Microsoft.XMLHttp");
					}
			异步对象的常用属性和方法
				readystate 表示xhr对象的请求状态 
				 取值0--4，表示5个状态
				 0 请求尚未初始化
				 1 打开服务器连接，正在发送请求
				 2 接收响应头
				 3 接收响应体
				 4 接收响应数据成功
				 当readystate的值为4的时候，才表示所有的数据接收完毕
				 onreadystatechange 当xhr的readystate属性值发生改变时触发
			使用ajax的步骤
				1.创建xhr对象
				2.绑定监听事件
					xhr.onreadystatechange=function(){
						if(xhr.readyState==4&& xhr.status==200){
							var result=xhr.responseText;
						}
					}
				3.打开连接，创建请求
					xhr.open("method","url",true);
				4.发送请求
					xhr.send();
			post请求
				post请求的数据放在请求主体中
				发送请求前，要手动修改请求消息头
				默认的消息头 Content-Type:text/plain,传递的数据时普通的，无特殊符号的字符，主题中有特殊符号
				&，必须要把值设置成可以有特殊符号的字符类型application/x-www-form-urlencoded
				注意：设置请求消息头，放在
				xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
json
	js对象的数据格式
	var stu={name:'lilei',age:2-,gender:'男'};
	json数据格式
		1.什么是Json
			JavaScript Object Notation js对象表现方式
		js对象表示法，以js对象的数据格式表现出来的字符串
		2.Json的语法
			1.json中用一对{}来表示一个对象
			2.对象中的属性名称必须用双引号引起来（不要用单引号）
				如果值是字符串，也必用双引号引起来
			3.json表现出来是一个字符串，所以最外层添加单引号
			json是一个以js对象为格式字符串，不能以对象.属性的方式获取值。必须要先把json字符串转化成js对象，才能使用
         
xml数据格式
	什么是xml
		eXtensible Markup Language 可扩展标记语言
		xml的标记是没有被预定义过的，需要自行定义
		xml的宗旨，是做数据的传递，而不是数据展示
	语法规范
		xml的最顶端做声明
			<?xml version="1.0" encoding="utf-8"?>	
		xml标记语法
			必须双标签
			xml中，标签严格区分大小写
			允许嵌套，但注意嵌套顺序
	        每个标记允许自定义属性，格式与html一致，但是值必须用双引号
			每个xml文档，有且只有一个跟标签
		AJAX获取xml数据
			使用xml.responseXML获取xml对象
			var students=result.getElementsByTagName("student");
			var names=sdudents[0].getElementsByTagName("name");
			name[0].innerHTML
			这种dom操作获取的数组，叫做类数组，类数组可以使用下标查找元素，但是不能使用数组的API












































