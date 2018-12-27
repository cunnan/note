/*
function arr(n,e){
	 var arr=[1,2,3,4,5];
	 for(var i=arr.length-1;i>=n-1;i--){
		 arr[i+1]=arr[i];
	 }
	 arr[n-1]=e;
	 return arr;
}


*/
/*1~100的质数
for(var i=1;i<=100;i++){
	var n=0;
	 for(var j=2;j<i;j++){
		if(i%j==0){
			n++;
		 }
		
	 }
	 if(n==0&&i!=1){
		 console.log(i);
	 }
}

*/

/*
双色球：随机取1~33之间的6个数字不能重复，并且是从小到大排序，取1~16之间的1个数字（最后），组成一个新数组。
  (3)预习服务器概念，NODEJS中的模块


var red=[];
var blue=[];
for(var i=1;i<=33;i++){
	if(i<=16){
		 blue[i-1]=i;
	}
	red[i-1]=i;
}

for(var i=0,b=[];i<6;i++){	
	b[i]=red.splice(Math.floor(Math.random()*red.length),1).toString();
}
b=b.sort((a,b)=>a-b);
var a=blue.splice(Math.floor(Math.random()*blue.length),1).toString();
var res=b;
res[res.length]=a;
res=res.join(' ');
console.log(res);
*/
/*
var workTime=new Date('2018/11/16');
//复制入职时间的对象作为到期时间
//到期时间，年份在当前的基础上加3
var target=new Date(workTime);
target.setFullYear(target.getFullYear()+3);
//复制到期时间
var reworkTime=new Date(target);
//提前一个月，在当前的月份上减1
reworkTime.setMonth(reworkTime.getMonth()-1);
//判断是否为周末6 0 周六提前一天 周日提前两天
var day=reworkTime.getDay();
if(day==6){
	 reworkTime.setDate(reworkTime.getDate()-1);
}else if(day==0){
	 reworkTime.setDate(reworkTime.getDate()-2);
}
//提醒时间：复制续签时间
var remind=new Date(reworkTime);
//设置当前日期在原来基础减7
remind.setDate(remind.getDate()-7);
console.log('入职时间：'+workTime.toLocaleDateString());
console.log('到期时间：'+target.toLocaleDateString());
console.log('续签时间：'+reworkTime.toLocaleDateString());
console.log('提醒时间：'+remind.toLocaleDateString());


*/
/*
var arr=[];
for(var i=65;i<=90;i++){
	 arr.push(String.fromCharCode(i));
}
for(var i=97;i<=122;i++){
	 arr.push(String.fromCharCode(i));
}
for(var i=0;i<=9;i++){
	 arr.push(i);
}
var newArr=[];
for(var i=0;i<4;i++){
	var index=Math.floor(Math.random()*arr.length);
	newArr.push(arr[index]);
}
console.log(newArr);
*/
/*//计算距离2018年圣诞节还有？天？小时？分？秒
var now=new Date();
var target=new Date('2018/12/25');

var d=target.getTime()-now.getTime();
//两个对象相减，返回的是两个对象相差毫秒数
//var d=target-now;
//把相差时间转成秒
d=Math.floor(d/1000);
//获取剩余天数24*60*60
day=Math.floor(d/(24*60*60));
//获取天数后相差的小时
//相差的秒数和一天的秒数取余
d=d%(24*60*60);
//60*60
hour=Math.floor(d/(60*60));
//获取小时后相差分钟
d=d%(60*60);
minute=Math.floor(d/60)
//获取秒
second=d%60;
console.log(
	 '距离2018圣诞节还有'+
	 day+'天'+
	 hour+'时'+
	 minute+'分'+
	 second+'秒'
);*/


