mysql基础
	 查看版本号和当前日期
		 SELECT VERSION(),CURRENT_DATE;
	 查看当前时间
		 SELECT NOW();
	 进行数学计算
		 SELECT 4*(5+5);
	 查看用户
		 select user();
	 取消命令
		 SELECT * FROM \C
	 test数据库是test数据库
	 给用户分配数据库权限
		 GRANT ALL ON YourData.* TO 'lvbo'@'localhost';
	 将windows上的文本文件的表数据导入指定的表
		 文本文件数据填写要求一行一条记录，字段内容没有时用\N表示，代表NULL，字段之间以Tab键分隔
		 打开表所在的数据库，输入命令
			 load data local infile 'C:/Users/web/Desktop/lvbo/test.txt' into table pet
			 lines terminated by '\r\n';
		 注意文件路径使用/
	 查看当前日期
		 SELECT CURDATE();
	 字符截取：
		 LEFT(CURDATE(),7) RIGHT(CURDATE(),5)
	 在一个给定的日期上加上时间间隔
		 DATE_ADD(CURDATE(),INTERVAL 1 MONTH)
	 取模函数
		 MOD(MONTH(CURDATE()), 12)
	 NULL值操作
		 可以在定义为NOT NULL的列内插入0或空字符串
	 查看表的索引信息
		 show index from pet;
	 show warning
		查看警告信息
	 全文索引
		 MySQL支持全文索引和搜索功能。MySQL中的全文索引类型FULLTEXT的索引。
		 FULLTEXT 索引仅可用于 MyISAM 表
		 CREATE TABLE articles (
			 id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
			 title VARCHAR(200),
			 body TEXT,
			 FULLTEXT (title,body)//设置全文索引字段
			 );
		 SELECT * FROM articles WHERE MATCH (title,body) AGAINST ('database');//全文索引查询

数据类型
	 字符串
		 使用单引号括起来
			 'lvbo'
		 转义字符
			 使用反斜线\开始
			 \0 0(null)
			 \' 单引号
			 \" 双引号
			 \b 退格
			 \n 换行
			 \r 回车
			 \t Tab字符
			 \\ 反斜线
			 \% %
			 \_ _
				 \%和\_在用于模式匹配时，返回%和_,其他用途会返回\%和\_
				 将引号包含在在字符串中
				 'lv''bo' ->lv'bo
				 'lv""bo' ->lv"bo
				 'lv\'bo' ->lv'bo
	 数值型
		 整型
			 阿拉伯数字表示
		 浮点型
			 使用'.'作为十进制间隔符
		 整型和浮点型均可为负值
			 12 -12 12.2 -12.2 12.00
		 十六进制
			 计算
				 十六进制数+十进制数 按照数值型计算
					 0xa+10 ->20
				 十六进制数+字符串 按照字符串计算
					 0x4d7953514c -> MySQL
			 十六进制值得默认数据类型是字符串
				 使用cast(0x41 as unsigned)按数字处理
			 将字符串和数字转换为十六进制的字符串
				 使用函数hex() 
					 select hex('cat');
	 布尔型
		 true 1
		 false 0
	 位字段值
		b'二进制数值' ->b'100'
	 null
		 空
			 null与0和' '字符串不同
			 在文本导入数据时，null用\N表示
识别符
	 数据库、表、索引、列和别名是识别符
	 识别符中.之前的部分作为限定词，之后的部分作为识别符被解释
		 db_name.tb_name.col_name
变量
	 用户变量
		 变量只在当前客户端有效，客户端退出时变量自动释放
		 变量定义
			 set @var:='lvbo';
			 select @var:='lvbo';
			 select @var1:=(@var2:=1)+@var3:=2,@var1,var2,var3;
			 声明了变量未赋值时的默认值为null
	 系统变量
		 服务器运行时可以动态更改，不需要停止并重启服务器 
		 全局变量
			 影响服务器整体操作
				 服务器启动后，通过连接服务器并执行SET GLOBAL var_name
				 更改全局变量，必须具有SUPER权限。
				 只影响更改后连接的客户的从该全局变量初始化的相应会话变量。不影响目前已经连接的客户端的会话变量	 
		 会话变量
			 影响具体客户端连接的操作
				 在连接时使用相应全局变量的当前值对客户端的会话变量进行初始化
				 客户端可以通过SET SESSION var_name语句更改它们
				 设置会话变量不需要特殊权限，只能更改自己的会话变量，而不能更改其它客户端的会话变量	 
		 设置系统变量
			 设置变量时不指定GLOBAL、SESSION，默认使用SESSION
			 设置一个GLOBAL变量的值
				 SET GLOBAL sort_buffer_size=value;
			 设置一个SESSION变量的值
				 SET SESSION sort_buffer_size=value; 
		 查看系统变量
			 如果不指定GLOBAL、SESSION，MySQL返回SESSION值
			 检索一个GLOBAL变量的值
				 SHOW GLOBAL VARIABLES like 'sort_buffer_size';
			 检索一个SESSION变量的值
				 SHOW SESSION VARIABLES like 'sort_buffer_size';
