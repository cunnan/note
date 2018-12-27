Shell 教程
	 Shell 是一个用 C 语言编写的程序，它是用户使用 Linux 的桥梁。Shell 既是一种命令语言，又是一种程序设计语言。
	 Shell 脚本
		 shell 脚本（shell script），是一种为 shell 编写的脚本程序。业界所说的 shell 通常都是指 shell 脚本，shell 和 shell script 是两个不同的概念。
	Shell 环境
		 shell 编程跟 java、php 编程一样，只要有一个能编写代码的文本编辑器和一个能解释执行的脚本解释器就可以了。Bash 是大多数Linux 系统默认的 Shell。
	第一个shell脚本
		 新建一个文件 test.sh，扩展名为 sh（sh代表shell）
		 #!/bin/bash
		 echo "Hello World !
		 #! 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行
		 运行 Shell 脚本有两种方法：
			 作为可执行程序
				 chmod +x ./test.sh  #使脚本具有执行权限
				 ./test.sh  #执行脚本
			 作为解释器参数
				 直接运行解释器，其参数就是 shell 脚本的文件名，如：
				 /bin/sh test.sh
				 /bin/php test.php
				 这种方式运行的脚本，不需要在第一行指定解释器信息，写了也没用。
Shell 变量
	定义变量
		 变量名不加美元符号，如：	
		 your_name="runoob.com"
	使用变量
		 使用一个定义过的变量，只要在变量名前面加美元符号即可，如：
		 your_name="qinjx"
		 echo ${your_name}
	只读变量
		 使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变。
		 下面的例子尝试更改只读变量，结果报错：
		 #!/bin/bash
		 myUrl="http://www.google.com"
		 readonly myUrl
		 myUrl="http://www.runoob.com"
	删除变量
		 使用 unset 命令可以删除变量，变量被删除后不能再次使用。unset 命令不能删除只读变量。
		 #!/bin/sh
		 myUrl="http://www.runoob.com"
		 unset myUrl
		 echo $myUrl
		 以上实例执行将没有任何输出
