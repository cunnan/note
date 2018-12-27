const pool=require('../../pool.js');
const express=require('express');
var router=express.Router();
var check=function(obj,res){
	 var i=401;
	 for(var key in obj){
		 if(!obj[key]){
			 res.send({
			 code:`${i}`,
			 msg:`${key} required`,
			 });
			 return false;
		 }
		 i++;
	 }
	 return obj;
}
//1.登录接口login
router.post('/login',(req,res)=>{
	var uname=req.body.uname;
	var upwd=req.body.upwd;
	//console.log(req.body);
	if(uname==''){
		res.send({code:401,msg:'用户名不存在'});
		return;
	}
	if(upwd==''){
		res.send({code:401,msg:'密码不存在'});
		return;
	}
	var sql=`select * from xz_user where uname=? and upwd=?`;
	pool.query(sql,[uname,upwd],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send('登录成功');
		}else{			res.send('用户名密码错误');
		}
	});
});
//2.列表接口userlist
router.get('/userlist',(req,res)=>{
	var sql=`select * from xz_user`;
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send('没有数据');
		}
	});
});
//3.注册接口register
router.post('/register',(req,res)=>{
	//console.log(req.body);
	if(!check(req.body,res)) return;
	if(req.body.gender=='null'){
		req.body.gender=null;
	};
	//console.log(req.body);return;
	sql="insert into xz_user set ?";
	pool.query(sql,[req.body],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0){
			res.send({
				 code:200,
				 msg:'register suc',
			});
		}
	});
});
//4.删除接口delete
router.post('/delete',(req,res)=>{
	var uid=req.body.uid;
	if(uid==''){
		res.send({
			code:401,
			msg:'uid required'
		});
		return;
	}
	var sql=`delete from xz_user where uid=?`;
	pool.query(sql,[uid],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0){
			res.send({
				 code:200,
				 msg:'delete suc',
			});
		}else{
			res.send({
				 code:401,
				 msg:'delete failed',
			});
		}
	});
});
//5.查询接口queryuser
router.get('/queryuser',(req,res)=>{
	var uid=req.query.uid;
	if(!uid){
	  res.send("uid不存在");
	  return;
	}
	var sql="select * from xz_user where uid=?"
	pool.query(sql,[uid],(err,result)=>{
		if(result.length>0){
			res.send(result[0]);
		}else{
			res.send("0");
		}
	});
});
//6.修改接口update
router.post('/update',(req,res)=>{
	//console.log(req.body);return;
	if(!check(req.body,res)) return;
	sql="update xz_user set ? where uid=?";
	pool.query(sql,[req.body,req.query.uid],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0){
			res.send(`
				<script>
					alert('修改成功');
					location.href="http://127.0.0.1:3000/mypro_list.html";
				</script>
				`);
		}
	});
});
//7.检验用户名是否存在
router.get("/checkUname",(req,res)=>{
	var $uname=req.query.uname;
	//console.log(req.query.uname);return;
	if(!$uname){
		res.send('用户名不存在');
		return;
	}
	var sql="select * from xz_user where uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send('1');//重名，不能注册
		}else{
			res.send('0');
		}
	});
});
module.exports=router;