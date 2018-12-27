触发器
	 在插入，删除或修改表中的数据时触发执行，比数据库本身标准的功能有更精细和更复杂的数据控制能力
	 触发器的使用
		 创建触发器
			 delimiter /
			 create trigger tri_dept_delete after/before delete on dept for each row 
			 begin 
				 delete from emp where deptId=old.did;
			 end /
			 delimiter ;
		 删除触发器
			 drop trigger if exists tri_dept_delete;
		 查看触发器
			 show triggers;
		 变量声明：
			 declare i int default 0;
			 declare j int default 0;
			 DECLARE s2 VARCHAR(20) character set utf8;
		 变量赋值
			 SET i=1,j=1;
		 MySQL中定义了NEW和OLD，用来表示触发器的所在表中，触发了触发器的那一行数据。另外，
		 OLD是只读的，而NEW则可以在触发器中使用SET赋值，不会再次触发触发器，造成循环调用
		 INSERT型触发器：插入某一行时激活触发器，通过 INSERT、LOAD DATA、REPLACE语句触发；
		 UPDATE型触发器：更改某一行时激活触发器，通过UPDATE语句触发；
		 DELETE型触发器：删除某一行时激活触发器，通过DELETE、REPLACE语句触发
		 触发器的执行顺序

		 我们建立的数据库一般都是 InnoDB 数据库，其上建立的表是事务性表，也就是事务安全的。
		 这时，若SQL语句或触发器执行失败，MySQL 会回滚事务，有：
			 ①如果 BEFORE 触发器执行失败，SQL 无法正确执行。
			 ②SQL 执行失败时，AFTER 型触发器不会触发。
			 ③AFTER 类型的触发器执行失败，SQL 会回滚





			 