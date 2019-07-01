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
        - 在开发时开启一个服务器,当修改项目,会自动编译,并刷新浏览器
        - 使用dev-server方式,会将打包好的文件,放在内存中,这样效率更高,在项目根目录下
        - npm i webpack-dev-server -D
        - 将命令配置在,package.json script标签中的 dev中
        - npm run dev
        - 

    webpack-dev-middleware 中间件