注释
	 #单行注释
	 -- 单行注释（--后有必须有空格）
	 /**/多行注释
操作符
	 圆括号（）
		 select (2+3)*5;->25
	 比较操作符
		 返回一个布尔型结果
			 数字和字符串比较，字符串转成数字 3>'10' ->false
			 字符串和字符串比较，比较字符集编码，依次对比，直到分出大小为止          <>不等于
				 根据一个布尔值来检验一个值
					 select 1 is false,1 is not true;->0 1
					 select null is unknown;->1
				 检验一个值是否为 NULL	
					 SELECT 1 IS NULL, 0 IS NULL, NULL IS NULL;-> 0, 0, 1
					 SELECT 1 IS NOT NULL, 0 IS NOT NULL, NULL IS NOT NULL;-> 1, 1, 0
				 between...and...(not between...and...)
					 大于等于min,小于等于max
	 逻辑操作符
		 在SQL中，所有逻辑 操作符的求值所得结果均为 TRUE、FALSE或 NULL (UNKNOWN)
			 NOT
				当操作数为0 时，所得值为 1 ；当操作数为非零值时，所得值为  0 ，而当操作数为NULL时，所得的返回值为 NULL
				 select not 1;->0
				 select not 0;->1
				 select not null;->null
			 AND
				 当所有操作数均为非零值、并且不为NULL时，计算所得结果为  1 ，当一个或多个操作数为0 时，所得结果为 0 ，
				 其余情况返回值为 NULL 
				 select 1 and null;->null
				 select null and 0;->0
			 OR 
				 当两个操作数均为非 NULL值时，如有任意一个操作数为非零值，则结果为1，否则结果为0。当有一个操作数为NULL时，
				 如另一个操作数为非零值，则结果为1，否则结果为 NULL 。假如两个操作数均为  NULL，则所得结果为 NULL
				 select null or null;->null
				 select 1 or 0;->1
				 select null or 1;->1
			 xor
				 集合a、b的交集的补集
				 当任意一个操作数为 NULL时，返回值为NULL
					 select 2 xor 1;->1
					 select 1 xor 1;->0
					 select null xor 1;->0
	 算术操作符
		 +|-|*|/|%
			 select 5/0;->null
		 div整除
			 select 6 div 4;->1
流程控制
	 when...then...
		 当所有条件不满足且没有else部分时，返回null
		 case 初始值
		 when 条件 then
			结果
		 when 条件 then
			 结果
		 else
			 结果
		 end
		 =====
		 set @eid:='Tom';
		 select * from emp where case @eid 
		 when 'Tom' then eid=1
		 when 'Jerry' then eid=2
		 else eid=3
		 end;
	 选择语句
		 if语句
			 delimiter /
			 set @eid:=4;
			 if @eid>4 then
				 select * from emp where eid>4;
			 elseif @eid<4 then
				 select * from emp where eid<4;
			 else
				 select * from emp where eid=4;
			 end if/
		 case语句
			 delimiter /
			 set @var:=5;
			 case @var
				 when 1 then select * from emp where eid=1;
				 when 2 then select * from emp where eid=2;
				 when 3 then select * from emp where eid=3;
				 else select * from emp where  eid>=4;
			 end case /
			 或者
			 delimiter /
			 set @eid:=5;
			 case
				 when @eid=1 then select * from emp where eid=1;
				 when @eid=2 then select * from emp where eid=2;
				 when @eid=3 then select * from emp where eid=3;
				 else select * from emp where eid<6;
			 end case/
		 loop语句
