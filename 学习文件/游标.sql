游标cursor
	 游标声明
		 declare var cursor for sql语句
	 遍历游标
		 open var;
			 fetch var into var2,var3,...
		 close var;

		 例子
			 delimiter /
				 drop procedure if exists test;
				 create procedure test()
				 begin
					
					 declare id int;
					 declare name varchar(8);
					 declare sexy tinyint(1);
					 declare num int;
					 declare i int default 0;
					 declare res cursor for select eid,ename,sex from emp;
					 select count(*) into num from emp;
					 open res;
						 aa:loop
							 set i=i+1;
							 if i>num then
								 leave aa;
							 end if;
							 fetch res into id,name,sexy;
							 select id,name,sexy;
						 end loop aa;
					close res;
				 end /
			 delimiter ;
			 call test();