Shell 字符串
	 字符串是shell编程中最常用最有用的数据类型（除了数字和字符串，也没啥其它类型好用了），字符串可以用单引号，也可以用双引号，也可以不用引号
	 单引号
		 单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的；
		 单引号字串中不能出现单独一个的单引号（对单引号使用转义符后也不行），但可成对出现，作为字符串拼接使用。
	双引号
		 双引号里可以有变量
		 双引号里可以出现转义字符
	拼接字符串
		 your_name="runoob"
		 # 使用双引号拼接
		 greeting="hello, "$your_name" !"
		 greeting_1="hello, ${your_name} !"
	获取字符串长度
		 string="abcd"
		 echo ${#string} #输出 4
	提取子字符串
		 以下实例从字符串第 2 个字符开始截取 4 个字符：
		 string="runoob is a great site"
		 echo ${string:1:4} # 输出 unoo
	查找子字符串
		 查找字符 i 或 o 的位置(哪个字母先出现就计算哪个)：
		 string="runoob is a great site"
		 echo `expr index "$string" io`  # 输出 4
Shell 数组
	 bash支持一维数组（不支持多维数组），并且没有限定数组的大小
	定义数组
		 在 Shell 中，用括号来表示数组，数组元素用"空格"符号分割开。
		 定义数组的一般形式为：
		 array_name=(value0 value1 value2 value3)
		 单独定义数组的各个分量：
		 array_name[0]=value0
		 array_name[1]=value1
		 array_name[n]=valuen
	读取数组
		 读取数组元素值的一般格式是：
		 valuen=${array_name[n]}
		 使用 @ 符号可以获取数组中的所有元素
	获取数组的长度
		 # 取得数组元素的个数
		 length=${#array_name[@]}
		 # 取得数组单个元素的长度
		 lengthn=${#array_name[n]}
Shell 注释
	 以 # 开头的行就是注释，会被解释器忽略。
Shell 传递参数
	 脚本内获取参数的格式为：$n。n 代表一个数字，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数，以此类推……
	 向脚本传递三个参数，并分别输出，其中 $0 为执行的文件名：
		 #!/bin/bash
		 # author:菜鸟教程
		 # url:www.runoob.com
		 echo "Shell 传递参数实例！";
		 echo "执行的文件名：$0";
		 echo "第一个参数为：$1";
		 echo "第二个参数为：$2";
		 echo "第三个参数为：$3";
	为脚本设置可执行权限，并执行脚本，输出结果如下所示：
		 $ chmod +x test.sh 
		 $ ./test.sh 1 2 3
		 Shell 传递参数实例！
		 执行的文件名：./test.sh
		 第一个参数为：1
		 第二个参数为：2
		 第三个参数为：3
	用来处理参数的几个特殊字符
		 $#	传递到脚本的参数个数
		 $*	以一个单字符串显示所有向脚本传递的参数。如"$*"用「"」括起来的情况、以"$1 $2 … $n"的形式输出所有参数。
		 $@	与$*相同，但是使用时加引号，并在引号中返回每个参数。如"$@"用「"」括起来的情况、以"$1" "$2" … "$n" 的形式输出所有参数。
		 $$	脚本运行的当前进程ID号
		 $!	后台运行的最后一个进程的ID号
		 $-	显示Shell使用的当前选项，与set命令功能相同。
		 $?	显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。
				 #!/bin/bash
				 # author:菜鸟教程
				 # url:www.runoob.com
				 echo "Shell 传递参数实例！";
				 echo "第一个参数为：$1";
				 echo "参数个数为：$#";
				 echo "传递的参数作为一个字符串显示：$*";
				 执行脚本，输出结果如下所示：
				 $ chmod +x test.sh 
				 $ ./test.sh 1 2 3
				 Shell 传递参数实例！
				 第一个参数为：1
				 参数个数为：3
				 传递的参数作为一个字符串显示：1 2 3
			$* 与 $@ 区别：
			 相同点：都是引用所有参数。
			 不同点：只有在双引号中体现出来。假设在脚本运行时写了三个参数 1、2、3，，则 " * " 等价于 "1 2 3"（传递了一个参数），而 "@" 等价于 "1" "2" "3"（传递了三个参数）。
			 #!/bin/bash
			 # author:菜鸟教程
			 # url:www.runoob.com
			 echo "-- \$* 演示 ---"
			 for i in "$*"; do
			      echo $i
			 done
			 echo "-- \$@ 演示 ---"
			 for i in "$@"; do
			     echo $i
			 done
			 执行脚本，输出结果如下所示：
			 $ chmod +x test.sh 
			 $ ./test.sh 1 2 3
			 -- $* 演示 ---
			 1 2 3
			 -- $@ 演示 ---
			 1
			 2
			 3
Shell 基本运算符
	 原生bash不支持简单的数学运算，但是可以通过其他命令来实现，例如 awk 和 expr，expr 最常用。expr 是一款表达式计算工具，使用它能完成表达式的求值操作。
	 例如，两个数相加(注意使用的是反引号 ` 而不是单引号 ')：
		 #!/bin/bash
		 val=`expr 2 + 2`
		 echo "两数之和为 : $val"
		 注意：表达式和运算符之间要有空格，例如 2+2 是不对的，必须写成 2 + 2，这与我们熟悉的大多数编程语言不一样
	算术运算符
		条件表达式要放在方括号之间，并且要有空格，例如: [$a==$b] 是错误的，必须写成 [ $a == $b ]。
		乘号(*)前边必须加反斜杠(\)才能实现乘法运算
	关系运算符
		 关系运算符只支持数字，不支持字符串，除非字符串的值是数字。
		 运算符	说明	举例
		 -eq	检测两个数是否相等，相等返回 true。	[ $a -eq $b ] 返回 false。
		 -ne	检测两个数是否不相等，不相等返回 true。	[ $a -ne $b ] 返回 true。
		 -gt	检测左边的数是否大于右边的，如果是，则返回 true。	[ $a -gt $b ] 返回 false。
		 -lt	检测左边的数是否小于右边的，如果是，则返回 true。	[ $a -lt $b ] 返回 true。
		 -ge	检测左边的数是否大于等于右边的，如果是，则返回 true。	[ $a -ge $b ] 返回 false。
		 -le	检测左边的数是否小于等于右边的，如果是，则返回 true。	[ $a -le $b ] 返回 true。
	布尔运算符
		 运算符	说明	举例
		 !	非运算，表达式为 true 则返回 false，否则返回 true。	[ ! false ] 返回 true。
		 -o	或运算，有一个表达式为 true 则返回 true。	[ $a -lt 20 -o $b -gt 100 ] 返回 true。
		 -a	与运算，两个表达式都为 true 才返回 true。	[ $a -lt 20 -a $b -gt 100 ] 返回 false。
	逻辑运算符
		 运算符	说明	举例
		 &&	逻辑的 AND	[[ $a -lt 100 && $b -gt 100 ]] 返回 false
		 ||	逻辑的 OR	[[ $a -lt 100 || $b -gt 100 ]] 返回 true
	字符串运算符
		 运算符	说明	举例
		 =	检测两个字符串是否相等，相等返回 true。	[ $a = $b ] 返回 false。
		 !=	检测两个字符串是否相等，不相等返回 true。	[ $a != $b ] 返回 true。
		 -z	检测字符串长度是否为0，为0返回 true。	[ -z $a ] 返回 false。
		 -n	检测字符串长度是否为0，不为0返回 true。	[ -n "$a" ] 返回 true。
		 str	检测字符串是否为空，不为空返回 true。	[ $a ] 返回 true。
	文件测试运算符
		 文件测试运算符用于检测 Unix 文件的各种属性。
		 操作符	说明	举例
		 -b file	检测文件是否是块设备文件，如果是，则返回 true。	[ -b $file ] 返回 false。
		 -c file	检测文件是否是字符设备文件，如果是，则返回 true。	[ -c $file ] 返回 false。
		 -d file	检测文件是否是目录，如果是，则返回 true。	[ -d $file ] 返回 false。
		 -f file	检测文件是否是普通文件（既不是目录，也不是设备文件），如果是，则返回 true。	[ -f $file ] 返回 true。
		 -g file	检测文件是否设置了 SGID 位，如果是，则返回 true。	[ -g $file ] 返回 false。
		 -k file	检测文件是否设置了粘着位(Sticky Bit)，如果是，则返回 true。	[ -k $file ] 返回 false。
		 -p file	检测文件是否是有名管道，如果是，则返回 true。	[ -p $file ] 返回 false。
		 -u file	检测文件是否设置了 SUID 位，如果是，则返回 true。	[ -u $file ] 返回 false。
		 -r file	检测文件是否可读，如果是，则返回 true。	[ -r $file ] 返回 true。
		 -w file	检测文件是否可写，如果是，则返回 true。	[ -w $file ] 返回 true。
		 -x file	检测文件是否可执行，如果是，则返回 true。	[ -x $file ] 返回 true。
		 -s file	检测文件是否为空（文件大小是否大于0），不为空返回 true。	[ -s $file ] 返回 true。
		 -e file	检测文件（包括目录）是否存在，如果是，则返回 true。	[ -e $file ] 返回 true
Shell echo命令
	显示普通字符串
		 echo "It is a test"
		 echo It is a test
	显示转义字符
		 echo "\"It is a test\""
	显示变量
		 read 命令从标准输入中读取一行,并把输入行的每个字段的值指定给 shell 变量
		 #!/bin/sh
		 read name 
		 echo "$name It is a test"
		 以上代码保存为 test.sh，name 接收标准输入的变量，结果将是:
		 [root@www ~]# sh test.sh
		 OK                     #标准输入
		 OK It is a test        #输出
	显示换行
		 echo -e "OK! \n" # -e 开启转义
		 echo "It is a test"
	显示不换行
		 #!/bin/sh
		 echo -e "OK! \c" # -e 开启转义 \c 不换行
	显示结果定向至文件
		 echo "It is a test" > myfile
	原样输出字符串，不进行转义或取变量(用单引号)
		 echo '$name\"'
		 输出结果：
		 $name\"
	显示命令执行结果
		 echo `date`
		 结果将显示当前日期
		 Thu Jul 24 10:08:46 CST 2014
Shell printf 命令
	 printf "%-10s %-8s %-4s\n" 姓名 性别 体重kg  
	 printf "%-10s %-8s %-4.2f\n" 郭靖 男 66.1234 
	 执行脚本，输出结果如下所示：
	 姓名     性别   体重kg
	 郭靖     男      66.12
	 %s %c %d %f都是格式替代符
	 %-10s 指一个宽度为10个字符（-表示左对齐，没有则表示右对齐），任何字符都会被显示在10个字符宽的字符内，如果不足则自动以空格填充，超过也会将内容全部显示出来。%-4.2f 指格式化为小数，其中.2指保留2位小数。
		 # format-string为双引号
		 printf "%d %s\n" 1 "abc"
		 # 单引号与双引号效果一样 
		 printf '%d %s\n' 1 "abc" 
		 # 没有引号也可以输出
		 printf %s abcdef
		 # 格式只指定了一个参数，但多出的参数仍然会按照该格式输出，format-string 被重用
		 printf %s abc def
		 printf "%s\n" abc def
		 printf "%s %s %s\n" a b c d e f g h i j
		 # 如果没有 arguments，那么 %s 用NULL代替，%d 用 0 代替
		 printf "%s and %d \n" 
		 执行脚本，输出结果如下所示：
		 1 abc
		 1 abc
		 abcdefabcdefabc
		 def
		 a b c
		 d e f
		 g h i
		 j  
		  and 0
Shell test 命令
	 Shell中的 test 命令用于检查某个条件是否成立，它可以进行数值、字符和文件三个方面的测试。
	 数值测试
		 实例演示：
		 num1=100
		 num2=100
		 if test $[num1] -eq $[num2]
		 then
		     echo '两个数相等！'
		 else
		     echo '两个数不相等！'
		 fi
	字符串测试
		 实例演示：
		 num1="ru1noob"
		 num2="runoob"
		 if test $num1 = $num2
		 then
		     echo '两个字符串相等!'
		 else
		     echo '两个字符串不相等!'
		 fi
	文件测试
		 实例演示：
		 cd /bin
		 if test -e ./bash
		 then
		     echo '文件已存在!'
		 else
		     echo '文件不存在!'
		 fi
	 另外，Shell还提供了与( -a )、或( -o )、非( ! )三个逻辑操作符用于将测试条件连接起来，其优先级为："!"最高，"-a"次之，"-o"最低。
		 例如：
		 cd /bin
		 if test -e ./notFile -o -e ./bash
		 then
		     echo '至少有一个文件存在!'
		 else
		     echo '两个文件都不存在'
		 fi
Shell 流程控制
	 和Java、PHP等语言不一样，sh的流程控制不可为空，如果else分支没有语句执行，就不要写这个else。
	 if 语句语法格式
		 if condition
	 	 then
		    command1 
		    command2
		    ...
		    commandN 
		 fi
		 
		 if condition
		 then
		    command1 
		    command2
		    ...
		    commandN
		 else
		    command
		 fi

		 if condition1
		 then
		    command1
		 elif condition2 
		 then 
		    command2
		 else
		     commandN
		 fi
	for循环一般格式
		 for var in item1 item2 ... itemN
		 do
		    command1
		    command2
		    ...
		    commandN
		 done
	while 语句
		 while condition
		 do
		    command
		 done
		 echo '按下 <CTRL-D> 退出'
		 echo -n '输入你最喜欢的网站名: '
		 while read FILM
		 do
		 echo "是的！$FILM 是一个好网站"
		 done

		 let a=5+4
		 let b=9-3 
		 echo $a $b
	无限循环
		 while :
		 do
		    command
		 done
		 或者

		 while true
		 do
		    command
		 done
		 或者
		 for (( ; ; ))
	until 循环
	 until 循环执行一系列命令直至条件为 true 时停止。until 循环与 while 循环在处理方式上刚好相反。
	 	 until condition
		 do
		    command
		 done
	case
	 Shell case语句为多选择语句。可以用case语句匹配一个值与一个模式，如果匹配成功，执行相匹配的命令。如果无一匹配模式，使用星号 * 捕获该值，再执行后面的命令。
		 case 值 in
		 模式1)
		    command1
		    command2
		    ...
		    commandN
		    ;;
		 模式2）
		    command1
		    command2
		    ...
		    commandN
		    ;;
		 esac
	跳出循环
		 break命令允许跳出所有循环（终止执行后面的所有循环）
		 continue命令与break命令类似，只有一点差别，它不会跳出所有循环，仅仅跳出当前循环
Shell 函数
	 #!/bin/bash
	 # author:菜鸟教程
	 # url:www.runoob.com
	 demoFun(){
	    echo "这是我的第一个 shell 函数!"
	 }
	 echo "-----函数开始执行-----"
	 demoFun
	 echo "-----函数执行完毕-----"

	 funWithReturn(){
	    echo "这个函数会对输入的两个数字进行相加运算..."
	    echo "输入第一个数字: "
	    read aNum
	    echo "输入第二个数字: "
	    read anotherNum
	    echo "两个数字分别为 $aNum 和 $anotherNum !"
	    return $(($aNum+$anotherNum))
	 }
	 funWithReturn
	 echo "输入的两个数字之和为 $? !"  //函数返回值在调用该函数后通过 $? 来获得

	 函数参数
		 在Shell中，调用函数时可以向其传递参数。在函数体内部，通过 $n 的形式来获取参数的值，例如，$1表示第一个参数，$2表示第二个参数...注意，$10 不能获取第十个参数，获取第十个参数需要${10}。当n>=10时，需要使用${n}来获取参数
			 funWithParam(){
			    echo "第一个参数为 $1 !"
			    echo "第二个参数为 $2 !"
			    echo "第十个参数为 $10 !"
			    echo "第十个参数为 ${10} !"
			    echo "第十一个参数为 ${11} !"
			    echo "参数总数有 $# 个!"
			    echo "作为一个字符串输出所有参数 $* !"
			 }
			 funWithParam 1 2 3 4 5 6 7 8 9 34 73
			 输出结果：

			 第一个参数为 1 !
			 第二个参数为 2 !
			 第十个参数为 10 !
			 第十个参数为 34 !
			 第十一个参数为 73 !
			 参数总数有 11 个!
			 作为一个字符串输出所有参数 1 2 3 4 5 6 7 8 9 34 73 !
Shell 输入/输出重定向
	 重定向命令列表如下：
	 命令	说明
	 command > file	将输出重定向到 file。
	 command < file	将输入重定向到 file。
	 command >> file	将输出以追加的方式重定向到 file。
Shell 文件包含
	 和其他语言一样，Shell 也可以包含外部脚本。这样可以很方便的封装一些公用的代码作为一个独立的文件。
	 Shell 文件包含的语法格式如下：
	 . filename   # 注意点号(.)和文件名中间有一空格
	 或
	 source filename
	 实例
	 创建两个 shell 脚本文件。
	 test1.sh 代码如下：
		 #!/bin/bash
		 # author:菜鸟教程
		 # url:www.runoob.com
		 url="http://www.runoob.com"
	 test2.sh 代码如下：
		 #!/bin/bash
		 # author:菜鸟教程
		 # url:www.runoob.com
		 #使用 . 号来引用test1.sh 文件
		 . ./test1.sh
		 # 或者使用以下包含文件代码
		 # source ./test1.sh
		 echo "菜鸟教程官网地址：$url"
	 接下来，我们为 test2.sh 添加可执行权限并执行：
		 $ chmod +x test2.sh 
		 $ ./test2.sh 
		 菜鸟教程官网地址：http://www.runoob.com
		注：被包含的文件 test1.sh 不需要可执行权限。