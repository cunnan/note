vue
	 DOM
	 函数库
	 框架
	
	版本2.5.x
	mvvm 渐进式 框架
	vue原理
		旧式前端划分
			html
			css
			js
		MVVM设计模式
			新式前端划分
				.html由组件文件组成
				view: html css
				model:内存中自己创建的或服务端返回的
				viewmodel/controller
		控制器的原理:
			响应系统: 监视模型数据的变化，并通知框架修改页面的机制
			虚拟DOM树: 扫描原始DOM而产生的一棵仅包含可能变化的元素的新的简版DOM树
		语法
			 插值语法
				 {{模型变量名}}
			 指令(directive)
				v-bind/:
				v-for
				v-if 采用添加删除元素的方式，控制显示隐藏
				v-else-if
				v-else
				v-show 采用display:block/none的方式显示隐藏	
				事件
					<div @click="add($event)"></div>
					<div @click.stop="add($event)"></div>
					<div @click.prevent="add($event)"></div>
					<script>
						new Vue({
							methods:{
								add(e){
									e.stopPropagation()
									e.preventDefault()
								}
							}
						})
					</script>
				v-html
                    <div v-html="html"></div>//解析html标记
                    new Vue({
                        data:{
                            html:`<div>lvbo</div>`
                        }
                    })
                v-text
                    <div v-text="html">{{html}}</div>//不解析html标记
                    new Vue({
                        data:{
                            html:`<div>lvbo</div>`
                        }
                    })
                v-pre   
                    <div v-pre="html">{{lvbo}}</div>//使‘{{lvbo}}’原样输出，
                    new Vue({
                        
                    })
                v-once
                    仅在首次Vue加载时，绑定一次，之后即使变量改变，也不更新页面
                    <div id="app">
                    <h1 v-once>界面加载时间: {{time}}</h1>
                    <h1>当前时间: {{time}}</h1>
                    </div>
                    <script>
                    var vm=new Vue({
                        el:"#app",
                        data:{time:new Date().toLocaleString()}
                    })
                    setInterval(function(){
                        vm.time=new Date().toLocaleString();
                    },1000)
                    
                v-model
                    双向绑定模型变量
                        表单元素的值的双向绑定
                        文本框、文本域
                            //<input type="text">    <textarea>
                            <input v-model="kwords">
                            new Vue({
                                data:{
                                    kwords:'',
                                }
                            })
                        单选按钮
                            <label><input type="radio"name="sex"value="0"v-model="sex">男</label>
                            <label><input type="radio"name="sex"value="1"v-model="sex">女</label>
                            new Vue({
                                data:{
                                    sex:''
                                }
                            })
                        复选框
                            //绑定的是checked属性
                            <label><input type="checkbox" v-model="agree">同意</label>
                            new Vue({
                                data:{
                                    agree:false
                                }
                            })
                        下拉选择框
                            <select v-model="status">
                                <option value="10">未付款</option>
                                <option value="20">已付款</option>
                                <option value="30">已发货</option>
                                <option value="40">已签收</option>
                            </select>
                            new Vue({
                                data:{
                                    status:10
                                }
                            })
                v-cloak
                    //当new Vue加载慢时，也不让用户看到{{}}语法，就用v-cloak临时隐藏页面元素
                    <style>
                        [v-cloak]{display:none}
                    </style>
                    <div id="app" v-cloak></div>
                watch
                    监视指定模型变量的变化
                    var vm=new Vue({
                        el:"#app",
                        data:{
                            text:''
                        },
                        watch:{
                            text(){
                                //监视text的变化，一有变化就调用text()
                            }
                        }
                    })
                style绑定
                    第一种方式 字符串方式
                        <div :style="back">dfaf</div>
                        new Vue({
                            data:{
                                back:'background:red;color:blue'
                            }
                        })
                    第二种方式 对象方式
                        <div :style="back">dfaf</div>
                        new Vue({
                            data:{
                                back:{
                                    background:'red',
                                    color:'blue'
                                }
                            }
                        })
                class绑定
                    第一种方式 字符串方式
                        <style>
                            .test{
                                background: red;
                                color:blue;
                            }
                        </style>
                            <div :class="cla">dfaf</div>
                        <script>
                            new Vue({
                                data:{
                                    cla:'test'
                                }
                            })
                        </script>
                    第二种方式 对象方式
                        <style>
                            .test{
                                background: red;
                                color:blue;
                            }
                        </style>
                        <div :class="cla">dfaf</div>
                        <script>
                            new Vue({
                                data:{
                                    cla:{
                                        test:true
                                        //test:false
                                    }
                                }
                            })
                        </script>
                computed
                    计算属性
                        //computed只会计算一次，methods因为是函数调用，所以只要用到的地方都会重新调用计算
                        实例
                        <div id="app">
                                <div>{{total}}</div>
                        </div>
                        <script>
                            new Vue({
                                el:"#app",
                                data:{
                                    price:20
                                },
                                computed:{
                                    total(){
                                        return this.price*3
                                    }
                                }
                            })
                        </script>
                        替代做法
                        <div id="app">
                                <div>{{total()}}</div>
                        </div>
                        <script>
                            new Vue({
                                el:"#app",
                                data:{
                                    price:20
                                },
                                methods:{
                                    total(){
                                        return this.price*3
                                    }
                                }
                            })
                        </script>
                过滤器filter
                        <div id="app">
                            <h1>性别:{{sex | sexFilter("chs") | sexIcon }}</h1>
                            <h1>sex:{{sex | sexFilter("eng") | sexIcon }}</h1>
                        </div>
                        <script>
                        Vue.filter("sexFilter",function(val,lang){
                          if(lang=="chs")
                            return val==1?"男":"女"
                          else
                            return val==1?"Male":"Female"
                        });
                        Vue.filter("sexIcon",function(val){
                          if(val=="男"||val=="Male")
                            return val+"♂";
                          else
                            return val+"♀";
                        })
                        new Vue({
                          el:"#app",
                          data:{ sex:0 }
                        })
                自定义指令
                    //指令所在的元素被加载到DOM树上后自动执行指令
                    实例
                    <div id="app">
                        <input v-jiaodian><button>百度一下</button>
                    </div>
                    <script>
                        Vue.directive("jiaodian",{
                            inserted(elem){//DOM语法
                                elem.focus()
                            }
                        })
                        new Vue({
                            el:"#app",
                            data:{}
                        })
                    </script>
                Axios
                    专门发送http请求的函数库
                    Axios 官方推荐 只要在vue中发送ajax请求都用axios
                        使用
                            引入axios.min.js文件
                            发送两种请求
                                get请求
                                    实例
                                        axios.get(
                                        "http://localhost:3000/details",
                                        {
                                            params:{ 
                                                lid:9 
                                            }
                                        }
                                        ).then(res=>{
                                        console.log(res.data);
                                        })
                                post请求
                                    格式
                                        axios.post(
                                        "http://localhost:3000/details",
                                        'username=lvbo&password=123456&lid=12'
                                        ).then(res=>{
                                        console.log(res.data);
                                        })
                组件化开发
                    拥有专属的HTML，CSS，JS和数据的页面独立区域
                    优点
                    1. 重用
                    2. 便于大项目的分工协作
                    3. 松散耦合
                    每次使用某个组件，都会创建该组件的副本，保证组件的独立性
                    组件分为三种
                        根组件
                            new Vue({
                                el:'#app',
                                data:{}
                            })
                        全局组件
                            Vue.component('Index',{
                                template:'#tplIndex',
                                data(){
                                    return {}
                                }
                            })
                        子组件
                            仅限于在某个父组件内才能使用的组件
                            var todoItem={//组件名用驼峰命名法，在使用组件标签时，vue会自动转换为-分隔的形式
                            template:"#tplTodoItem",  
                            }
                            var todoList={
                            template:"#tplTodoList",
                            components:{ todoItem }//绑定子组件
                            }
                    组件间数据传递
                        父组件向子组件传递数据
                            子组件通过props属性设置自己的自定义数据属性，同时也作为子组件本身的数据模型
                            <template id="tplTodoItem">
                                <li>{{i+1}} - {{task}}</li>
                            </template>
                            <script>
                                var todoItem={
                                template:"#tplTodoItem",
                                props:["task","i"]
                                }
                            </script>
                            <template id="tplTodoList">
                                <ul>
                                    <todo-item v-for="(varr,b) of tasks" :task="varr" :i="b"></todo-item>
                                </ul>
                            </template>
                            <script>
                            var todoList={
                            template:"#tplTodoList",
                            components:{ todoItem }
                            }
                            </script>
                        子组件向父组件传递数据
                            子组件通过this.$emit('父组件事件名',子组件变化的数据)向父组件传递数据
                            <template id="tplTodoAdd">
                                <div>
                                    <input v-model="new_task"><button @click="add()">添加</button>
                                </div>
                            </template>
                            <script>
                                var todoAdd={
                                template:"#tplTodoAdd",
                                data:function(){
                                    return { new_task:"" }
                                },
                                methods:{
                                    add(){
                                    this.$emit("add",this.new_task);//此处的add为父组件在引用子组件标签时用来书写事件的事件名
                                    this.new_task="";
                                    }
                                }
                                }
                            </script>
                            <template id="tplTodo">
                                <div>
                                    <h1>待办事项列表</h1>
                                    <todo-add @add="do_add"></todo-add>
                                </div>
                            </template>
                            <script>
                                Vue.component("todo",{
                                template:"#tplTodo",
                                components:{
                                    todoAdd//Vue自动转为todo-add
                                },
                                methods:{
                                    do_add(a){
                                    this.tasks.push(a);
                                    }
                                }
                                })
                            </script>
                    单页面应用SPA: Single Page Application
                        整个应用程序只有一个完整的HTML页面和多个保存不同"页面"内容的组件片段。
                        SPA应用侦测地址栏中相对路径的变化，选择匹配的组件片段替换唯一HTML文件中的相应区域。
                        单页面应用可以降低前端对服务器的请求次数，提高应用性能，
                        单页面应用第一次加载耗时较长，可通过某种措施解决？？？
                    Vue-router组件
                        在Vue中专门实现单页面应用的组件
                        使用
                            下载并引入vue.js和vue-router.js
                            定义路由字典: 
                                路由字典: 包含相对路径和组件间对应关系的集合
                                    var routes=[
                                    {path:"/", component: Index},
                                    {path:"/index", component: Index },
                                    {path:"/login", component: Login },
                                    {path:"/*", component: NotFount}
                                    ];
                            创建路由器对象，装载路由字典
                                var router=new VueRouter({ routes })
                            将路由器装入根组件new Vue中
                                <div id="app">
                                </div>
                                <script>
                                 new Vue({
                                   el:"#app",
                                   data:{},
                                   router
                                 })
                                 </script>
                            在根组件内容中，预留可能被其他子组件替换的区域
                                 <router-view/> 为其他子组件的片段占位——路由插槽
                        嵌套路由
                            在路由字典中的一个路由对象中，又包含子路由对象
                            var routes=[
                                {
                                    path:"/",
                                    component:Home,
                                    children:[
                                        {path:"/",component:Index},
                                        {path:"/index",component:Index},
                                        {
                                            path:"/details",
                                            component:Details,
                                        }
                                    ]
                                },
                                {path:"/login", component: Login},
                                {path:"/*", component:NotFound}
                            ];
                        路由跳转
                            第一种html方式
                                //<router-link to="/相对路径">文本</router-link>
                                <li><router-link to="/details/9">查看详情</router-link></li>
                            第二种js方式
                                 //this.$router.push("/目标地址")
                                 methods:{
                                    login(){
                                        alert("登录成功!");
                                        this.$router.push("/");
                                    }
                                }
                        路由传参
                            方式一
                                设置路由
                                    var routes=[
                                        {
                                            path:"/details/:lid",
                                            component:Details,
                                        }
                                        ]},
                                    ];
                                设置跳转url
                                    <li><router-link to="/details/9">查看详情</router-link></li>
                                组件中接收参数
                                    <h2>{{$route.params.lid}} 号商品</h2>
                                    JS中
                                        this.$route.params.lid
                            方式二--简化方式
                                设置路由
                                        var routes=[
                                            {
                                                path:"/details/:lid",
                                                component:Details,
                                                props:true
                                            }
                                            ]},
                                        ];
                                设置跳转url
                                    <li><router-link to="/details/9">查看详情</router-link></li>
                                组件中接收参数
                                    <template id="tplDetails">
                                    <div>
                                        <h1>这里是详情页</h1>
                                        <h2>{{lid}} 号商品</h2>
                                    </div>
                                    </template>
                                    <script>
                                    var Details={ 
                                        template:"#tplDetails",
                                        props:["lid"]
                                    }
                                    </script>
                                    JS中
                                        this.lid
                    脚手架
                        半成品的项目源代码
                        脚手架命令行工具(CLI)
                            反复创建脚手架源代码
                        搭建vue脚手架
                            用npm安装脚手架命令行工具: 
                                npm i -g @vue/cli
                            用Vue脚手架工具命令创建项目源代码: 
                                vue create 项目名
                            运行项目: 
                                vs code中，打开项目文件夹，并在终端中打开，输入: npm run serve
                            编译成功后，打开浏览器，访问: http://localhost:5500
                            在vs code中修改vue项目内容后，npm run serve会自动编译重启

                            
                            


                            