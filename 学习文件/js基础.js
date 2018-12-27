学习一门语言的基本步骤
	 背景知识：
		 历史、现状、特点、应用场景
	 搭建开发环境
		 编写hello world
	 变量和常量
	 数据类型
	 运算符
	 逻辑结构
	 通用小程序
	 函数和对象
	 第三方库、框架
	 实用项目

JS概述
	 历史
		 1995年，JS最早出现在Netscape的浏览器中
		 2009年，JS遵循CommonJS规范，开始向服务器端发展
	 现状
		 既可以运行在客户端浏览器，也可以运行在服务器端
	 特点
		 解释执行
		 弱类型
		 基于对象
		 跨平台
	 JS的执行环境
		 浏览器自带的JS解释器（B）
		 NODEJS下的JS解释器(S)
			 官网：http://nodeja.org
			 在命令行下 node -v 查看系统中nodejs版本号
	 执行JS代码
		 浏览器：
			 创建01.js和01.html
			 在01.html中引入01.js <script src="01.js"></script>
		 NODEJS下：
			 命令行下 node < 路径/01.js
	 JS代码规范
		 区分大小写
		 每行代码结束的分号 推荐加分号
		 注释
			 //单行注释
			 /**/多行注释
变量
	 存放数据的容器
	 声明变量
		 var a=1;
	 变量命名规则
		 字母、数字、下划线、美元符号，但数字不能开头
		 user_name userName
		 不能用关键字和保留字作变量名
	 变量声明后可重新赋值
	 变量声明后未赋值，此时的值是undefined
	 使用未声明的变量会报错
	 一次声明多个变量
		 var a=1,b=3,c=a+b;
	 变量存储在栈内存中
常量
	 一旦声明不能重新赋值
	 const PI=3.14;
数据类型
	 原始类型
		 数值型
			 整型 在内存中占4个字节
				 8进制 以数字0开头 var num8=012;
				 16进制 以0x开头 var num16=0x1; 不区分大小写
			 浮点型 占8个字节
				 1234.56 -> 1.23456*10^3 -> var data_float=1.23456E3; console.log(data_float);
							    var data_float=123456E-2; console.log(data_float);
		 字符串型
			 数据被引号包含就是字符串类型；不区分单双引号
		 布尔型
			 取值
				 true|false
			 应用场景 是否登录、是否注册、是否是会员、是否在售
				 isLogin=true;isOnsale=false;
		 未定义型(undefined)
			 声明了变量但未赋值，结果就是undefined
				 var a;
		 空null
			 用于释放引用类型的地址
	 引用类型
	 数据类型转换
		 加号（+）的作用
			 执行加法运算
			 执行字符串的拼接
		 隐式转换
			 布尔型->数值型->字符串型
			 数值型+字符串：按字符串处理 1+'1' -> '11'
			 数值型+布尔型：按数值型处理 1+true -> 2
			 字符串+布尔型：按字符串处理 '1'+true -> '1true'
			 -*/:按数值型处理，若含有非数字则返回NaN(Not a Number),数据类型为数值型
		 强制转换
			 将任意数据类型转换为整型 parseInt()-->向下取整
				 数据从左往右，遇到非数字或小数点结束，并返回之前的部分,若之前的部分没有，则返回NaN
					 parseInt('a1') -> NaN
			 将任意数据类型转换为浮点型 parseFloat()
				 数据从左往右，遇到非数字结束，并返回之前的部分，若之前的部分没有，则返回NaN
			 将任意类型转换为数值型 Number()
				 数据从左往右，遇到非数字结束，并返回NaN;但是转换布尔型true|false时，返回1|0
			 将数值型和布尔型转换为字符串型 var.toString()
				 var var_num=10;
				 var_num.toString(进制：2|8|10|16);
				 var var_bool=true;
				 var_bool.toString(); -> true 只是数据类型变成了string
