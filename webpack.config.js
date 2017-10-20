let webpack = require('webpack');
let extractCss = require('extract-text-webpack-plugin');//用于输出css文件
module.exports = {
    entry:{//入口
        bundle:'./app.js',
        common:['react','react-dom']
    },
    output:{//输出
        publicPath:'/',//这个能不配置就不配置
        path:__dirname+'/dist',//webpack编译完文件的存放地址
        filename:'[name].js'//编译后的文件名
    },
    module:{
        rules:[
            {
                test:/(\.js|\.jsx)$/,
                use:['babel-loader']//babel-loader借助babel来处理入口中引用的Es6或者react的jsx
            },
            {
                test:/\.css$/,
                /* use:extractCss.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }) */
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer:{//启动服务的
        open:true,
        inline:true,
        port:9000,
        hot:true
    },
    resolve:{
        extensions:['.js','.jsx','.css']//自动追加后缀
    },
    devtool:'cheap-module-eval-source-map',//提示错误的源，最根本的出处，增加bundle包的体积
    plugins:[//辅助编译文件
        //new extractCss('index.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('common')
    ]
}