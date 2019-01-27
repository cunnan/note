jQuery
	 jQuery是第三方开发的执行DOM操作的极简化的函数库
	 第三方: 下载才能用
	 jQuery都是用函数解决一切问题！
	 增删改查 事件绑定 动画 ajax
	 解决了绝大部分兼容性问题，凡是jQuery让用的，都没有兼容性问题
	 用于PC端的大项目和框架开发
	 官网
		jquery.com
		版本
			1.x 
				支持IE8
			2.x,3.x
				不支持IE8
	 使用JQuery
		 先引入JQuery脚本，再编写自定义脚本
	 原理
		 引入jquery.js，其实是向文档全局添加一种新的类型jQuery
			包含2部分
				 构造函数function jQuery(){}
				 原型对象 jQuery.prototype={所有简化版API}
	 创建jQuery对象
		jQuery对象是一个封装多个DOM元素的类数组对象
		 var $obj=$('选择器')
		 var $obj=$(this)
	 jQuery API三大特点
		 函数API没有参数时，读取内容，有参数时，修改内容
		 函数API自带遍历功能，对jQuery对象(类数组对象)调用一次API，等效于对jQuery内封装的多个DOM元素，每个都调用一次API.
		 函数API都自动返回正在使用的jQuery对象本身，可使用链式操作，简化代码
	 jQuery应用
		 查
			 按选择器查找
				基本选择器
					$('#id') 
					$('span') 
					$('.class') 
					$('*') 
					$('select1,select2')
				层次选择器
					$('父 后代') 
					$('父>子') 
					$('兄+弟') 
					$('兄~弟') 
				子元素过滤选择器
					$('ul>li:first-child')
					$('ul>li:last-child')
					$('ul>li:nth-child(i)')
					$('ul>li:only-child')
				层次选择器
					$('[class]')
					$('[class=class1]')
					$('[class!=class5不等于]')
					$('[class^=class2开头]')
					$('[class$=class3结尾]')
					$('[class*=class4部分]')
					$('[class][id]')
				基本过滤选择器
					 先将所有符合条件的元素放入一个集合中，再统一编号，然后选择集合中指定位置的元素
					 $('ul>li:first')
					 $('ul>li:last')
					 $("ul>li:not('选择器')")
					 $('ul>li:even')
					 $('ul>li:odd')
					 $('ul>li:eq(5)')
					 $('ul>li:lt(5)')
					 $('ul>li:gt(5)')
					 $('ul>li:focus')
					 $('ul>li:animated') 选择和判断正在播放动画的元素
					 $('ul>li:header')匹配如 h1, h2, h3之类的标题元素
				可见性选择器
					 $("tr:hidden") $("input:hidden") 匹配所有不可见元素，或者type为hidden的元素
					 $("tr:visible") 匹配所有的可见元素
				内容选择器
					$("td:empty") 匹配所有不包含子元素或者文本的空元素
					$("td:parent") 匹配含有子元素或者文本的元素
					$("div:contains('John')") 匹配包含给定文本的元素
					$("div:has(p)").addClass("test") 匹配含有(选择器所匹配的元素)的元素
				表单对象属性选择器
					$("input:enabled") 匹配所有可用元素
					$("input:disabled") 匹配所有不可用元素
					$("input:checked") 匹配所有选中的被选中元素(复选框、单选框等，不包括select中的option)
					$("select option:selected") 匹配所有选中的option元素
				表单选择器
					$(":input") 匹配所有 input, textarea, select 和 button 元素
					$(":text") 匹配所有的单行文本框
					$(":password") 匹配所有密码框
					$(":radio") 匹配所有单选按钮
					$(":checkbox") 匹配所有复选框
					$(":submit") 匹配所有提交按钮
					$(":image") 匹配所有图像域
					$(":reset") 匹配所有重置按钮
					$(":button") 匹配所有按钮
					$(":file") 匹配所有文件域
					$("input:hidden") 匹配所有不可见元素，或者type为hidden的元素
			筛选
				 查找
					 $("div").children() 查找DIV中的每个子元素
					 $("div").children(".selected") 在每个div中查找 .selected 的类。
					 $("p").find("span") 从所有的段落开始，进一步搜索下面的span元素
					 $("p").parent() 查找每个段落的父元素
					 $("p").parent(".selected") 查找段落的父元素中每个类名为selected的父元素。
					 $("span").parents() 找到每个span元素的所有祖先元素。
					 $("span").parents("p") 找到每个span的所有是p元素的祖先元素。
					 $('li.item-a').parentsUntil('.level-1') 查找item-a的祖先，但不包括level-1
					 $("p").next() 找到每个段落的后面紧邻的同辈元素。
					 $("p").next(".selected") 找到每个段落的后面紧邻的同辈元素中类名为selected的元素
					 $("div:first").nextAll() 第一个div之后的所有元素
					 $('#term-2').nextUntil('dt') #term-2后面直到dt前的元素
					 $("p").prev() 找到每个段落紧邻的前一个同辈元素。
					 $("p").prev(".selected") 找到每个段落紧邻的前一个同辈元素中类名为selected的元素。
					 $("div:last").prevAll() 最后一个之前的所有div
					 $('#term-2').prevUntil('dt') 给#term-2前面直到dt前的元素加上红色背景
					 $("div").siblings() 找到每个div的所有同辈元素。
					 $("div").siblings(".selected") 找到每个div的所有同辈元素中带有类名为selected的元素。
				 过滤
					 $("p").eq(1) 获取匹配的第二个元素，从0开始
					 $("p").eq(-1) 获取匹配的倒数第二个元素，从-1开始，
					 $('li').first() 获取匹配的第一个元素
					 $('li').last() 获取匹配的最后一个元素
					 $(this).hasClass("protected") 给包含有某个类的元素进行一个动画
					 $("p").filter(".selected") 保留带有select类的元素
					 $("p").filter(".selected, :first") 保留第一个或带有select类的元素
					 $("input[type='checkbox']").parent().is("form") input元素的父元素是一个表单元素，所以返回true
					 $("p").not( $("#selected")[0] ) 从p元素中删除带有 select 的ID的元素 
						 删除与指定表达式匹配的元素
					 $('li').has('ul').css('background-color', 'red'); 给含有ul的li加上背景色
						 保留包含特定后代的元素，去掉那些不含有指定后代的元素
					 $("p").slice(0, 1) 选择第一个p元素
							 选取一个匹配的子集 与原来的slice方法类似
							 start 开始选取子集的位置。第一个元素是0.如果是负数，则可以从集合的尾部开始选起
							 end 结束选取自己的位置，如果不指定，则就是本身的结尾
				 串联
					 $("p").next().end() 选取所有的p元素，查找并选取span子元素，然后再回过来选取p元素
		改
			修改节点对象内容
				$('div').html('新HTML片段');
				$('div').text('新文本');
				$('div').val('表单元素值');
			修改节点对象属性
				修改HTML标准属性
					核心DOM API
						$('input').attr('name','[user]')
						$('input').attr({
							name:'user',
							value:'xiaoli'
						})
					HTML DOM API
						$('input').prop('name','user')
						$('input').prop({
							name:'user',
							value:'xiaoli'
						})
				修改状态属性 enabled disabled checked selected
					$('input').attr('checked',[true])
					$('input').prop('checked',[true])
				修改自定义扩展属性
					$('div').attr('data-toggle','tab1')
			修改节点对象样式
				修改节点对象指定样式
					$('div').css('width',300)
					$('div').css({
						width:300
						height:200
						//jQuery中长度数值不用加单位！
					})
				用class批量修改节点对象样式
					$('div').addClass("class1 class2")
				    $('div').removeClass("class1")
				    $('div').hasClass("class1")
				    $('div').toggleClass("down") 在有或没有down选择器之间切换
						 相当于: if(!$btn.hasClass("down"))
									//为当前按钮添加down class
									$btn.addClass("down");
								 else
									//为当前按钮移除down class
									$btn.removeClass("down");
		文档处理
			 var $elem=$("html片段"); 创建新元素，及其子元素
			 内部插入
				 $("p").append("<b>Hello</b>"); 向所有段落中追加一些HTML标记。
				 $("p").appendTo("div"); 把所有段落追加到div元素中
				 $("p").prepend("<b>Hello</b>"); 向所有段落中前置一些HTML标记代码
				 $("p").prependTo("#foo"); 把所有段落追加到ID值为foo的元素中。
			 外部插入
				$("p").after( $("b") ); 在所有段落中后插入一个jQuery对象
				$("p").after("<b>Hello</b>"); 在所有段落之后插入一些HTML标记代码。
				$("p").insertAfter("#foo"); 把所有段落插入到一个元素之后
				$("p").before("<b>Hello</b>"); 在所有段落之前插入一些HTML标记代码。
				$("p").before( $("b") ); 在所有段落中前插入一个jQuery对象
				$("p").insertBefore("#foo"); 把所有段落插入到一个元素之前
			 替换
				 $("p").replaceWith("<b>Paragraph. </b>"); 把所有的段落标记替换成加粗的标记。
				 $('.third').replaceWith($('.first')); 用第一段替换第三段，你可以发现他是移动到目标位置来替换，而不是复制一份来替换。
				 $("<b>Paragraph. </b>").replaceAll("p"); 把所有的段落标记替换成加粗标记
			 删除
				 $("p").remove(); 从DOM中把所有段落删除
				 $("p").remove(".hello"); 从DOM中把带有hello类的段落删除
					 这个方法不会把匹配的元素从jQuery对象中删除，因而可以在将来再使用这些匹配的元素。
					 但除了这个元素本身得以保留之外，其他的比如绑定的事件，附加的数据等都会被移除。
				 $("p").detach(); 从DOM中把所有段落删除
					 这个方法不会把匹配的元素从jQuery对象中删除，因而可以在将来再使用这些匹配的元素。
					 与remove()不同的是，所有绑定的事件、附加的数据等都会保留下来。
				 $("p").empty(); 把所有段落的子元素（包括文本节点）删除
			 复制
				 $("b").clone().prependTo("p"); 克隆所有b元素（并选中这些克隆的副本），然后将它们前置到所有段落中。
				 $("button").click(function(){//创建一个按钮，他可以复制自己，并且他的副本也有同样功能
					 $(this).clone(true).insertAfter(this);
				 });
		事件
			 普通绑定事件处理函数
				$('div').on('click'[,{a:3}],function(e){var a=e.data.a}) 类似DOM中的事件监听对象
			 同时绑定多个事件类型
				$('div').on('mouseenter mouseleave',function(){
                    $(this).toggleClass('entered');
                 });
				$('div').on('mouseenter mouseleave'[,{a:3}],function(e){
                    console.log(e)
                    $(this).toggleClass('entered');
                 });
			 同时绑定多个事件类型/事件处理函数
				$("p").on({
                    click:function(){$(this).toggleClass('click')},
                    mouseover:function(){$(this).addClass('entered');},  
                    mouseout:function(){$(this).removeClass('entered');}  
                 });
			 解绑事件处理函数
				$('div').off('click',函数名称)
			 事件冒泡写法
				//通过在事件处理函数中返回false也可以阻止事件冒泡 ||event.stopPropagation();
				$parent.on("click","button",function(){
					$(this)//this指当前触发事件的按钮，相当于DOM中的e.target
				})
			 事件冒泡写法 同时绑定多个事件类型/事件处理函数 并在事件处理函数执行前传入数据
				$("div").on(                   
                  {
                    click:function(e){
                       var a=e.target
                       if(a.nodeName=='P'){
                        console.log(e)
                        if(e){
                            $(a).toggleClass('click')
                        }
                       }
                    },
                    mouseover:function(e){
                        var a=e.target
                        if(a.nodeName=='P'){
                            console.log(e)
                            if(e){
                                $(a).addClass('entered');
                            }
                           }
                      
                    },  
                    mouseout:function(e){
                        var a=e.target
                        if(a.nodeName=='P'){
                            console.log(e)
                            if(e){
                                $(a).removeClass('entered click');
                            }
                           }
                    },  
                  }[,
                  {
                    click:5,
                    mouseover:6
                  }]
                );
			事件触发器
				在每一个匹配的元素上触发某类事件
					$('button').trigger('click') 写了这句代码就能触发绑定在button上的click事件的事件处理函数
					$('button').trigger('click'[,{a:1}]) 写了这句代码就能触发绑定在button上的click事件,以数组结构向事件处理函数中传递数据
						实例
							function f(event,a,b){
								console.log(a,b)
							}
							$('.div').on('click',f)
							$('.div').trigger('click',[{a:1},2])
				触发指定的事件类型上所有绑定的处理函数。但不会执行浏览器默认动作，也不会产生事件冒泡
					$('button').triggerHandler('click')
					$('button').triggerHandler('click'[,{a:1}])
					triggerHandler与trigger的区别
						 第一，不会触发浏览器默认事件。
						 第二，只触发jQuery对象集合中第一个元素的事件处理函数。
						 第三，这个方法的返回的是事件处理函数的返回值，而不是据有可链性的jQuery对象。
							此外，如果最开始的jQuery对象集合为空，则这个方法返回 undefined 
				自定义事件
					$('div').on('myEvent',function(){console.log(1)})
					$('div').triggerHandler('myEvent')
			 21种常用事件的简写方式
				$('div').click(function(){})
					常见事件
						change
						click
						dblclick
						blur
						focus
						focusin 在父元素上检测子元素获取焦点的情况。
						focusout 在父元素上检测子元素失去焦点的情况。
						$(window).keydown(function(e){console.log(e)})
						$('button').keyup(function(e){console.log(e)})
						$('input').keypress(function(e){console.log(e)})
						$(window).resize(function(){ alert("Stop it!");}); 文档显示窗口大小发生变化时触发
						$(window).scroll( function() { /* ...do something... */ } ); 当页面滚动条变化时，执行的函数
						$("input").select(); 触发所有input元素的select事件
						$(":text").select(function(){}); 当文本框中文本被选中时执行的函数
						$("form:first").submit();提交本页的第一个表单
						$("form:first").submit(function(){});提交本页的第一个表单
						$(window).unload(function(){ alert("Bye now!");});
							 当发生以下情况时，会发出 unload 事件：
								 点击某个离开页面的链接 
								 在地址栏中键入了新的 URL 
								 使用前进或后退按钮 
								 关闭浏览器 
								 重新加载页面 
						mouseover
						mouseout
						mousedown
						mouseup
						mousemove
						mouseenter
						mouseleave
						hover
							 $("td").hover(//鼠标悬停的表格加上特定的类
							 //滑入滑出事件处理函数相同时，写一个函数即可
								 function(){
									$(this).addClass("hover");
								 },
								 function(){
									$(this).removeClass("hover");
								 }
							 );
		效果
			 简单效果
				显示隐藏	
					show(ms) hide(ms) toggle() //可加毫秒数，建议不加，用js写死的效果不如用css写的效果效率高，css有专门的解释引擎
				上滑下滑
					slideUp(ms) slideDown(ms) slideToggle()
				淡入淡出
					fadeIn(ms) fadeOut(ms) fadeToggle() 
			 万能动画
				支持单个数值的css属性实施动画效果
					var $animate=$('div').animate({//并发执行
						width:200,
						height:300
					},3000ms)
						$animate.stop()//停止动画
					var $animate=$('div').animate({width:200},3000ms)//排队执行
							.animate({height:300},2000ms)
						$animate.stop(true)//停止当前动画并清空动画队列，解决只能停止当前动画后续动画还能继续执行的问题
					var $animate=$('div').animate({width:200},3000ms)//排队执行
							.animate(
								{height:300},
								2000ms[,
								//回调函数会在动画播放后自动调用执行
								//this指当前元素
								function(){$(this).hide()}]
								)
		类数组操作
			遍历
				实例方法
					$('div').each(function(i,elem){}
				静态方法
					$.each(类数组对象/数组,function(i,elem){})
			查找
				实例
					 <p>test6</p>
					 <p>test7</p>
					 <p>test8</p>
					 <div class="q">
						<div>test9</div>
						<div>test10</div>
					 </div>
					 <div class="q">res1</div>
					 <div class="q" id='div1'>res2</div>
					 <div class="q">res3</div>
					 <div class="q">res4</div>
					 <div class="q">res5</div>
					 <script>
						 var a=$('#div1').index()
						 console.log(a)//相对平级元素的位置
						 var b=$('#div1').index('div')
						 console.log(b)//在所有div集合中的位置
						 var c=$('.q').index(div1)
						 console.log(c)//在.q集合中的位置
						 var d=$('.q').index($('#div1'))
						 console.log(d)//在.q集合中的位置
					 </script>
		jQuery 对象访问
			 $("img").each(function(i){//迭代两个图像，并设置它们的 src 属性。注意:此处 this 指代的是 DOM 对象而非 jQuery 对象。
			   this.src = "test" + i + ".jpg";
			 });

			 $("img").length; 计算文档中所有图片数量
			
			$("ul").selector ul //返回选择器
			$("ul li").selector  ul li
			$("div#foo ul:not([class])").selector div#foo ul:not([class])

			$("ul").context  //返回内容

			$("img").get().reverse(); 取得所有匹配的 DOM 元素集合。并用数组内建的 reverse 方法将数组反向。
			$("img").get(0); 取得DOM元素集合中的0位置的DOM元素，注意，这里不是jQuery对象了
		添加自定义jQueryAPI
			在jQuery的原型对象中添加自定义函数
				jQuery.fn相当于jQuery.prototype
			定义新API
				jQuery.fn.新API=function(){}
			调用新API
				$(..).新API()
			课下
				示例
					描述:在jQuery命名空间上增加两个函数。
					jQuery 代码:
						jQuery.extend({
						  min: function(a, b) { return a < b ? a : b; },
						  max: function(a, b) { return a > b ? a : b; }
						});
					结果:
						jQuery.min(2,3); // => 2
						jQuery.max(4,5); // => 5
				示例
					描述:增加两个插件方法。
					jQuery 代码:
						jQuery.fn.extend({
						  check: function() {
							return this.each(function() { this.checked = true; });
						  },
						  uncheck: function() {
							return this.each(function() { this.checked = false; });
						  }
						});
					结果:
						$("input[type=checkbox]").check();
						$("input[type=radio]").uncheck();
		插件
			也叫组件
				 官方插件
				 第三方插件
				 自定义插件
					 前提: 已经用HTML，CSS，JS实现了插件的效果和功能
					 定义插件
						 1. 将插件的CSS提取出来，保存在一个独立的css文件
						 要求: 为了避免和其他插件存在相同的样式类发生冲突，必须保证每个样式类都要以统一的插件类名作为前缀！
						 2. 定义插件的js: 向jQuery的原型对象中添加自定义插件函数
						  jQuery.fn.插件函数=function(){
							 //this->$(父元素)
							 //2件事: 
							 //1. 侵入class:
							 //2. 绑定事件处理函数: 
							 
						 }//调用时: $(父元素).插件函数();
					 使用插件
						 1. 引入插件的css
						 2. 按照插件要求编写html
						 3. 引入jquery.js和插件.js
						 4. 查找插件父元素，调用插件函数
		ajax
			 $.ajax({
			  url:"服务端接口地址",
			  type:"get/post",
			  data:{ 参数1:值1, ... },
			  dataType:"json", //可自动将服务器返回的json字符串转为对象
			  success:function(res){//onreadystatechange 返回响应，且响应成功时自动触发
				//res会自动获得服务端返回的数据
				//用res执行DOM操作
			  }
			 })
			 //jquery 3.x 支持Promise,替代success,避免因函数作实参传递引发的回调地狱
			 .then(function(res){
			 })
		 跨域
			  一个域名下网页，向另一个域名下发送请求，请求另一个域名下的资源
				   比如: 现在在http://localhost/index.html下
					 <script src="http://www.jquery.com/jquery.js">
					 <img src="http://tmooc.cn/stylesheet/img/logo.png"/>
					 <link rel="stylesheet" href="http://v4.bootcss.com/bootstrap.css"/>
			 问题: ajax的xhr对象，禁止发送跨域请求
				  包括: 
				   1. 一级域名不同: www.a.com    ->      www.b.com
				   2. 二级域名不同: oa.tedu.com   ->      hr.tedu.com
				   3. 端口不同: localhost:5500      ->   localhost:3000
				   4. 协议不同: http:localhost      ->   https:localhost
								80                   443
				   5. 即使同一台机器: 域名   ->   IP 
									localhost   127.0.0.1
			 如何发送异步跨域请求: 
				  1. JSONP: JSON with Padding 填充式json
				   问题1: ajax不能发送跨域请求
				   解决1: 请<script>元素帮助发送请求
				   问题2: <script>发送请求，必须返回一条可执行的js语句
				   解决2: 修改服务端res.write()，其中，将要返回的数据，填充进一条可执行的js语句中，一起返回。
				   问题3: 服务端返回的js语句是写死的，众口难调
				   解决3: 在客户端定义一个处理函数
						  function show(res){
							//对res执行任何想要的操作
						  }
						  服务端返回一条函数调用语句，函数名必须和客户端定义的函数名保持一致: 
						  res.write(`show('${weather}')`)
						  返回: show('晴 -10~-2 from dong')
						  在客户端执行时: 
							调用show函数: 
							   参数res自动得到了'晴 -10~-2 from dong'
						  实现了: 客户端操作与服务端的分离
				   问题4: 服务端将函数名规定死，也是众口难调
				   解决4: 客户端发送:
						  <script src="url?callback=客户端函数名"
						  服务端: 
						   先获得req中callback变量中的函数名
						   再将函数名拼接到res.write()中，代替写死的函数名
						  实现了: 处理逻辑和函数名与服务端无关
				   问题5: <script>在客户端只写死一次，仅能在首次加载页面时执行一次，无法反复发送请求
				   解决5: 动态添加<script>元素
						  在单击事件中: 
						   $('<script src="http://localhost:3000?callback=doit">').appendTo("body");
				   问题6: 新增的<script>无法自动删除，造成积压
				   解决6: 在自定义的回调函数结尾，查找最后一个script，删除。

				  2.$.ajax可自动实现jsonp效果: 
					 $.ajax({
					   url:"url",
					   ... : ... ,
					   dataType:"jsonp", //使用jsonp方式请求服务端
					   success:function(res){ ... }
					 })
					 原理: 同以上6步: 
					  1. 动态创建script元素发送请求
					  2. 自动为success匿名函数定义随机函数名拼接到url?callback=随机函数
					  3. success函数执行后，自动删除script元素
					 强调:jsonp单靠客户端无法实现，必须服务端负责拼接函数名和要返回的数据。所以必须客户端服务端同时修改才可支持。
				 3.CORS设置服务端的返回头信息
					 res.writeHead(200,{
						 'Content-Type':'text/html;charset=UTF8'
						"Access-Control-Allow-Origin":"*"//允许跨域访问的url
					  });
					 var lid=req.query.lid;
					 res.write(JSON.stringify(output));
					 res.end();
		位置
			var offset = $("p:last").offset();
			$("p:last").html( "left: " + offset.left + ", top: " + offset.top );//获取第二段的偏移
			
			$("p:last").offset({ top: 10, left: 30 }); 
				 获取匹配元素在当前视口的相对偏移。
				 返回的对象包含两个整型属性：top 和 left，以像素计。此方法只对可见元素有效
			
			var p = $("p:first");
			var position = p.position();
			$("p:last").html( "left: " + position.left + ", top: " + position.top );
				 获取匹配元素相对父元素的偏移。
				 返回的对象包含两个整型属性：top 和 left。为精确计算结果，请在补白、边框和填充属性上使用像素单位。此方法只对可见元素有效
			
			var p = $("p:first");
			$("p:last").text( "scrollTop:" + p.scrollTop() );//获取第一段相对滚动条顶部的偏移

			$("div.demo").scrollTop(300);//设置相对滚动条顶部的偏移
				 获取匹配元素相对滚动条顶部的偏移。此方法对可见和隐藏元素均有效。

			var p = $("p:first");
			$("p:last").text( "scrollLeft:" + p.scrollLeft() );//获取第一段相对滚动条左侧的偏移

			$("div.demo").scrollLeft(300); //设置相对滚动条左侧的偏移
				 获取匹配元素相对滚动条左侧的偏移。此方法对可见和隐藏元素均有效。






			

	
















	






























