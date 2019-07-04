// webpack配置文件 遵循 CommonJs
const path = require('path')
module.exports =  {
    entry: "./src/index.js", //入口文件 出口文件
    output: {
        // path.resolve（） 解析当前相对路径的绝对路径        
        // path: path.resolve('./dist'),
        path: path.join(__dirname, './disk/'), //此处需要绝对路径
        filename: 'custombundle.js' //出口文件名
        
    },
    mode: 'development'  //development 打包是否进行压缩
}