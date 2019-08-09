零配置方式:
    1: npm init -y
    2: npm i webpack webpack-cli -D //在项目中使用
    3: 在src目录下 运行 npx webpack 生成文件在disk目录下  ......是将index.js打包
    4: 右键运行runcode
npx原理:
    node_modules->bin->webpack.cmd 在全局下执行node命令
    nodeJs不需要打包,webPack 主要用在浏览器端打包开发
    ES6导入导出规范:
        import export default{}
webpack基础配置
    1:更改打包入口entry
    2:更改打包出口output
    3:loader
    4:plugins插件

   webpack.cli->bin->config->config.yargs.js
            决定了webpack.config.js的文件名

            webpack.config.js遵循commonJs规范
                - 暴露入口
                    module.exports = {
                        entry:''./src/main.js'
                    }
自定义编译文件
    webpack.custom.config.js 自定义打包配置
        使用方法:
            - npx webpack --config webpack.custom.config.js //使用--config指定配置文件
            - 配置打包命令
                - package.json中,script处,运行打包配置文件 ----缩写
                    - buildcustom: "webpack --config webpack.custom.config.js"
                        - npm run buildcustom 执行webpack.custom.config.js ---- 运行方式
                    - build:"webpack"
                        - npm run build 执行默认的webpack.config.js  ---- 执行方式
开发时自动编译
    webpack's Watch Mode 
        - webpack.config.js中 watch true; 
        - package.json中的scripts中,添加--watch
    webpack-dev-server(多数情况下)
        - 在开发时开启一个express服务器,当修改项目,会自动编译,并刷新浏览器
        - 使用dev-server方式,会将打包好的文件,放在内存中,这样效率更高,在项目根目录下
        - npm i webpack-dev-server -D
        - 将命令配置在,package.json script标签中的 dev中
        - npm run dev
        - 开启服务器后,会运行跟目录下的 index.html文件
            - 将index文件放到src目录下,指定运行文件
                - webpack.config.js中,script标签,添加contentBase src
                - contentBase 指定服务器默认运行文件的目录
                - --port 指定服务器端口
                - --hot 热模块更新,只更新更改的内容
                - --compress 开启压缩
        - HMR热更新
    html插件
        - npm i html-webpack-plugin -D
        - 功能
            - devServer时,根据模板再express项目目录下生成html(类似于devServer生成内存中的bundle.js),但不会自动刷新
            - devServer时,自动引入boundle.js,不需要手动引入boundle.js文件
            - 打包时候会自动生成index.html
    webpack-dev-middleware 中间件
        - 略

    自动编译工具小结
        - 只有在开发时候,才需要使用自动编译工具 webpack-dev-server
        - 项目上线时候都会直接使用webpack进行打包构建,不需要使用这些自动编译工具,自动编译工具,是为了提高开发体验
        - html插件,在开发,上线时候,提供生成html文件的
loader: 用于对模块的源代码进行转化
    - npm i -g sass-loader
    - npm i -g node-sass
    - npm i -g less less-loader -D
    - npm i -g node-sass sass-loader -D
使用webpack打包图片 字体
    - npm i bootstrap@3 -S
    - npm i file-loader -D
    - npm i url-loader -D  urlloader依赖fileloader
    - url-loader是封装的file-loader, 只有limit是url-loader功能,其他的是file-loader功能
        - limit功能: 将小的，即低于limit的图片进行base64编码，以减少http请求
自定义图片打包到目录
    - outputPath: 'images'
    - name: '[name][hash].[ext]'
js处理 babel 
    - npm i babel-loader @babel/core @babel/preset-env -D
    - babel-loader 跟webpack相关的包
    - @babel/core babel的核心包
    - @babel/preset-env  语法预设包 
    - webpack
    - babel 将es6 es7转换为es5语法
    - 让浏览器支持
    - exclude: /node_modules/
    - include: /node_modules/ 打包的文件
generator使用
    - 新版本浏览器支持生成器函数
    - 安装 npm install --save-dev @babel/plugin-transform-runtime 插件
    - 安装 npm install --save @babel/runtime 运行时依赖 内部依赖 低版本兼容性处理
    - 使用 plugins: ['@babel/plugin-transform-runtime']
将babel配置文件独立出来
    - .babelrc文件
    - 转义所有语法
es6 es7 对象原型上的新方法 includes方法
    - 安装:npm install --save @babel/polyfill
    - 使用方式:import "@babel/polyfill";

source map的使用
    - 源码映射的工具,用于定位报错使用
    - 配置:
        - 生产环境中,不要用sourcemap
            - 生产环境使用,会直接定位到源码,暴露源码
        - 只有在开发环境中才会用到sourcemap
        - 使用带eval的,直接在代码内部定位错误位置
            - devtool: 'cheap-module-eval-source-map' //会将sourcemap 也打包到boundle.js文件中
            - cheap模式 增加生成速度 eval没有映射原始源代码, 重构的时候非常快
        - 需要浏览器开启这个功能
webpack中安装拆件
    - clean-webpack-plugin  
        使用方法:
            - 安装: npm i clean-webpack-plugin -D
            - const { CleanWebpackPlugin } = require('clean-webpack-plugin')
            - new CleanWebpackPlugin({})
    
        - npm run build 之前自动清除disk目录后,重新生成
        - 默认删除output配置的的目录
    - copy-webpack-plugin
        - img标签是前段本地的静态资源,对应cdn地址
        - assets是放静态资源的,不打包
        - npm i copy-webpack-plugin -D
    - BannerPlugin webpack的内置插件
切换分支:
    git branch --all
    git checkout dev-sfm
    git checkout dev
    git reset --hard
    git pull