运算符
	 表达式：数据由运算符连接构成表达式
	 算数运算符
		 +|-|*|/
		 % 取余
		 ++ 在原来的基础上加1   var num=1;console.log(++num);console.log(num);->2 2
					var num=1;console.log(num++);console.log(num);->1 2
		 -- 在原来的基础上减1
	 比较运算符
		 返回一个布尔型结果
		 > < >= <= == != ===全等于 !==不全等于
			 数字和字符串比较，字符串转成数字 3>'10' ->false
			 字符串和字符串比较，比较首个Unicode码，依次对比，直到分出大小为止 '3'>'10' ->true
			 3>'10a' false -------->'10a'->NaN  
			 NaN==NaN false
			 NaN!=NaN true
	 逻辑运算符
		 返回一个布尔型结果
		 && || ！
		 逻辑短路
			 && 当第一个条件为false时，就不需要执行第二个条件
			 || 当第一个条件为true时，就不需要再执行第二个条件
				 var a=10;a>15 && console.log(a);
	 位运算符（了解）
		 在执行运算的时候，会把数字转成二进制进行计算
		 按位与（&）
			 3&5 上下两位都是1，结果是1，否则是0
			 011 
				 101
			 001->1
		 按位或（|）
			 3|5 ->1 上下两位含有1，结果是1，否则是0
			 011
			 101
			 111->7
		 按位异或（^）上下两位不同为1，相同为0
			 3^5
			 011
			 101
			 110->6
		 按位右移（>>）
			 7>>1 111->011->3
			 7>>2 111->001->1
		 按位左移（<<）
			 7<<2 111->11100->28
	 赋值运算符
		 = 
		 a+=3;|a=a+3;
	 三目运算符
		 单目运算符：只需要一个数据或表达式 a-- a++ !false
		 双目运算符：需要两个数据或表达式 
			 + - * / % > < >= <= != === !== && || & | ^ << >> = += 
		 三目运算符：需要三个数据或表达式
			 条件表达式？表达式 1：表达式2
			 表达式为true时，执行表达式1；表达式为false时，执行表达式2
			 var a=20;
			 a>=18?console.log('成年人'):console.log('未成年人');->成年人
流程控制
	程序是由算法和数据组成的
		 顺序执行
		 选择执行
			 if语句
				 语句1；
				 if(条件表达式){
					 语句2；
				 }
				 语句3； 
				 if(0|NaN|false|''|undefined|null)->false
				 if(true|1)->true
			 if..else..语句
				 语句1；
				 if(条件表达式){
					 语句2；
				 }else{
					 语句3；
				 }
			 if..else..嵌套语句
				 if(条件表达式1){
					 语句1；
				 }else if(条件表达式2){
					 语句2；
				 }...
				 else if(条件表达式n-1){
					 语句n-1；
				 }else{
					 语句n；
				 }
			 switch..case语句(case中是按照全等于进行比较的，需要值和数据类型都满足)
				 switch(表达式){
					 case 1://如果表达式的值为1，执行语句1
						 语句1；
						 break；//终止，不会再执行其他语句
					 ...
					 case n:
						 语句n;
						 break;
					 default:
						 语句n+1;
				 }
			 if语句和switch语句比较
				 相同点：	
					 都可以用于多项分支语句
				 不同点：
					 if语句可判断相等或不相等的情况
					 switch语句只使用全等的情况，结构清晰，效率相对较高
		 循环执行
			 循环执行相同或者相似的代码
				 循环的两个要素
					 循环的条件：重复的次数
					 循环体：重复执行的相同或相似的代码
			 while循环
				 while(循环条件){//布尔类型的值
					 循环体
				 }
			 break
				 结束任何形式的循环
			 continue
				 跳过本次循环，继续下一次的循环 应用：打印质数
			 do..while循环
				 do{
					 循环体
				 }while(循环条件);
			 for循环
				 for(初始值1,初始值2;循环条件;初始值的变化){
					 循环体
				 }
				 初始值->循环条件->循环体->初始值的变化->循环条件->循环体->
			 嵌套循环
				 内层循环控制列数；外层循环控制行数
