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
//1.用户注册
router.post('/register',(req,res)=>{
	 var obj=req.body;
	 obj=check(obj,res);
	 if(!obj) return;
	 pool.query('insert into xz_user set ?',[obj],(err,result)=>{
		 if(err) throw err;
		 if(result.affectedRows>0){
			 res.send({
				 code:200,
				 msg:'register suc',
			 });
		 }
	 });
});
//2.用户登陆
router.post('/login',(req,res)=>{
	 var obj=req.body;
	 obj=check(obj,res);
	 if(!obj) return;
	 pool.query('select * from xz_user where uname=? and upwd=?',[obj.uname,obj.upwd],(err,result)=>{
		 if(err) throw err;
		 if(result.length>0){
			 res.send({
				 code:200,
				 msg:'login suc'
			 });
		 }else{
			 res.send({
				 code:301,
				 msg:'login err'
			 });
		 }
	 });
});
//3.用户检索
router.get('/detail',(req,res)=>{
	 var obj=req.query;
	 obj=check(obj,res);
	 if(!obj) return;
	 pool.query('select * from xz_user where uid=?',[obj.uid],(err,result)=>{
		 if(err) throw err;
		 if(result.length>0){
			 res.send(result);
		 }else{
			 res.send({
				 code:301,
				 msg:'detail err'
			 });
		 }
	 });
});
//4.用户修改
router.post('/update',(req,res)=>{
	 var obj=req.body;
	 obj=check(obj,res);
	 if(!obj) return;
	 var query=`update xz_user set ? where uid=?`;
	 pool.query(query,[obj,obj.uid],(err,result)=>{
		 if(err) throw err;
		 if(result.affectedRows>0){
			 res.send({
				 code:200,
				 msg:'update suc',
			 });
		 }else{
			 res.send({
				 code:301,
				 msg:'update err',
			 });
		 }
	 });
});
//5.用户列表
router.get('/list',(req,res)=>{
	 var obj=req.query;
	 //将数据转为数值型
	 var $pno=parseInt(obj.pno);
	 var $count=parseInt(obj.count);
	 //若页码和每页数量为空，设置默认值
	 if(!$pno){
		 //如果页码为空，默认第一页
		 $pno=1;
	 }
	 if(!$count){
		 //如果每页数量为空，默认显示3条记录
		 $count=3;
	 }
	 var start=($pno-1)*$count;
	 var query=`select * from xz_user limit ?,?`;
	 pool.query(query,[start,$count],(err,result)=>{
		 if(err) throw err;
		 res.send(result);
	 });
});
//6.用户删除
router.get('/delete',(req,res)=>{
	 var obj=req.query;
	 obj=check(obj,res);
	 if(!obj) return;
	 var query=`delete from xz_user where uid=?`;
	 pool.query(query,[obj.uid],(err,result)=>{
		 if(err) throw err;
		 if(result.affectedRows>0){
			 res.send({
				 code:200,
				 msg:'delete suc'
			 });
		 }else{
			 res.send({
				 code:301,
				 msg:'delete err'
			 });
		 }
	 });
});
module.exports=router;