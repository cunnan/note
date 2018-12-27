//引入mysql模块
const mysql=require('mysql');

//创建pool数据库对象
var pool=mysql.createPool({
			 hostname:'127.0.0.1',
			 port:3306,
			 user:'root',
			 password:'',
			 database:'tedu',
			 connectionLimit:20
});

//开放pool
module.exports=pool;