函数
	 函数是一个功能体，接收数据，返回结果。用于封装反复执行的代码
	 基础函数
		 查看数据的数据类型 typeof()
		 查看单个字符的unicode编码 'a'.charCodeAt()
		 将任意类型转换为整型 parseInt()
		 将任意数据类型转换为浮点型 parseFloat()
		 将任意类型转换为数值型 Number()
		 将数值型和布尔型转换为字符串型 var.toString()
	 函数相关
		 系统函数(全局函数)
			 encodeURI 对一个url进行编码
			 decodeURI 对一个已经编码的rul进行解码
			 parseInt() 将任意类型转换为整型 
			 parseFloat() 将任意数据类型转换为浮点型
			 isNaN() 检测一个数据是否为NaN,是返回true，不是返回false
			 isFinite() 检测一个数据是否为有限值,是返回true，不是返回false
			 eval() 执行字符串中的表达式 alert(eval(prompt('请输入一组运算')));
		 自定义函数
			 函数只有调用才会执行
			 不含参数的函数
				 创建函数--函数声明（存在函数提升，在任何位置都可调用）
					 function 函数名称(){
						 函数体-->要封装的反复执行的代码
					 }
				 调用函数
					函数名称();
			 含参数的函数
				 形参、实参中是0个或多个参数，并用逗号分开。形参是声明但未赋值的变量undefined。
				 创建函数--函数声明（存在函数提升，在任何位置都可调用）
					 function 函数名称(形参){
						 函数体-->要封装的反复执行的代码
					 }
				 调用函数
					函数名称(实参);
			 带有返回值的函数
				 return表示函数执行后返回的结果。
				 没有return的话，函数执行后的结果为undefined。
				 return可以返回任意类型的数据
				 return后的所有代码不被执行
				 创建函数--函数声明（存在函数提升，在任何位置都可调用）
					 function 函数名称(形参){
						 函数体-->要封装的反复执行的代码
						 return 返回值;
					 }
				 调用函数
					函数名称(实参);
	 变量作用域
		 变量的被访问范围
		 全局作用域
			 在任意位置
				 在函数外用var声明的变量是全局变量
				 在函数中未用var声明的变量是全局变量，此时，只有在调用函数时，变量才会起到全局变量的效果 
					 var c=4;
					 function fun(){
						c=3;
					 }
					 fun();
		 局部作用域
			 在函数中
				 在函数中用var声明的变量是局部变量
				 函数中的形参也是局部变量
					 function fun(a){
						 var b=3;
						 return a;
					 }
		 变量提升(预加载)
			 执行某个JS文件时，使用关键字var声明的变量的声明会被提取到变量所在作用域的最前面，但是变量赋值的位置还在原来位置
				 function fn(){
					 var a=a+3;
					 console.log(a);
				 }
				 function fn(){//提升之后
					 var a;
					 a=a+3;//a:undefined
					 console.log(a);
				 }
	 函数作用域
		 函数的被访问范围
		 函数名称fun
			 保存的是函数在堆内存中的地址
		 函数调用fun()
			 获取函数的返回值
		 全局作用域
			 在全局作用域下创建的函数可以在任意位置调用
				 在函数内部可以调用全局函数
				 fn();
				 function fn(){
					 console.log(1);
				 } 
		 局部作用域
			 在局部作用域下创建的函数只能在函数内部调用
				 function fn(){
					 fn1();
					 function fn1(){
					 }
				 }
		 函数提升（预加载）
			 执行js文件时，定义（声明）了的函数会提升到该函数作用域的最前面。
				 function fn(){
					 fn1();
					 function fn1(){
					 }
				 }
				 function fn(){//提升之后
					 function fn1(){
					 }
					 fn1();
				 }
	 变量和函数提升问题
		 变量提升只把变量声明提升，变量赋值没有提升
		 函数提升不仅把函数声明提升，函数赋值也同时提升了
	 匿名函数
		 没有名称的函数,把创建的函数的地址保存在变量fn中,var fn=function(){};
			 创建函数--函数表达式（不存在函数提升，必须先创建再调用）
				 var 函数名称=function(形参){};
			 调用函数
				 函数名称(实参);
		 匿名函数自调用
			 创建局部作用域，防止造成全局污染
				 (function(){函数体})();//匿名函数用括号括起来，然后后面加上函数的调用括号
		 作为回调函数
			 实参传递一个匿名函数，形参就是一个函数,此时该匿名函数叫做回调函数
				 function fn(num){
					 num();//调用传递的匿名函数
				 }
				 fn(function(){...});//传递匿名函数
				 function add(a,b){
					 return res=a()+b();
				 }
				 var res=add(
					function(){
						 return 1;
					},
					function(){
						 return 2;
					}
				 );
				 console.log(res);
	 递归调用
		 在函数内部调用自身
		 递归要有跳出条件，需要结合return使用
浏览器函数
	 弹出警示框
	 alert（）
	 弹出文本输入框
	 prompt() 文本需要用变量接收，变量数据类型为字符串类型
		
