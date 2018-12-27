视图
	 一种虚拟存在的表，是一个逻辑表，本身并不包含数据。作为一个select语句保存在数据字典中，展现基表的部分数据
	 优点：保障数据安全性，提高查询效率
	 创建/更改视图(可以控制到某行某列)
		 在单表上创建视图
			 #创建员工表
				 CREATE TABLE emp(
				  eid INT,
				  ename VARCHAR(8),
				  sex BOOL,
				  birthday DATE,
				  salary DECIMAL(7,2),
				  deptId TINYINT,
				  info text
				 );
				 create  fulltext index index_info on emp(info);
				 alter table emp engine=myisam;
				  
				 create or replace view v_emp(eid,ename,sex,birthday,salary,deptId)
				 as 
				 select eid,ename,sex,birthday,salary,deptId from emp where eid<=10
				 with check option;
		 在多表上创建视图
			 #创建部门表
				 CREATE TABLE dept(
				  did TINYINT,
				  dname VARCHAR(16)
				 );
			 #创建员工表
				 CREATE TABLE emp(
				  eid INT,
				  ename VARCHAR(8),
				  sex BOOL,
				  birthday DATE,
				  salary DECIMAL(7,2),
				  deptId TINYINT,
				  info text
				 );
				 create  fulltext index index_info on emp(info);
				 alter table emp engine=myisam;
				 
				 create or replace view v_emp(eid,ename,sex,birthday,salary,deptId,dname)
				 as 
				 select e.eid,e.ename,e.sex,e.birthday,e.salary,e.deptId,d.dname from emp e,dept d  where e.deptId=d.did
				 with check option;
	 查看视图
		 查看当前库的视图
			 show tables;
		 查看某个视图创建命令
			 show create view v_emp;
	 删除视图
		 drop view if exists v_emp;
	 视图的DML操作限制
		 有下列内容之一，视图不能做DML操作：
			 select子句中包含distinct
			 select子句中包含组函数
			 select语句中包含group by子句
			 select语句中包含order by子句
			 select语句中包含union 、union all等集合运算符
			 where子句中包含相关子查询
			 from子句中包含多个表
			 如果视图中有计算列，则不能更新
			 如果基表中有某个具有非空约束的列未出现在视图定义中，则不能做insert操作
					 
