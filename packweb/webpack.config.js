// webpack配置文件 遵循 CommonJs
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
module.exports =  {
    entry: "./src/index.js", //入口文件 出口文件
    output: {
        // path.resolve（） 解析当前相对路径的绝对路径        
        // path: path.resolve('./disk'),
        path: path.join(__dirname, './disk/'), //此处需要绝对路径
        filename: 'bundle.js' //出口文件名
        
    },
    mode: 'production',  //development 打包是否进行压缩
    //watch: true // 开启监视模式 此时执行webpack指令进行打包,会监视文件变化,自动打包
    devServer: {
        open: true,
        port: 3000,
        compress: true,
        hot: true
        // contentBase: './src'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //根据模板template这个index.html,生成filename这个html,这个文件在内存中,项目根目录下
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, 'assets'),
            to: 'assets' // 默认output是disk目录,所以assets相当于 ./assets目录
        }]),
        new webpack.BannerPlugin('坚持就是胜利')
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                //webpack读取loader时候,从右到左的读取,将css文件先交给最右侧的loader处理
                //loader的执行顺序是管道方式链式调用
                // css-loader 解析css文件
                // style-loader 将解析出来的结果,放到html文件中,使其生效


                //将外部的css文件加载到当前页面中 动态的创建一个style标签 一个css文件 对应一个style标签
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader', 'css-loader', 'less-loader']
            },
            {
                test:/\.s(a|c)ss$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            },
            // {
            //     test:/\.(jpg|jpeg|png|bmp|gif|woff|woff2|eot|svg|ttf)$/,
            //     use:'file-loader'
            // },
            //可以配置图片,可以配置字体
            {
                test:/\.(jpg|jpeg|png|bmp|gif|woff|woff2|eot|svg|ttf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // limit限制图片大小,如果小于5kb.以base64格式显示,大于5kb以路径格式显示
                        limit: 5 * 1024, //urlloader功能
                        outputPath: 'images', //fileloader功能
                        name: '[name]-[hash:4],[ext]' // ileloader功能 保留原图片名,后缀名,中间拼hash
                    }
                }]
            },
            {
                test:/\.js$/,
                use: [{
                    loader: 'babel-loader'
                    // options: {
                    //     presets: ['@babel/env'],//预先调整
                    //     plugins: [
                    //         '@babel/plugin-proposal-class-properties',
                    //         '@babel/plugin-transform-runtime'
                    //     ]
                    // }               
                }],
                exclude: /node_modules/ //node_modules不打包
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
}