对象
	 一种引用类型的数据，存储在堆内存中
	 对象（具体）
		 一组属性（property）和方法/功能(method)的集合
			 一个手机：属性有颜色，品牌，尺寸...功能有打电话，发短信，照相...
	 js中的对象
		 内置对象
			 js提供的,浏览器和服务器都可以使用
			 Math对象
				 不需要使用new创建，可以直接使用
				 PI 获取圆周率
				 abs() 取绝对值
				 floor() 向下取整
				 ceil() 向上取整
				 round() 四舍五入取整
				 max() 取一组数字的最大值
				 min() 取一组数字的最小值
				 pow(x,y) 取x得y次幂
				 random() 取随机 >=0 <1
			 date对象
				 用于对日期和时间进行存储和计算
					 创建Date对象
						 new Date('2018/11/11 10:20:30')
						 new Date(2018,10,11,10,20,30) //月份参数范围是0~11
						 new Date() 当前的系统时间
						 new Date(1000*60*60*24) 存储的是距离计算机元年的日期时间
					 获取Date对象的信息
						 getFullYear/getMonth/getDate/getHours/getMinutes/getSeconds/getMilliseconds/getDay(0~6)/getTime(距离计算机元年的毫秒数)
					 转为本地字符串格式
						 toLocaleString() 年-月-日 时：分：秒
						 toLocaleDateString() 年-月-日
						 toLocaleTimeString() 时：分：秒
					 设置Date对象的信息
						 setFullYear/setMonth/setDate/setHours/setMinutes/setSeconds/setMilliseconds/setTime(设置距离计算机元年毫秒数,一旦设置后，年月日时分秒都会受到影响)
			 Number对象
				 new Number(值) 创建对象
				 将一个数据转为数字对象，本质还是数字
				 Number.MAX_VALUE 获取计算机能存储的最大值
				 Number.MIN_VALUE 获取计算机能存储的最小值
				 toFixed(n) 保留小数点后n位
				 toString() 将数字转为字符串类型
				 数字+'' //隐式转为字符串类型
			 布尔对象
				 new Boolean(值) 创建布尔对象，本质上是将数据转为布尔型
				 Boolean(值) 转为布尔型
				 !!值 隐式将数据转为布尔型
				 toString() 将布尔型数据转为字符串
			 null
				 用于销毁（释放）一个引用类型的数据
		 宿主对象
			 根据不同环境划分
				 dom对象运行在浏览器
				 http对象运行在web服务器
		 自定义对象
			 自己创建的对象
			 创建自定义对象
				 对象字面量（对象直接量）
					 使用对象字面量创建对象
						 使用大括号创建空对象
						 属性和属性之间用冒号隔开
						 多组属性之间用逗号隔开
						 属性名中引号可加可不加，若出现特殊字符，必须加引号
							 var phone={color:'red','made-in':'china'};
				 内置构造函数 关键字new
					 使用内置构造函数创建对象
						 var book=new Object();//空对象
						 book.title='三国演义';添加属性
						 book['price']=215;必须加引号，否则被认为是变量
				 自定义构造函数	 
			 访问对象中的属性	 
				 获取属性值
					 emp.eid
					 emp['ename']
					 若属性名不存在，返回undefined
				 遍历对象中的属性(for-in)
					 获取每一个属性名，进而获取属性值
						 for(var key in emp){//key表示对象中的每一个属性名,emp表示要遍历的对象
							 console.log(emp[key]);//emp[key]通过属性名获取对应的属性值
						 }
					 无法遍历预定义（js默认为对象添加）的属性
			 检测对象中是否含有某个属性
				 属性名 in 对象---------(有->true 没有->false)
					 console.log('salary' in emp);
				 对象.hasOwnProperty(属性名)-----------(有->true 没有->false)
					 console.log(emp.hasOwnProperty('salary'));
				 属性的属性值为undefined,说明属性不存在-------------(有->false 没有->true)
					 console.log(emp.deptId===undefined);
			 对象中的方法
				 添加方法
					 var person={
						 name:'tom',
						 say:function(){
							 console.log(this.name); //this指当前的对象
						 },
						 run:function(){
						 }
					 };
				 调用方法
					 person.say();//调用对象中的方法
		数组
			 数组是由多个元素组成的集合,可以存放任意类型的数据
				 创建数组
					 数组字面量
						 var array=[元素1,元素2...];
					 内置构造函数
						 var array=new Array(5);//初始化数组长度为5,可以继续添加第六个元素
						 var array=new Array(元素1,元素2...);
				 访问数组中元素
					 数组名称[下标]，下标从0开始,没有时返回undefined
				 获取数组元素个数
					 数组名称.length
						 使用数组长度添加一个新元素
							 数组名称[数组名称.length]=值
				 数组的分类
					 索引数组
						 以整数作为下标
					 关联数组
						 以字符串作为下标
						 var arr=[];arr['eid']=1;arr['ename']='tom';
				 遍历数组中元素
					 for循环(索引数组)-----------只能遍历索引数组
						 遍历数组下标
						 for(var i=0;i<arr.length;i++){
							 arr[i];
						 }
					 for-in----------------既可以遍历索引数组，也可以遍历关联数组
						 for(var key in arr){
							 arr[key]//下标对应的元素
						 }
				 数组中的方法（API-应用程序编程接口，预先定义好的函数/方法）
					 toString() 将数组中的元素按逗号分隔成字符串
					 join('|') 将数组中的元素按照指定的字符分隔成字符串
					 concat(arr1,arr2...) 拼接两个或两个更多的数组
					 slice(start,end) 截取数组中的元素，start开始的下标，end结尾的下标，不包含end本身；负数表示倒数
					 splice(start,count,value1,value2...) 删除数组中的元素；start开始的下标，count删除的个数，value1,value2删除后补充的元素
					 reverse() 翻转数组中的元素
					 sort() 对数组中元素排序，默认按照unicode由小到大排序
						 对数字排序
							 sort(function(a,b){
								 return a-b;//由小到大排序
								 return b-a;//由大到小排序
							 })
					 push() 往数组末尾添加元素，返回数组的长度
					 pop() 删除数组末尾的元素，返回删除的元素
					 unshift() 往数组的开头的元素，返回数组的长度
					 shift() 删除数组开头的元素，返回删除的元素
				 二维数组
					 数组中的每一个元素也是数组
						 var arr=[[],[],[],[],...]
					 访问二维数组中的元素 
						 arr[下标][下标]
		 字符串方法
			 包装对象
				 使原始类型的数据也可以像引用类型一样，具有属性和方法
			 转义字符-------\
				 转换字符的意义
					 \n 换行
					 \t 制表符tab
					 \' 单引号
			 JS中提供了三种包装类型
				 string number boolean
			 string
				 new String(true) 将任意数据包装成字符串对象,返回object类型
				 String(true) 强制转换成字符串，返回字符串
			 常用方法
				 toUpperCase() 将英文字母转为大写
				 toLowerCase() 将英文字母转为小写
				 length 获取字符串的长度
				 charAt() 获取下标对应的字符
				 charCodeAt() 获取某个字符对应的Unicode码
				 String.fromCharCode(65) 获取任意unicode码对应的字符
				 indexOf(value,start) 查找某个字符串下标，value是要查找的字符串，start是开始查找的下标，默认是0，若找不到，返回-1
				 lastIndexOf(value) 查找某个字符串最后一次出现的下标，找不到返回-1 index->下标
				 slice(start,end) 截取字符串，start开始的下标，end结束的下标，不包含end本身；若end为空，截取到最后
					 身份证号倒数第二位 偶数女，奇数男
				 substr(start,count) 截取字符串，start开始的下标，count截取的长度；若count为空，截取到最后
				 substring(start,end) 截取字符串,start开始下标，end结尾下标，不包含end本身；若两个参数为负数，自动转为0
				 split(sep) 按照指定的字符分隔为数组，sep是分隔符
 			 匹配模式
				 用于查找、替换字符串。
				 replace(value1,value2) 查找并替换。value1要查找的字符串，value2要替换的字符串；value1可以使用字符串形式
							也可以使用正则表达式形式，/china/ig
							 i->ignore 忽略大小写
							 g->global 全局查找
				 match(value) 查找匹配的字符串，返回一个数组
				 search(value) 用于查找满足条件的第一个字符的下标，若找不到返回-1