函数
	 比较函数
		 coalesce(var1,var2,...)
			 返回参数中的第一个非 NULL值，没有非NULL 值时返回 NULL 
			 select coalesce(null,1);->1
			 select coalesce(null,null,null);->null
		 greatest(var1,var2,...)
		 least(var1,var2,...)
			 返回最大值/最小值
		 in(var1,var2,...)/not in(var1,var2,...)
		 isnull(var)
			 var为null时返回1，否则返回0
	 流程控制函数
		 if(表达式1,表达式2,表达式3)
			 1为true时，返回2，否则返回3
				 set @var:=1;
				 select * from emp where if(@var<5,eid=1,eid=2);
		 ifnull(表达式1，表达式2)
			 1为null时，返回2，否则返回1
		 nullif(表达式1，表达式2)
			 1=2时，返回null,否则返回1
	 字符串函数
		 ascii(str)
			 返回str的首个字符的ascii码值，str为空字符串时返回0，str为null时返回null
		 bin(str)
			 将字符串转换为二进制
		 OCT(N) 
			 将N转换为八进制形式
		 hex(var)
			 将var转换为十六进制
		 unhex(var)
			 hex(var)的反向操作
		 bit_length(str)
			 返回str的二进制长度
		 char_length(str)
			 返回str的长度
		 length(str)
			 返回str的长度
		 concat(str1,str2,str3,...)
		 	 拼接字符串
			 select concat('lv','bo');->lvbo
		 concat_ws(分隔符,str1,str2,str3)
			 用自定义的分隔符拼接字符串
			 select concat_ws('|','lv','bo','is');->lv|bo|is
		 elt(n,str1,str2,...)
			 若n为1，返回str1，若n为2，返回str2，...
		 field(str,str1,str2,...)---------与elt函数互补
			 若str1和str相等，返回1，若str2和str相等，返回2，...
		 find_in_set(str,strlist)
			 返回str在strlist中的位置数,其中strlist中的子字符串用逗号分隔
			 select find_in_set('lvbo','today,is,lvbo');->3
		 format(num,var)
			 将数字num转换格式，并以四舍五入的方式保留小数位数,返回num的字符串形式
			 select format(123456.2345,2);->'123,456.23'
		 insert(str1,起始位置,替换字符个数,用来替换的str2)--起始位置从1开始算,替换字符个数可以大于str1的剩余长度
			 select insert('thisisatest',3,5,'r1234567890');->'thr1234567890test'
		 instr(str1,str2)
			 返回str2第一次在str1中出现的位置
			 select instr('lvbo','bo');->3
		 lower(str)
			 将字符串变成小写
			 select lower('LVBO');->'lvbo'
		 upper(str)
			 将字符串变成大写
		 left(str,len)
			 返回str左边起的len个字符
		 right(str,len)
			 返回str右边起的len个字符
			  select right('lvbo',3);->'vbo'
		 ltrim(str)
			 删除左边空格
			 select ltrim(' lvbo');->'lvbo'
		 rtrim(str)
			 删除右边空格
		 trim(str)
			 删除两边空格
		 substring(str,pos,len)
			 字符串截取
			 select substring('thisistest',3,4);->isis
		 repeat(str,次数)
			 重复字符串
			 select repeat('lvbo',3);->'lvbolvbolvbo'
		 replace(str,str1,str2)
			 把str中的str1字符用str2替换
			 select replace('www.baidu.com','baidu','jd');->www.jd.com
		 reverse(str)
			 字符串反转
		 rpad(str1,len,str2)
			 字符串填补
			 用str2将str1填补至len长度，若str1长度大于len,则缩至len长度
			 select rpad('lvbo',5,' ');->'lvbo '
			 select rpad('lvbo',3,' ');->'lvb'
		 strcmp(str1,str2)
			 若str1和str2相同，返回0，否则返回1或-1
	 数学函数
		 若发生错误，所有数学函数会返回 NULL 
			 abc(var)
				 返回var的绝对值
			 acos(var)
				 求var的反余弦，-1<=var<=1
			 cos(var)
				 求var的余弦
			 cot(var)
				 求var的余切
			 asin(var)
				 求var的反正弦，-1<=var<=1
			 sin(var)
				 求var的正弦
			 atan(var)
				 求var的反正切
			 tan(var)
				 求var的正切
			 degrees(var)
				 求var对应的度数
			 ceil(var)
				 向上取整
			 floor(var)
				 向下取整
			 mod(var1,var2) 支持小数的取余
				 取余
			 PI() 
				 圆周率
			 pow(x,y)
				 求x的y次方
			 rand()
				 获得一个0<=x<=1之间的随机浮点值
			 round(x)
				 求x最接近的整数
			 round(x,y)
				 按四舍五入计算，y控制小数位数，y可为负数
				 select round(123.33,-2);->100
			 truncate(x,y)
				 保留小数点第y位之前的数，y可为负数
			 sqrt(x)
				 开平方，x不为负数
	 日期和时间函数
		 adddate(日期,增加天数) ---可为负数
			 select adddate('2018-01-01',30);-> 2018-01-31
		 addtime(日期/日期时间,时间)---可为负数
			 select addtime('1:00:59.22','0:0:0.22');-> 01:00:59.440000
			 select addtime('2018/1/1 1:00:59.22','0:0:0.22');->2018-01-01 01:00:59.440000
		 curdate()
			 当前日期
			 select curdate();->2018-11-10
		 curtime()
			 当前时间
			 select curtime();->15:02:18
		 current_timestamp()
		 now()
			 当前日期时间
			 select current_timestamp(),now();->  2018-11-10 15:56:25 | 2018-11-10 15:56:25
		 dayname(var)
			 返回var对应的工作日
			 select dayname('2018-11-10 15:03:07');->周六
		 monthname(var)
			 返回var对应月份的全名
			 select monthname('2018-11-10 15:03:07');->November
		 last_day(var)
			 返回该月的最后一天
			 select last_day('2018-11-10 15:03:07');-> 2018-11-30
		 date(var)
			 获取日期时间中的日期
			 select date('2018-11-10 15:03:07');-> 2018-11-10
		 time(var)
			 获取日期时间中的时间
			 select time('2018-11-10 15:03:07');-> 15:03:07
		 year(var)
			 获取日期时间中的年
			 select year('2018-11-10 15:03:07');->2018
		 month(var)
			 获取日期时间中的月
			 select month('2018-11-10 15:03:07');->11
		 day(var)
			 获取日期时间中的日
			 select day('2018-11-10 15:03:07');->10
		 hour(var)
			 获取日期时间中的小时
			 select hour('2018-11-10 15:03:07');->15
		 minute(var)
			 获取日期时间中的分
			 select minute('2018-11-10 15:03:07');->3
		 second(var)
			 获取日期时间中的秒
			 select second('2018-11-10 15:03:07');->7
		 microsecond(var)
			 获取日期时间中的秒
			 select microsecond('2018-11-10 15:03:07.22');->220000
		 dayofweek(var)
			 返回date对应的工作日索引.(1 = 周日, 2 = 周一, ..., 7 = 周六)
			 select dayofweek('2018-11-10 15:03:07');->7
		 weekday(var)
			 返回date (0 = 周一, 1 = 周二, ... 6 = 周日)对应的工作日索引
			 select weekday('2018-11-10 15:03:07');->5
		 dayofmonth(var)
			 返回date 对应的该月日期，范围是从 1到31
			 select dayofmonth('2018-11-10 15:03:07');->10
		 dayofyear(var)
			 返回date 对应的一年中的天数，范围是从 1到366
			 select dayofyear('2018-11-10 15:03:07');->314
		 quarter(var)
			 返回var对应的季度
			 select quarter('018-11-10 15:03:07');->4
		 week(var)
		 yearweek(var)
			 获取var的周数
			 select week('2018-11-10 15:03:07',0);//0指从周日开始起->44
		 yearweek(var)
			 获取var的周数
			 select yearweek('2018-11-10 15:03:07');->201844
		 weekofyear(var)
			 将该日期的阳历周以数字形式返回，范围是从1到53
			 select weekofyear('2018-11-10 15:03:07');->45
		 extract(var1 FROM var2)
			 获取指定的日期时间，并将分隔符去掉
			 select extract(year_day from '2018-11-10 15:03:07.22');              //
		 datediff(var1,var2)
			 计算var1到var2的天数，只参考日期部分，不参考时间部分
			 select datediff('1997-12-22 23:59:59','1997-12-30');->1
			 select datediff('1997-11-30 23:59:59','1997-12-31');->31
		 timediff(var1,var2)
			 计算var1到var2的时间
			 select timediff('1997-11-30 23:59:59','1997-11-29 23:59:59.001');-> 23:59:59.999
		 timestampdiff(var1,var2,var3)
			 指定求差
			 select timestampdiff(day,'2018-11-10 15:03:07','2018-11-9 15:03:07');->-1
		 date_format(var1,var2)
			 根据var2的设置，展示var1的日期时间格式
		 time_format(var1,var2)
		 makedate(var1,var2)
			 给出年份值和一年中的天数值，返回一个日期。dayofyear 必须大于 0 ，否则结果为 NULL
			 select makedate(2018,314);-> 2018-11-10
		 maketime(var1,var2,var3)
			 返回由hour、 minute和second 参数计算得出的时间值
			 select maketime(16,8,30);->16:08:30
		 to_days(var)
			 给定一个日期date, 返回一个天数
			 select to_days('2018-11-10 15:03:07');->737373
		 time_to_sec(var)
			 将时间转换成秒,时间部分
			 select time_to_sec('2018-11-10 15:03:07');->54187






























