保存数据的几种形式
	 内存 临时保存数据
	 文件 不便于管理
	 第三方机构 百度云 腾讯云 阿里云 网易云 华为云
	 独立数据库服务器
数据库概述
	 database:以特定的机构批量存储数据的软件
	 数据库发展史：
		 网状数据库
		 层次型数据库
		 关系型数据库
			 sqlite
				 微型数据库，常用于移动设备
			 mysql
				 开源中小型数据库
					 mysqldb
						 https://www.sql.com
					 mariadb
						 https://www.mariada.org
				mysql数据库系统
					 服务器端
						 存储数据
					 客户端
						 向服务器发起增删改查命令
					 #连接mysql数据库
						 权限大
			 			 mysql.exe -h127.0.0.1 -P3306 -uroot -p
						 权限小
						 mysql.exe -h127.0.0.1 -P3306 -urootl -p
					 mysql管理命令
						 #quit; 
						 退出命令
						 #show databases
						 查询数据库
						 #use 数据库名
						 选择指定的数据库
						 #show tables
						 查看表
						 #desc 表名称
						 查看表字段
					 mysql常用的sql命令
						 sql执行方式
							 单条命令输入查询方式
							 脚本导入命令查询方式
								 #mysql -uroot < 脚本路径
						 sql注释
							 # 单行注释
							 /**/ 多行注释
						 新建数据库时设置编码方式
						 #CREATE DATABASE xuezi CHARSET=UTF8;
						 创建新的数据库
						 #create database jd;
						 丢弃旧的数据库
						 # drop database if exists jd;
						 进入数据库
						 #USE jd;
						 创建数据表
						 CREATE TABLE student(
							 sid INT,#整型
							 name VARCHAR(6),
							 sex VARCHAR(1),#男Male 女Female
							 score INT
						 );
						 向表中插数据
						 INSERT INTO student VALUES('10','lvbo1','M','61');
						 INSERT INTO student VALUES('12','lvbo2','F','63');
						 或
						 INSERT INTO student VALUES
						 ('10','lvbo1','M','61'),
						 ('12','lvbo2','F','63');
						 或
						 INSERT INTO student VALUE（name,sex,age）('zhangsan',1,12);
						 查询数据表中的记录
						 #SELECT * FROM student;
						 更改记录
						 #UPDATE user SET upwd='654321',email='wenhua@tedu.cn' WHERE uid='1';
						 删除记录
						 #DELETE FROM user WHERE uid='3';
						 复制表
						 create table newtable select * from table;
						 查看表结构
						 show create table table;
					 中文乱码问题
						 ASCII:总共128个，对英文编码
						 latin-1:总共256个，兼容ASCII，对欧洲符号编码
						 GB2312:对6000多常用汉字编码兼容ASCII
						 GBK:对20000多汉字编码，兼容GB2312
						 GIG5:台湾繁体字编码，不兼容GB2312和GBK，兼容ASCII
						 Unicode:对主流语言编码，兼容ASCII,不兼容GB2312,GBK，BG5等。具体分为UTF-8,UTF-16,UTF-32三种存储方式
							 乱码原因：mysql默认使用Latin-1编码，对中文不兼容
							 设置mysql客户端编码
							 #SET NAMES UTF8;
					 列类型
						 指定数据类型
						 #CREATE TABLE book(bid 列类型);
							 数值类型-不加引号
								 TINYINT:微整型，占用1个字节,1kb=1024byte(字节),1byte=8bit(位)
								 SMALLINT:小整型，占用2个字节
								 INT:整型，占用4个字节 -2147483648~2147483647
								 BIGINT:大整型，占用8个字节
								 FLOAT:单精度浮点型，占4个字节 3.4E38，可能有误差
								 DOUBLE:双精度浮点型，占8个字节，1.79E308
								 DECIMAL(M,D):定点小数,M总共几位，D小数点后几位，不会产生计算误差
								 BOOL:布尔型，取值TRUE/1、FALSE/0,数据库真正存储的时候是按TINYINT类型存储的
							 字符串类型-加引号
								 VARCHAR(M):变长字符串，空间使用灵活，M超过65535
								 CHAR(M):定长字符串，定长使用空间，访问速度较快，M不能超过255
								 TEXT(M):大型变长字符串，M不超2G
							 日期时间类型-加引号
								 DATETIME:日期时间类型 '2018-11-2 15:18:30'
								 DATE:日期类型 '2018-11-2'
								 TIME:时间类型 '15:18:30'
					 列约束
						 MYSQL可以对插入的数据进行特定的检验，只有满足条件的数据才能插入成功，否则会提示错误
						 MYSQL提供了六种列约束
							 主键约束:PRIMARY KEY
								 声明了主键约束的列上不能插入重复的值，如果主键的数据是数值会自动按照由小到大的顺序排列，加快查找速度。一个表中最多有一个主键。
							 唯一约束：UNIQUE
								 声明了唯一约束的列上不能插入重复的值，但可以插入NULL,并且可以插入多次
							 非空约束：NOT NULL
								 声明非空约束的列上不能插入NULL值，如果插入的是NULL也不会报错，会显示空内容
							 默认值约束：DEFAULT
								 可以使用DEFAULT关键字为列声明默认值，两种用法：
								 sex BOOL DEFAULT 1
								 INSERT INTO xz_laptop VALUES(1,'小米air',DEFAULT...);
								 INSERT INTO xz_laptop(id,title)VALUES(2,'苹果pro');
							 检查约束：CHECK
								 检查约束可以对插入的数据范围进行验证
								 CREATE TABLE student(age TINYINT CHECK(age>18 AND age<60));
								 MYSQL数据库不支持检查约束，会降低访问效率
							 外键约束：FOREIGN KEY
								 声明了外键约束的列的记录取值必须在另一个表的主键列的记录取值中出现过,取值可以是NULL,外键的列类型和另外一个表的主键列的数据类型一致
								 FOREIGN KEY(familyId)REFERENCES xz_laptop_family(fid)
						 所有的列约束中，主键约束推荐使用，可提高查询效率；其他的列约束是否使用根据项目定，可以不用，会影响数据库访问效率
					 NULL:空的
						 指应该有某个数据，但暂时还不能确定具体的值。两条记录相同的NULL值在唯一约束中可以重复使用。NULL不能和任何值进行等于、不等于判断，包括NULL自己，可以使用IS NULL 和IS NOT NULL
					 myql中的自增列：AUTO_INCREMENT
						 假如列声明了自增列，无需手动赋值，直接指定为NULL，会自动获得当前最大值，新纪录自动加1。
						 只用于整数型的主键列上
					 项目中如何存储日期时间数据
						 2018-11-11
						 2018年11月25日
 						 11-11-2018
						 25/11/2018
						 数据库中存储的是距离计算机元年的毫秒数：1970-1-1 0:0:0
						 1秒钟=1000毫秒
						 数据库存储1000 1970-1-1 0:0:1
					 简单查询
						 查询所有的列
							 SELECT * FROM emp;
						 查询特定的列
							 查询所有员工的姓名、生日、工资
							 SELECT ename,birthday,salary FROM emp;
						 给列取别名
							 查询所有员工的姓名和工资，列名使用汉字,AS关键字可以省略
							 SELECT ename AS 姓名,salary AS 工资 FROM emp;
						 只显示不同的值/合并相同的项DISTINCT
							 查询公司都有哪些性别的员工
							 SELECT DISTINCT sex FROM emp;
							 SELECT DISTINCT deptid FROM emp;
						 查询时执行运算
							 计算5+3-7/2*9
							 SELECT 5+3-7/2*9;
							 查询所有员工的工资及其年薪
							 SELECT ename 姓名,salary 工资,salary*12/10000 年薪 FROM emp;
							 所有员工工资加500，年终奖5000，查询出姓名和年薪，并起别名
							 SELECT ename 姓名,salary+500 工资,(salary+500)*12+5000 年薪 FROM emp;
						 查询的结果排序：ASC升序、DESC降序 ASCEND DESCEND 默认按照升序排列 可以按数值、日期、字符串排序
							 按照指定顺序输出
							  select * from emp where eid in(4,5,6,7,8) order by field(eid,6,7,8,5,4);
							 查询所有员工的信息
							 SELECT * FROM emp ORDER BY salary ASC,deptId ASC;
							 SELECT * FROM emp ORDER BY salary DESC;
							 查询所有员工的信息，结果按年龄从大到小
							 SELECT * FROM emp ORDER BY birthday ASC;
							 查询所有员工的信息，按照姓名排序
							 SELECT * FROM emp ORDER BY ename ASC;
							 查询所有员工的信息，按生日由大到小，若生日相同，再按照姓名升序排列
							 SELECT * FROM emp ORDER BY birthday DESC,ename ASC;
							 查看所有员工信息，按照工资由大到小排序，要求女员工必须在男员工前边
							 SELECT * FROM emp ORDER BY sex ASC,salary DESC;
						 条件查询 支持= > < >= <= !=
							 查询编号为5的员工工资
							 SELECT * FROM emp WHERE eid=5;
							 查询1990年之前出生的员工信息
							 SELECT * FROM emp WHERE birthday<'1990-1-1';
							 查询1993年之后出生的员工信息
							 SELECT * FROM emp WHERE birthday>'1993-12-31';
							 查询出值为NULL的信息
							 SELECT * FROM emp WHERE deptId IS NULL;
							 查询有明确部门的员工信息
							 SELECT * FROM emp WHERE deptId IS NOT NULL;
							 查询出10号部门所有女员工的信息
							 SELECT * FROM emp WHERE deptId=10 AND sex=0;/or:或者 and:并且
							 between...and...
							 SELECT * FROM emp WHERE salary BETWEEN 6000 AND 8000;
							 SELECT * FROM emp WHERE salary NOT BETWEEN 6000 AND 8000;
							 查询10号和20号和30号部门的员工信息
							 SELECT * FROM emp WHERE deptId=10 or deptId=20 or deptId=30;
							 SELECT * FROM emp WHERE deptId in(10,20,30);
						 模糊条件查询%:0个或多个 _：0个或一个
							 查询出姓名中含有字母e的员工信息
							 SELECT * FROM emp WHERE ename LIKE '%e%';
							 SELECT * FROM emp WHERE ename LIKE '%e';
							 查询出姓名中倒数第二个字符为e的员工信息
							 SELECT * FROM emp WHERE ename LIKE '%e_';
						 分页查询
							 分页显示：假如查询的结果中记录太多，一次显示不完，可以分多页显示
							 SELECT * FROM emp LIMIT start,count;
							 start:第一条记录在表中的位置值
							 count:查询的记录数
							 start=（页码-1）*每页大小
							 count=count
							 SELECT * FROM emp LIMIT 0,5;
							 SELECT * FROM emp LIMIT 9,3;
						 综合查询
							 SELECT * FROM emp
								 WHERE ...
								 ORDER BY...
								 LIMIT...
							 查询所有男员工工资最高的三个人
							 SELECT * FROM emp
								 WHERE sex=1
								 ORDER BY salary DESC
								 LIMIT 0,3;
						 复杂查询
							 聚合查询/分组查询 聚合函数：count(...)/SUM()AVG()/MAX()/MIN()/YEAR(获取日期中的年份)/MONTH(月份)/DAY(日)：YEAR(birthday)=1991
								 查询所有员工的数量
								 SELECT COUNT(eid) FROM emp;
								 SELECT COUNT(*) FROM emp;
							 分组查询:只能查询分组查询的条件和聚合函数
								 查询每个部门员工的数量是多少
								 SELECT deptId,COUNT(*) FROM emp GROUP BY deptId;
								 查询男女员工的平均工资，最高工资，最低工资
								 select sex,avg(salary),max(salary),min(salary) from emp group by sex
								 查询1991年出生的所有员工信息
								 SELECT * FROM emp WHERE YEAR(birthday)=1991;
							 子查询
								 查询出研发部所有的员工信息
									 查出研发部部门编号——10
									 SELECT did FROM dept WHERE dname='研发部';
									 根据部门编号查询员工信息
									 SELECT * FROM emp WHERE deptId=10;
									 综合：
									 SELECT * FROM emp WHERE deptId=(SELECT did FROM dept WHERE dname='研发部');
								 把一个SQL语句的查询结果作为另外一个SQL语句的查询条件
							 多表查询
								 查询出所有员工的姓名及其部门名称
								 SELECT ename,dname FROM emp,dept;
								 错误：笛卡尔积：自由组合。
								 多表查询避免笛卡尔积，添加查询条件
									 SELECT ename,dname FROM emp,dept WHERE deptId=did;
								 上述多表查询语法是 SQL-92中，无法查询出没有部门的员工，也无法查询出没有员工的部门。SQL-99中提出了新的多表查询方法
										 内连接：INNER JOIN ... ON 和SQL92结果一样，没解决问题
											 SELECT ename,dname FROM emp INNER JOIN dept ON deptId=did;
										 左外连接：LEFT OUTER（可省略） JOIN ... ON ... 左侧表中所有记录都显示
											 SELECT ename,dname FROM emp LEFT OUTER JOIN dept ON deptId=did;
										 右外连接：RIGHT OUTER（可省略） JOIN ... ON ...右侧表中所有记录都显示
											 SELECT ename,dname FROM emp RIGHT JOIN dept ON deptId=did;
										 全连接：显示左侧和右侧所有记录——Mysql不支持
											 UNION合并相同的项
											 UNION ALL不合并相同的项
											 (SELECT ename FROM emp_us)
											 UNION
											 (SELECT ename FROM emp_ch)
											 解决方案：1
											 (SELECT ename,dname FROM emp LEFT OUTER JOIN dept ON deptId=did)
											 UNION ALL
											 (SELECT ename,dname FROM emp RIGHT JOIN dept ON deptId=did);
											 解决方案：2对的
											 (SELECT ename,dname FROM emp LEFT OUTER JOIN dept ON deptId=did)
											 UNION
											 (SELECT ename,dname FROM emp RIGHT JOIN dept ON deptId=did);
											 


					 标准SQL语句分类
						 DDL:Data Define Language定义数据
							 CREATE/DROP/ALTER
						 DML:Data Manipulate Language 操作数据
							 INSERT/DELETE/UPDATE
						 DQL:Data Query Language查询数据
							 SELECT
						 DCL:Data Control Language控制用户权限
							 GRANT:授权
							 REVOKE:收权
			 sqlserver
				 中型数据库 只用于windows系统
			 oracle 
				 中大型数据库
			 db2
				 中大型数据库 与ibm服务器搭配使用
		 非关系型数据库
	
xxammp
	 官网下载地址：https://www.apachefirends.org
	 服务器套装，包含多款服务器软件
		 mysqld.exe 启动mysql服务器-d:deamon 精灵，守护者
		 mysql.exe 客户端

			
			
















