存储过程
	 SQL语句需要先编译然后执行
	 存储过程（Stored Procedure）是一组为了完成特定功能的SQL语句集，经编译后存储在数据库中，
	 用户通过指定存储过程的名字并给定参数（如果该存储过程带有参数）来调用执行它
	 优点
		 语句复用
		 执行速度快
		 减少网络流量并降低网络负载
		 作为一种安全机制来充分利用：通过对执行某一存储过程的权限进行限制，能够实现对相应的数据的访问权限
		 的限制，避免了非授权用户对数据的访问，保证了数据的安全。
	 创建存储过程
		 输入
			 drop procedure if exists test;
			 delimiter /
			 create procedure test(in did int)
			 begin
				 select * from emp where eid=did;
			 end/
			 delimiter ;
			 set @did=2;
			 call test(@did);
		 输出
			 drop procedure if exists test;
			 delimiter /
			 create procedure test(out did decimal(7,2))
			 begin
				 select salary into did from emp where eid=1;
			 end/
			 delimiter ;
			 call test(@ddid);
			 select @ddid;
		 输入输出
			 drop procedure if exists test;
			 delimiter /
			 create procedure test(inout did decimal(7,2))
			 begin
				 update emp set salary=did+200 where eid=1;
				 select salary into did from emp where eid=1;
			 end/
			 delimiter ;
			 set @salary1=7200;
			 call test(@salary1);
			 select @salary1;
	 调用存储过程
		 call test(@salary1);
	 删除存储过程
		 drop procedure if exists test;
	 查看数据库有哪些存储过程
		 show procedure status where db='tedu';
	 查看某一个MySQL存储过程的创建命令
		 show create procedure test;