DOM
	 节点对象
		document 
			 obj.nodeType=9
			 obj.nodeName=#document
			 obj.nodeValue=null
		element
			 obj.nodeType=1
			 obj.nodeName=大写的标签名
			 obj.nodeValue=null
		attribute
			 obj.nodeType=2
			 obj.nodeName=属性名
			 obj.nodeValue=属性值
		text
			 obj.nodeType=3
			 obj.nodeName=#text
			 obj.nodeValue=文本内容
	 DOM操作
		 查
			 直接获得节点对象
				var html=document.documentElement;
				var head=document.head;
				var body=document.body;
				var form=document.form[i/id];
			 通过节点关系获得节点对象
				节点树
					 var obj=obj.parentNode;
					 var obj=obj.childNodes;
					 var obj=obj.firstChild;
					 var obj=obj.lastChild;
					 var obj=obj.nextSibling;
					 var obj=obj.previousSibling;
				元素树
					节点树的子树
					 var obj=obj.parentElement;
					 var obj=obj.children;
					 var obj=obj.firstElementChild;
					 var obj=obj.lastElementChild;
					 var obj=obj.nextElementSibling;
					 var obj=obj.previousElementSibling;
			 通过HTML特征查找节点对象
				 不实际存储属性值，每次访问集合内容，都重新查找DOM树
				 var obj=document.getElementById('id);
				 var objs=obj.getElementsByTagName('标签名');
				 var objs=document.getElementsByName('name');
				 var objs=obj.getElementsByClassName('class');
			 通过选择器查找节点对象
				 实际存储所有属性值，每次访问集合内容，不需要重新查找DOM树
				 var obj=obj.querySelector('选择器');
				 var objs=obj.querySelectorAll('选择器');
		 改
			 修改节点对象内容
				obj.innerHTML 修改带标签的html片段内容
				obj.textContent 修改纯文本
				obj.value 修改表单元素
			 修改节点对象属性
				修改html标准属性
					 核心DOM API
						 obj.getAttribute('属性值');
						 obj.setAttribute('属性名','新属性值');
						 obj.hasAttribute('属性名');
						 obj.removeAttribute('属性名');
					 HTML DOM API
						 已将标准属性内置在了节点对象中
						 obj.标准属性名;
							 特例 class属性，class是ES中的保留字
								obj.className
				修改状态属性
					enabled disabled checked selected
					状态属性的值是bool类型，不能用核心DOM的4个API修改，只能用.访问
						补：
							 css3的状态伪类选择器
								:selected :checked :disabled :enabled
				修改自定义属性
					 核心DOM API
						 obj.getAttribute('属性值');
						 obj.setAttribute('属性名','新属性值');
						 obj.hasAttribute('属性名');
						 obj.removeAttribute('属性名');
					 HTML DOM API
						 使用条件：
							属性名有data-前缀
						 访问
							obj.dataset.属性名
						 存在兼容问题
			 修改节点对象样式
				 修改单个样式
					 obj.style.css样式名='样式值'
					 属性名用驼峰书写
					 var 样式值=getComputedStyle(obj).css样式名
				 批量修改样式
					 obj.className='class1 class2';
					 obj.classList.add('class1')
								  .remove('class1')
								  .replace('class1')
		 增
			 添加节点对象
				 创建空节点对象
					 var obj=document.createElement('标签名');
				 设置节点对象属性或样式
					obj.innerHTML='test';
					obj.className='class1';
				 将节点对象添加到节点树的位置
					 添加到父节点的最后一个子节点的后面
						 parentobj.appendChild(obj);
					 添加到父节点的指定子节点的前面
						 parentobj.insertBefore(a,child);
					 替换父节点的某个指定子节点
		 				 parentobj.replaceChild(a,child);
				文档片段对象
					 临时充当多个平级子节点的父节点，一次性将新增的子节点添加到实际父节点
						 var tempparentobj=document.createDocumentFragment();
						 tempparentobj.append(childobj);
						 parentobj.append(tempparentobj);
		 删
			 parentobj.removeChild(childobj);
			 childobj.parentNode.removeChild(childobj);
		 优化
			 DOM树的变动会引发浏览器对页面的重排重绘，降低页面加载效率
					 
		 HTML DOM 常用对象
			 图片
				 var imgobj=new Image();
			 下拉选择框
				 select
					 obj.selectedIndex 获得当前选中的option节点的下标i
					 obj.options 获得当前select节点下的option集合
					 obj.options.length options集合中option节点的个数
						 简化
							 obj.length
					 obj.add(opt) 添加option节点
						 //obj.appendChild(opt)
					 obj.remove(i) 移除i位置的option节点
				 option
					 var opt=new Option(text,value); 设置option节点的内容和value的值
			 表格
				 逐级管理
					 行分组
						 创建行分组
							 var thead=tableobj.createTHead();
							 var tfoot=tableobj.createTFoot();
							 var tbody=tableobj.createTBody();
						 删除行分组
							 tableobj.deleteTHead();
							 tableobj.deleteTFoot();
						 获得行分组
							 var thead=tablobj.tHead();
							 var tfoot=tableobj.tFoot();
							 var tbody=tableobj.tBodies[i];
					 行
						 创建新行
							 var tr=行分组.insertRow(i); 在第i行前面添加新行
							 var tr=行分组.insertRow(); 在行末尾追加新行
							 var tr=行分组.insertRow(0);在行首前面添加新行
						 删除行
							 删除行分组的第i行
								 行分组.deleteRow(i);
							 删除表格的第i行
								 tableobj.deleteRow(tr.rowIndex);
									 tr.rowIndex 获得tr是表格的第几行
						 获得行
							 行分组.rows[i]; 获得某一个行
					 格
						 添加格
							 var td=tr.insertCell(i);
							 var td=tr.insertCell(); 在行末添加格
								 只能添加td,不能添加th,th可通过给td添加样式获得
						 删除格
							 tr.deleteCell(i);
						 获取格
							 tr.Cells[i];
			 表单
				 表单对象
					 获取表单对象
						 var form=document.forms[i/id];
					 获取表单元素集合(input,button,textarea,select)
						 form.elements;
					 获得表单中元素的个数
						 form.elements.length;
							简写
								from.length
					 手动提交表单
						 form.submit();
				 表单元素对象
					 获取表单元素对象
						 var elem=form.elements[i/id/name]
						 var elem=form.name; 元素有name属性值时的写法
					 获取元素对象焦点
						 elem.focus();
					 失去元素对象焦点
						 elem.blur();
BOM
	操作浏览器窗口或软件的API,没有统一标准
	 window对象
		 在ES标准中充当全局作用域对象
		 封装了所有原生API的对象，包括ES+DOM+BOM
			浏览器窗口大小
				 完整窗口大小
					 outerWidth
					 outerHeight
				 文档显示区大小
					 innerWidth
					 innerHeight
			浏览器窗口打开和关闭
				 open() 打开新窗口
				 close() 关闭当前窗口
			当前窗口中url的访问记录栈
				 history.go(i)
					 在当前窗口中前进一步
						 history.go(1)
					 在当前窗口中后退一步/两步
						 history.go(-1);
						 history.go(-2);
					 在当前窗口中刷新当前访问的url页面
						 history.go(0);
			保存当前访问的url的信息的对象
				 location.href 当前url的完整信息
				 location.protocol 当前url的协议信息
				 location.host 当前url的主机名+端口号
				 location.hostname 当前url的主机名
				 location.prot 当前url的端口号
				 location.pathname 当前url的相对路径
				 location.hash 当前url的#锚点地址部分
				 location.search 当前url的？查询字符串部分
				 在当前窗口打开url
					 可以后退
						 open('url','_self');
						 location.href='url';
						 location.assign('url');
					 不可以后退
						 location.replace('url');
				 刷新
					 普通刷新
						 优先从本地浏览器缓存中获取资源，除非本地缓存没有或过期，才被迫从服务器重新下载
						 history.go(0);
						 location.reload();
					 强制刷新
						 强制浏览器跳过本地缓存，总是直接从服务器下载新资源
						 location.reload(true);
			 浏览器配置信息对象
				 判断浏览器是否启用cookie
					if(navigator.cookieEnabled)
				 浏览器安装的插件的信息集合
					navigator.plugins
						 判断浏览器是否安装了指定插件
							if(navigator.plugins['完整插件名']!==undefined)
				 保存浏览器名称和版本号的字符串
					 navigator.userAgent
						 查看五大浏览器名称和版本号代码
							//以下按钮必须用edge浏览器测试:
							//F12->仿真->用户代理字符串->切换五大浏览器:IE Chrome Firefox Safari Opera
							var ua=navigator.userAgent;
							document.write("<h1>"+ua+"</h1>");
							var browser,version;
							//先判断浏览器名称: 碰运气
							//先判断当前ua中是否包含Firefox
							//if(ua.indexOf("Firefox")!=-1)
							if(/Firefox/.test(ua))
							  //如果包含说明当前浏览器一定是Firefox
							  browser="Firefox";
							//接着判断当前ua中是否包含IE
							else if(ua.indexOf("IE")!=-1)
							  //如果包含说明当前浏览器一定是IE
							  browser="IE";
							//如果没有IE，但有Trident
							else if(ua.indexOf("Trident")!=-1)
							  //也说明是IE浏览器，且版本一定是11
							  browser="IE",version=11;
							//接着判断当前ua中是否包含OPR
							else if(ua.indexOf("OPR")!=-1)
							  //如果包含说明当前浏览器一定是OPR
							  browser="OPR";
							//接着判断当前ua中是否包含Edge
							else if(ua.indexOf("Edge")!=-1)
							  //如果包含说明当前浏览器一定是Edge
							  browser="Edge";
							//接着判断当前ua中是否包含Chrome
							else if(ua.indexOf("Chrome")!=-1)
							  //如果包含说明当前浏览器一定是Chrome
							  browser="Chrome";
							//接着判断当前ua中是否包含Safari
							else if(ua.indexOf("Safari")!=-1)
							  //如果包含说明当前浏览器一定是Safari
							  browser="Safari";
							document.write("<h1>"+browser+"</h1>")

							if(version===undefined){
							  //获得浏览器的版本号
							  //先获得浏览器名称在ua中的位置i
							  var i=ua.indexOf(browser);
							  //i先跳过浏览器的名称的长度，再多跳过一位
							  i+=browser.length+1;
							  //从版本号所在位置先后取3位字符串，转为整数
							  version=parseInt(ua.slice(i,i+3));
							}
							document.write("<h1>"+version+"</h1>")
			 定时器
				 周期性定时器
					var n=setInterval(fun,3000);
					clearInterval(n);
						停止重启
							//启动定时器
							var n=setInterval(task,3000);
							//停止定时器
							//查找id为slider的div容器元素
							var div=document.getElementById("slider");
							//当鼠标进入div时
							div.onmouseover=function(){
							  clearInterval(n);//停止定时器
							}
							div.onmouseout=function(){//当鼠标移出div时
							//重新启动定时器
							  n=setInterval(task,3000);
							}
				 一次性定时器
					var n=setTimeout(fun,3000);
					clearTimeout(n);
			 事件
				 元素绑定事件处理函数
					 <a href="javascript:;" onclick="a()">abc</a>
					 aobj.onclick=function(){}
					 aobj.addEventListener('click',afun); //事件名称，函数名称
						 添加a元素的事件监听对象，形成队列
				 移除元素已经绑定的事件处理函数
					 aobj.removeEventListener('click',afun);
				 事件模型
					 事件发生时，浏览器的执行过程
						捕获：由外向内，记录各级父元素上绑定的事件处理函数
						目标触发：优先触发目标元素上的事件处理函数
						漫延：由内向外，依次触发捕获时记录的各级父元素上的事件处理函数
				 事件对象
					事件发生时，自动创建的，保存事件信息，并提供操作事件的API的对象
					作为事件处理函数的第一个参数传入
						aobj.onclick=function(e){}
					停止漫延(排除事件冒泡给事件带来的影响)
						aobj.onclick=function(e){
							e.stopPropagation();
						}
					利用事件冒泡
						浏览器采用遍历的方式找到事件监听对象以触发事件
						利用事件冒泡减少事件监听对象的数量达到优化目的
							实例
								<script>
								keys.addEventListener('click',function(e){
									if(e.target.nodeName=="BUTTON"){//e.target获得目标元素并判断目标元素是否是想要的
										switch(e.target.innerHTML){
											case "C"://C 清空sc的内容
												sc.value="";
												break;
											case "="://= 取出sc的内容交给eval(),将计算结果放回sc的内容
												sc.value=eval(sc.value);
												break;
											default://1 2 3 4 + - 将按钮的内容追加到sc的内容中
												sc.value+=e.target.innerHTML;
										}
									}
								});
								</script>
					阻止事件的默认行为
						实例一
						<input type="submit" value="保存"/>
						<script>
							var form=document.forms[0];
							//当提交表单时，自动触发
							form.onsubmit=function(e){
								var rName=vali(txtName,/^\w{1,10}$/);
								var rPwd=vali(txtPwd,/^\d{6}$/);
								//如果rName和rPwd不都为true
								if(!(rName&&rPwd))
									e.preventDefault();//就阻止提交！
							}
						</script>
						实例二
						<input type="button" value="保存"/>
						<script>
							var form=document.forms[0];
							//当提交表单时，自动触发
							btn.oncli=function(e){
								var rName=vali(txtName,/^\w{1,10}$/);
								var rPwd=vali(txtPwd,/^\d{6}$/);
								//如果rName和rPwd不都为true
								if(!(rName&&rPwd))
									e.preventDefault();//就阻止提交！
								else
									form.submit();
							}
						</script>
						实例三
							 HTML5的拖拽API
								可能和浏览器的一些快捷键发生冲突。
								通常都要先阻止默认的行为，再编写自己的拖拽
					 事件发生时，鼠标的坐标位置
						相对于屏幕左上角: e.screenX  e.screenY
						相对于文档显示区左上角: e.clientX   e.clientY
						相对于当前事件所在元素左上角的偏移量: e.offsetX   e.offsetY
						 实例
							 <style>
								div{
									position:fixed;width:100px;height:100px;
									background-image:url(images/xiaoxin.gif);
									background-size:100%;
								}
							 </style>
							 <div id="pop"></div>
							 <script>
								var canMove=false;//开关
								var offsetX,offsetY;//保存移动过程中鼠标相对于div左上角的固定不变的偏移量
								//当在pop上按下鼠标时
								pop.onmousedown=function(e){
									canMove=true;//打开开关
									//开始拖拽时，就获得鼠标相对于div左上角的偏移量，用于之后移动过程中top、left的计算
									offsetX=e.offsetX;
									offsetY=e.offsetY;
								}
								//在窗口范围内移动鼠标
								window.onmousemove=function(e){
									if(canMove){//如果打开了开关
										//pop才跟随鼠标移动
										//先获得鼠标相对于文档显示区左上角的当前位置
										var x=e.clientX,y=e.clientY;
										//根据鼠标当前位置，计算出pop左上角的新位置：鼠标相对于文档显示区边框的距离-鼠标相对于div左上角的偏移量
										var top=y-offsetY;
										var left=x-offsetX;
										//将pop移动到新位置上
										pop.style.top=top+"px";
										pop.style.left=left+"px";
									}
								}
								//当在pop上抬起按键时
								pop.onmouseup=function(){
									canMove=false;//关闭开关
								}
							 </script>
					滚动事件: 
						 当窗口中的内容发生滚动时，事件被触发
						  window.onscroll=function(){
							//获得页面滚动过的距离: 页面顶部超出文档显示区的距离。
							var scrollTop=document.body.scrollTop
										||document.documentElement.scrollTop
										 //存在兼容性问题，用||赋备用值
						  }
						 实例
							<style>
								body{height:2000px;}
								#toTop{
								  position:fixed;
								  bottom:100px;
								  right:0;
								  display:none;
								}
							</style>
							<div id="toTop">
							  <a href="#">返回顶部</a>
							</div>
							<script>
							//当窗口的内容发生滚动时自动触发
							window.onscroll=function(){
							  //获得滚动过的距离——网页顶部超出文档显示区顶部的距离
							  var scrollTop=document.body.scrollTop
								||document.documentElement.scrollTop;
							  console.log(scrollTop);
							  if(scrollTop>=500)
								toTop.style.display="block";
							  else
								toTop.style.display="none";
							}
							</script>
							

	



































