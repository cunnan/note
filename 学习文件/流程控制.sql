流程控制
	 变量
		 系统变量
			 全局变量
			 会话变量
		 自定义变量
			 用户变量
				 set @a:=1;
				 set @a=1;
				 select @a:=1;
				 select 1+1 into @a;
			 局部变量
				 declare i int default 0;
				 set i=1;
				 set i:=1;
				 select i:=1;
				 select eid,ename into i,j from emp where eid=1;
	 标签语句
		 标签:begin
			 sql语句
		 end 标签
		 
		 标签:loop
			 sql语句
			 if 条件 then iterate 标签 end if 相当于continue
			 或
			 if 条件 then leave 标签 end if 相当于break
		 end loop 标签
		 
		 标签:repeat
			 sql语句
		 until 条件
		 end repeat 标签
		 
		 标签:while 条件 do
			 sql语句
		 end while 标签
		 
		 例子
			 drop procedure if exists test;
			 delimiter /
				 create procedure test(in i int,out j int)
				 begin
					  aa:loop
						 set i=i+1;
						 if i>10 then 
							leave  aa;
						 end if;
					 end loop aa;
					 set j=i;
				 end/
			 delimiter ;
			 call test(1,@a);
			 select @a;
	 declare语句
		 drop procedure if exists test;
		 delimiter /
			 create procedure test(in id int)
			 begin
				 declare name varchar(8);
				 declare sexy tinyint;
				 declare sal decimal(7,2);
				 select ename,sex,salary into name,sexy,sal from emp where eid=id;
				 select name,sexy,sal;
			 end/
		 delimiter ;
		 call test(10);
	 流程控制语句
		 选择语句
			 case语句
				 case 值
					 when 值 then 
						 sql语句
					 when 值 then 
						 sql语句
					 when 值 then 
						 sql语句
					 ...
					 else
						 sql语句
				 end case
				 或者
				 case 
					 when 值 then 
						 sql语句
					 when 值 then 
						 sql语句
					 when 值 then 
						 sql语句
					 ...
					 else
						 sql语句
				 end case
				 例子
					 drop procedure if exists test;
					 delimiter /
						 create procedure test(in id int)
						 begin
							declare i int default 1;
							select did into i from dept where did=id;
							case i #此处i可以省略
								 when 10 then 
									 select * from emp where deptId=i;
								 when 20 then 
									 select * from emp where deptId=i;
								 else 
									 select * from emp where deptId=i;
							end case;
						 end/
					 delimiter ;
					 call test(10);
			 if语句
				 if语句可以嵌套
				 if 条件 then 
					 sql语句
				 end if
				 if 条件 then
					 sql语句
				 elseif 条件 then
					 sql语句
				 else
					 sql语句
				 end
		 循环语句
			 repeat语句
				 drop procedure if exists test;
				 delimiter /
					 create procedure test(in i int)
					 begin
						set i=1;
						aa:repeat
							 set i=i+1;
							 until i>20 
						end repeat aa;
						select i;
					 end/
				 delimiter ;
				 call test(10);
			 while语句
				 drop procedure if exists test;
				 delimiter /
					 create procedure test(in i int)
					 begin
						set i=1;
						bb:while i<30 do
							 set i=i+3;
						end while bb;
						select i;
					 end/
				 delimiter ;
				 call test(10);