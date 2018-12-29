// webpack主配置文件
module.exports = {
    //mode:'development',
   mode:'production',
    /*入口*/
    entry:'./public/js/index.js',
    /*输出*/
    output:{
        path: __dirname+'/build',
        filename:'app.js'
    },
    /*加载器loader--打包非js文件css、picture...*/
    module: {
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
    /*插件plugin*/
}