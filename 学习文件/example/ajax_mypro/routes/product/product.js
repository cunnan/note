const express=require('express');
const pool=require('../../pool.js');
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
//1.商品列表 
router.get('/list',(req,res)=>{
	 var obj=req.query;
	 var $pno=parseInt(obj.pno);
	 var $count=parseInt(obj.count);
	 if(!$pno) $pno=1;
	 if(!$count) $count=10;
	 var start=($pno-1)*$count;
	 var query='select * from xz_laptop limit ?,?';
	 pool.query(query,[start,$count],(err,result)=>{
		 if(err) throw err;
		 res.send(result);
	 });
});
//2.商品详情
router.get('/detail',(req,res)=>{
	 var obj=req.query;
	 obj=check(obj,res);
	 if(!obj) return;
	 pool.query('select * from xz_laptop where lid=?',[obj.lid],(err,result)=>{
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
//3.商品删除
router.get('/delete',(req,res)=>{
	 var obj=req.query;
	 obj=check(obj,res);
	 if(!obj) return;
	 var query='delete from xz_laptop where lid=?';
	 pool.query(query,[obj.lid],(err,result)=>{
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
//4商品添加
router.post('/add',(req,res)=>{
	 var obj=req.body;
	 obj=check(obj,res);
	 if(!obj) return;
	 pool.query('insert into xz_laptop set ?',[obj],(err,result)=>{
		 if(err) throw err;
		 if(result.affectedRows>0){
			 res.send({
				 code:200,
				 msg:'add suc',
			 });
		 }else{
			 res.send({
				 code:301,
				 msg:'add err',
			 });
		 }
	 });
});
//商品修改
router.post('/update',(req,res)=>{
	 var obj=req.body;
	 obj=check(obj,res);
	 if(!obj) return;
	 var query=`update xz_laptop set ? where lid=?`;
	 pool.query(query,[obj,obj.lid],(err,result)=>{
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
module.exports=router;
