索引
	 索引是在存储引擎中实现的，也就是说不同的存储引擎，会使用不同的索引
		 MyISAM和InnoDB存储引擎：只支持BTREE索引， 也就是说默认使用BTREE，不能够更换
		 MEMORY/HEAP存储引擎：支持HASH和BTREE索引
	 索引操作
		 创建表的时候创建索引
			 创建普通索引
				 #创建员工表
					 CREATE TABLE emp(
					  eid INT,
					  ename VARCHAR(8),
					  sex BOOL,
					  birthday DATE,
					  salary DECIMAL(7,2),
					  deptId TINYINT,
					  index index_ename(ename)
					 );
				 #查看创建表的命令语句
					 show create table emp;
				 #查看设置的索引是否有效
					 explain select * from emp where ename='tom'\G；　　\G只是让输出的格式更好看
			 创建唯一索引
				 #创建员工表
					 CREATE TABLE emp(
					  eid INT,
					  ename VARCHAR(8),
					  sex BOOL,
					  birthday DATE,
					  salary DECIMAL(7,2),
					  deptId TINYINT,
					  unique index index_eid(eid)
					 );
			 创建主键索引 
				 #创建员工表
					 CREATE TABLE emp(
					  eid INT,
					  ename VARCHAR(8),
					  sex BOOL,
					  birthday DATE,
					  salary DECIMAL(7,2),
					  deptId TINYINT,
					  primary key(eid)
					 );
			 创建组合索引(使用时遵循最左前缀)
				 #创建员工表
					 CREATE TABLE emp(
					  eid INT,
					  ename VARCHAR(8),
					  sex BOOL,
					  birthday DATE,
					  salary DECIMAL(7,2),
					  deptId TINYINT,
					  index index_eid_ename(eid,ename)
					 );
			 创建全文索引(用于全文搜索，只有MyISAM存储引擎支持，并且只用于CHAR、VARCHAR和TEXT数据类型字段列上,搜索的关键字默认至少要4个字)
				 #创建员工表
					 CREATE TABLE emp(
					  eid INT,
					  ename VARCHAR(8),
					  sex BOOL,
					  birthday DATE,
					  salary DECIMAL(7,2),
					  deptId TINYINT,
					  info text,
					 fulltext index index_info(info)
					 )engine=myisam;
					 select * from emp where match(info)against('这个搜索的结果为空，原因');
			 创建空间索引(必须使用MyISAM引擎， 并且空间类型的字段必须为非空)
		 在已经存在的表上创建索引
			 查看一张表中所创建的索引
				 show index from emp;
			 创建普通索引
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
					 alter table emp add index index_ename(ename);
					 或者
					 create index index_ename on emp(ename);
			 创建唯一索引
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
					 alter table emp add unique index index_eid(eid);
					 或者
					 create unique index index_eid on emp(eid);
			 创建主键索引
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
					 alter table emp add primary key(eid);			
			 创建组合索引(使用时遵循最左前缀)
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
					 alter table emp add index index_eid_ename(eid,ename);
					 或者
					 create index index_eid_ename on emp(eid,ename);
			 创建全文索引
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
					 alter table emp add fulltext index index_info(info);
					 alter table emp engine=myisam;
					 或者
					 create  fulltext index index_info on emp(info);
		删除索引
			 alter table emp drop index index_info;
			 或者
			 drop index index_info on emp;