//==========================
var lvbo={
	 name:'lvbo',
		/*
		*function:api
		*parameter:property
		*infomation:js_api切换函数
		*time:2018/11/15
		*/
		 api:function(property){
			 if(property in this){
				 
				 return this[property];
			 }else{
				 console.log('没有这个api');
				 
			 }
		 },
		/*
		*object:array
		*infomation:数组api
		*time:2018/11/15
		*/
		 array:{
			 name:'array',
			 content:['a','b','c','d','e','f','g','h'],
			//元素个数
			 length:function(){
				 console.log(this.content.length);
			 },
			//遍历输出数组
			 list1:function(){
				 for(var key in this.content){
					 console.log(this.content[key]);
				 }

			 },
			 list2:function(){
				 for(var i=0;i<this.content.length;i++){
					 console.log(this.content[i]);
				 }
			 },
			//删除一项
			 del:function(str){
				for(var key in this.content){
					 if(this.content[key]==str){
						 this.content[key]='';
						console.log('已删除');
					 }
				}
			 },
			//末尾添加一项
			 add1:function(str){
				var i=0;
				for(var key in this.content){
					 if(this.content[key]!=str){
						i++;
					 }
				}
				if(this.content.length==i){
					 this.content[i]=str;
				}
			 },
			 add2:function(str){
				 return this.content.push(str);
			 },
			//末尾删除一项
			 pop:function(){
				 return this.content.pop();
			 },
			//开头添加一项
			 unshift:function(str){
				 return this.content.unshift(str);
			 },
			//开头删除一项
			 shift:function(){
				 return this.content.shift();
			 },
			//某一项出现次数
			 getCount:function(str){
				var i=0;
				for(var key in this.content){
					 if(this.content[key]==str){
						i++;
					 }
				}
				return i;
			 },
			//返回最大值
			 getCount:function(){
				var max=0;
				for(var key in this.content){
					 if(max<this.content[key]){
						max=this.content[key];
					 }
				}
				return max;
			 },
			//将数组中元素转换为字符串，数组中元素用逗号分隔
			 toString:function(){
				 return this.content.toString();
			 },
			//按照指定的字符分隔数组中的元素
			 join:function(str){
				 return this.content.join(str);
			 },
			//拼接数组
			 concat:function(str1,str2){
				 return this.content.concat(str1,str2);
			 },
			//截取数组
			 slice:function(start,end){
				 return this.content.slice(start,end);
			 },
			//删除数组中元素start,count,value1,value2,...
			 splice:function(start,count,value1,value2){
				 return this.content.splice(start,count,value1,value2);
			 },
			//字符串翻转
			 reverse1:function(){
				 return this.content.reverse();
			 },
			 reverse2:function(){
				 var newarr=[];
				 for(var key in this.content){
					 newarr[key]=this.content[this.content.length-1-key];
				 }
				 return newarr;
			 },
			//冒泡排序
			 sort1:function(bool){
				 if(bool){
					//bool=1,由大到小排序
					 sort(function(a,b){
								 return b-a;
							 })
				 }else{
					//bool=0,由小到大排序
					 sort(function(a,b){
								 return a-b;
							 })
				 }
			 },
			 sort2:function(){
				 for(var i in arr){
				 for(var j in arr){
						 if(arr[i]<arr[j]){
							 var a=arr[i];
							 arr[i]=arr[j];
							 arr[j]=a;
						 }
				 }
				 console.log(arr);
			 }
			 return arr;
			 },
			 sort3:function(arr){
				 for(var i=1;i<arr.length;i++){
					 //5个数
					//1	4
					//2	3
					//3	2
					//4	1
					//内层循环：比较的次数，j代表元素的下标
					for(var j=0;j<arr.length-i;j++){
						//若当前元素大于下一个元素，交换两个元素的值
						if(arr[j]>arr[j+1]){
							 var tmp=arr[j];
							 arr[j]=arr[j+1];
							 arr[j+1]=tmp;
						}
						 
					}
				}
			 },
			 sort4:function(arr){
				 for(var i=0;i<arr.length;i++){
					 for(var j=i+1;j<arr.length;j++){
						 if(arr[i]>arr[j]){
							 var a=arr[i];
							 arr[i]=arr[j];
							 arr[j]=a;
						 }
					 }
				 }
				console.log(arr);
			 }
		 },
		/*
		*object:string
		*infomation:字符串api
		*time:2018/11/15
		*/
		 string:{
			 name:'string',
			 content:'aE|a|D|achina是伟大的国家，China是人口众多的国家',
			//将任意数据包装成字符串对象,返回object类型
			 toobj:function(){
				 this.content=new String(this.content);//将数据转为对象型
				 return this.content;
			 },
			//强制转换成字符串，返回字符串
			 tostring:function(){
				 return String(this.content);//将数据转为字符串数据类型
			 },
			//将英文字母转为大写
			 touppercase:function(){
				 return this.content.toUpperCase();
			 },
			//将英文字母转为小写
			 tolowercase:function(){
				 return this.content.toLowerCase();
			 },
			//获取字符串的长度
			 length:function(){
				 return this.content.length;
			 },
			//获取下标对应的字符
			 charat:function(a){
				 return this.content.charAt(a);
			 },
			//获取某个字符对应的Unicode码
			 charcodeat:function(){
				 return this.content.charCodeAt();
			 },
			//获取任意unicode码对应的字符
			 stringfromcharcode:function(a){
				 return String.fromCharCode(a);
			 },
			//查找某个字符串下标，a是要查找的字符串，b是开始查找的下标，默认是0，若找不到，返回-1
			 indexof:function(a,b){
				 return this.content.indexOf(a,b);
			 },
			//查找某个字符串最后一次出现的下标，找不到返回-1
			 lastindexof:function(a){
				 return this.content.lastIndexOf(a);
			 },
			//截取字符串，a开始的下标，b结束的下标，不包含b本身；若b为空，截取到最后
			 //身份证号倒数第二位 偶数女，奇数男
			 slice:function(a,b){
				 return this.content.slice(a,b);
			 },
			//截取字符串，a开始的下标，b截取的长度；若b为空，截取到最后
			 substr:function(a,b){
				 return this.content.substr(a,b);
			 },
			//截取字符串,a开始下标，b结尾下标，不包含b本身；若两个参数为负数，自动转为0
			 substring:function(a,b){
				 return this.content.substring(a,b);
			 },
			//按照指定的字符分隔为数组，a是分隔符
			 split:function(a){
				 return this.content.split(a);
			 },
			//查找并替换。a要查找的字符串，b要替换的字符串；a可以使用字符串形式,
			//也可以使用正则表达式形式，/china/ig,i->ignore 忽略大小写,g->global 全局查找
			 replace:function(a,b){
				 return this.content.replace(a,b);
			 },
			//查找匹配的字符串，返回一个数组
			 match:function(a){
				 return this.content.match(a);
			 },
			// 用于查找满足条件的第一个字符的下标，若找不到返回-1
			 search:function(a){
				 return this.content.search(a);
			 },
		 },
		/*
		*object:math
		*infomation:数学api
		*time:2018/11/16
		*/
		 math:{
			 name:'math',
			 content:'',
			//获取圆周率
			 pi:function(){	
				 return Math.PI;
			 },
			//取绝对值
			 abs:function(a){	
				 return Math.abs(a);
			 },
			//向下取整
			 floor:function(a){	
				 return Math.floor(a);
			 },
			//向上取整
			 ceil:function(a){	
				 return Math.ceil(a);
			 },
			//四舍五入取整
			 round:function(a){	
				 return Math.round(a);
			 },
			//取一组数字的最大值
			 max:function(a,b,c){	
				 return Math.max(a,b,c);
			 },
			//取一组数字的最小值
			 min:function(a,b,c){	
				 return Math.min(a,b,c);
			 },
			//取x得y次幂
			 pow:function(x,y){	
				 return Math.pow(x,y);
			 },
			//取随机 >=0 <1
			 random:function(){	
				 return Math.random() ;
			 },
		 },
		/*
		*function:fun
		*infomation:系统函数(全局函数)
		*time:2018/11/17
		*/
		 fun:{
			 name:'function',
			 content:'0/1+2*4',
			//查看数据的数据类型 typeof()
			 type:function(){
				 return typeof(this.content);
			 },
			//对一个url进行编码 
			 //http://www.京东.com/?kw=手机
			 encodeuri:function(){
				 return encodeURI(this.content);
			 },
			//对一个已经编码的rul进行解码 
			 //http://www.%E4%BA%AC%E4%B8%9C.com/?kw=%E6%89%8B%E6%9C%BA
			decodeuri:function(){
				 return decodeURI(this.content);
			 },
			//将任意类型转换为整型
			 parseint:function(){
				 return parseInt(this.content);
			 },
			//将任意数据类型转换为浮点型
			 parsefloat:function(){
				 return parseFloat(this.content);
			 },
			//检测一个数据是否为NaN,是返回true，不是返回false
			 //fun.content=fun.parseint('a11')
			 //console.log(fun.isnan())
			 isnan:function(){
				 return isNaN(this.content);
			 },
			//检测一个数据是否为有限值,是返回true，不是返回false
			 //1/0 0/1
			 isfinite:function(){
				 return isFinite(this.content);
			 },
			//执行字符串中的表达式 
			 alert(eval(prompt('请输入一组运算')))
			 //'0/1+2*4'
			 eval:function(){
				 return eval(this.content);
			 },
		 },
		/*
		*object:number
		*infomation:数值api
		*time:2018/11/17
		*/
		 number:{
			 name:'number',
			 content:'',
			//将一个数据转为数字对象，本质还是数字
			 number:function(){
				 //this.content=Number(this.content);//将数据转为数值型数据
				 this.content=new Number(this.content);//将数据转为对象型
				 return this.content;
			 },
			 //获取计算机能存储的最大值
			 jisuanjimax:function(){
				 return Number.MAX_VALUE;
			 },
			//获取计算机能存储的最小值
			 jisuanjimin:function(){
				 return Number.MIN_VALUE;
			 },
			//保留小数点后n位
			 tofixed:function(n){
				 this.content=this.content.toFixed(n);
				 return this.content;
			 },
			//toString() 将数字转为字符串类型
			 tostring:function(){
				 this.content=this.content.toString();
				 return this.content;
			 },	
		 },
		/*
		*object:bool
		*infomation:布尔api
		*time:2018/11/17
		*/
		 bool:{
			 name:'bool',
			 content:'true',
			//创建布尔对象，本质上是将数据转为布尔型
			 bool:function(){
				 //this.content=Boolean(this.content);//将数据转为布尔型数据
				 this.content=new Boolean(this.content);//将数据转为对象数据类型
				 return this.content;
			 },
			//隐式将数据转为布尔型
			 tobool:function(){
				 this.content=!this.content;
				 return this.content;
			 },
			//toString() 将布尔型数据转为字符串
			 tostring:function(){
				 this.content=this.content.toString();
				 return this.content;
			 },
		 },
		/*
		*object:date
		*infomation:日期api
		*time:2018/11/17
		*/
		 date:{
			 name:'date',
			 content:'2018/11/11 10:20:30',
			 note:'日期对象复制，可以将已经存在的日期对象当做实参传递给新定义的日期对象，复制功能是日期对象的特殊用法，其他类型的对象不适用',
			 //创建Date对象
			  //new Date('2018/11/11 10:20:30')
			  date1:function(){
				 this.content=new Date(this.content);
				 return this.content;
			  },
			 //new Date(2018,10,11,10,20,30) //月份参数范围是0~11
			 date2:function(){
				 this.content=new Date(this.content);
				 return this.content;
			  },
			 //new Date() 当前的系统时间
			 date3:function(){
				 this.content=new Date();
				 return this.content;
			  },
			 //new Date(1000*60*60*24) 存储的是距离计算机元年的日期时间
			 date4:function(){
				 this.content=new Date(this.content);
				 return this.content;
			  },
			//转为本地字符串格式
			 //toLocaleString() 年-月-日 时：分：秒
			 tolacalestring:function(){
				 this.content=this.content.toLocaleString();
				 return this.content;
			 },
			 //toLocaleDateString() 年-月-日
			 tolacaledatestring:function(){
				 this.content=this.content.toLocaleDateString();
				 return this.content;
			 },
			 //toLocaleTimeString() 时：分：秒
			 tolacaletimestring:function(){
				 this.content=this.content.toLocaleTimeString();
				 return this.content;
			 },
			//获取Date对象的信息
			 get:function(a){
				 //getFullYear/getMonth/getDate/getHours/getMinutes/getSeconds/getMilliseconds/	
				 //getDay(0~6)/getTime(距离计算机元年的毫秒数)
				 switch(a){
					 case 'fullyear':{
						 return this.content.getFullYear();
					 }
					 case 'month':{
						 return this.content.getMonth();
					 }
					 case 'date':{
						 return this.content.getDate();
					 }
					 case 'hours':{
						 return this.content.getHours();
					 }
					 case 'minutes':{
						 return this.content.getMinutes();
					 }
					 case 'seconds':{
						 return this.content.getSeconds();
					 }
					 case 'milliseconds':{
						 return this.content.getMilliseconds();
					 }
					 case 'day':{
						 return this.content.getDay();
					 }
					 case 'time':{
						 return this.content.getTime();
					 }
				 }
			 },
			//设置Date对象的信息
			 set:function(a,b){
				 //setFullYear/setMonth/setDate/setHours/setMinutes/setSeconds/setMilliseconds/
				 //setTime(设置距离计算机元年毫秒数,一旦设置后，年月日时分秒都会受到影响)
				 switch(a){
					 case 'fullyear':{
						 this.content.setFullYear(b);
						 return this.content;
					 }
					 case 'month':{
						 this.content.setMonth(b);
						 return this.content;
					 }
					 case 'date':{
						 this.content.setDate(b);
						 return this.content;
					 }
					 case 'hours':{
						 this.content.setHours(b);
						 return this.content;
					 }
					 case 'minutes':{
						 this.content.setMinutes(b);
						 return this.content;
					 }
					 case 'seconds':{
						 this.content.setSeconds(b);
						 return this.content;
					 }
					 case 'milliseconds':{
						 this.content.setMilliseconds(b);
						 return this.content;
					 }
					 case 'time':{
						 this.content.setTime(b);
						 return this.content;
					 }
				 }
			 },
		 },
};