JS代码常见错误处理
	 syntaxError 语法错误，错误使用中文、缺少括号...程序不会执行
	 ReferenceError 引用错误，使用了未声明的变量
	 TypeError 类型错误，错误的使用了数据的类型，错误的使用括号
	 RangeError 范围错误，参数的使用超出了范围

	 引用错误、类型错误、范围错误出现后，会影响后续代码执行
	 异常处理
		 try{
			 尝试执行的代码，可能出现错误
		 }catch(err){
			 err:捕获的错误信息
			 处理错误的方案
		 }
ES6新特征
	 ECMAScript组织有js(javascript)和as(actionscript)两种语言，现主要是js
	 ECMAScript6
	 ES2017
	 ES2018
	 1.块级作用域——局部作用域
		 使用let关键字声明的变量，只能在块级作用域下访问，不能被外部访问。
		 块级作用域：{}、for、while、do-while都是块级作用域
	 2.箭头函数
		 回调函数的另一种写法，和匿名函数不完全一致
		 sort((a,b)=>{
			 return a-b;
		 })
		 若箭头函数的函数体中只有一行代码，并且是以return形式，可以简化为
		 sort((a,b)=>a-b)
	 3.函数中的参数
		 允许为形参设置默认值
			 function fun(a,b,c=0){}
	 4.模板字符串
		 `在此之间可以写任意形式的代码${JS语法}`
		 若想查看对象中方法具体内容，利用模板字符串将方法转为字符串即可打印出来
	es6
		 《es6标准入门》第三版2018/11/16

	 
















